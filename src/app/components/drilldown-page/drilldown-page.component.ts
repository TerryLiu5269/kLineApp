import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CurrencyService } from '../../services/currency.service';
import { createChart, IChartApi, ISeriesApi, UTCTimestamp } from 'lightweight-charts';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-drilldown-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonToggleModule
  ],
  templateUrl: './drilldown-page.component.html',
  styleUrls: ['./drilldown-page.component.scss'],
  providers: [CurrencyService]
})
export class DrilldownPageComponent implements OnInit, OnDestroy {
  chart: IChartApi | null = null;
  lineSeries: ISeriesApi<'Candlestick'> | null = null;
  symbol: string = '';
  interval: string = '1m';
  private klineSubscription: Subscription | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(
    private route: ActivatedRoute,
    private currencyService: CurrencyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.symbol = this.route.snapshot.params['symbol'];
    this.initializeChart();
    this.loadKlineData();
    this.startKlineSocket();

    this.klineSubscription = this.currencyService.getKlineUpdates().subscribe((data) => {
      if (this.lineSeries) {
        const newData = {
          time: data.t / 1000 as UTCTimestamp,
          open: parseFloat(data.o),
          high: parseFloat(data.h),
          low: parseFloat(data.l),
          close: parseFloat(data.c),
        };
        this.lineSeries.update(newData);
      }
    });
  }

  initializeChart(): void {
    const chartElement = document.getElementById('chart')!;

    if (this.chart) {
        this.chart.remove();
    }

    this.chart = createChart(chartElement, {
        width: chartElement.clientWidth,
        height: 600,
        rightPriceScale: {
            visible: true,
            borderVisible: true,
            mode: 0,
        },
        grid: {
            vertLines: {
                color: '#e0e0e0',
                style: 1
            },
            horzLines: {
                color: '#e0e0e0',
                style: 1
            },
        }
    });

    this.lineSeries = this.chart.addCandlestickSeries();

    this.resizeObserver = new ResizeObserver(() => {
        if (this.chart) {
            this.chart.resize(chartElement.clientWidth, 600);
        }
    });
    this.resizeObserver.observe(chartElement);
}

  loadKlineData(): void {
    this.currencyService.getKlineData(this.symbol, this.interval).subscribe((data) => {
      const seriesData = data.map((item) => ({
        time: Math.floor(item[0] / 1000) as UTCTimestamp,
        open: parseFloat(item[1]),
        high: parseFloat(item[2]),
        low: parseFloat(item[3]),
        close: parseFloat(item[4]),
      }));

      if (this.lineSeries) {
        this.lineSeries.setData(seriesData);
      }
    });
  }

  startKlineSocket(): void {
    this.currencyService.startKlineSocket(this.symbol, this.interval);
  }

  onIntervalChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newInterval = target.value;

    if (this.klineSubscription) {
      this.klineSubscription.unsubscribe();
    }

    this.interval = newInterval;
    this.currencyService.startKlineSocket(this.symbol, this.interval);
    this.loadKlineData();

    this.klineSubscription = this.currencyService.getKlineUpdates().subscribe((data) => {
      if (this.lineSeries) {
        const newData = {
          time: Math.floor(data.t / 1000) as UTCTimestamp,
          open: parseFloat(data.o),
          high: parseFloat(data.h),
          low: parseFloat(data.l),
          close: parseFloat(data.c),
        };
        this.lineSeries.update(newData);
      }
    });
  }

  goBack(): void {
    this.currencyService.stopKlineSocket();
    this.location.back();
  }

  ngOnDestroy(): void {
    this.currencyService.stopKlineSocket();
    if (this.klineSubscription) {
      this.klineSubscription.unsubscribe();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
