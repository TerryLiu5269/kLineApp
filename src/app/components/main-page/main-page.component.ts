import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CurrencyPair } from '../../models/currency-pair.model';
import { PRICE_DEFAULT_COLOR, PRICE_FALLING_COLOR, PRICE_RISING_COLOR } from '../../app.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [CurrencyService],
})
export class MainPageComponent implements OnInit, OnDestroy {
  currencyPairs: CurrencyPair[] = [];
  displayedPairs: CurrencyPair[] = [];
  private priceSubscription: Subscription | null = null;
  private itemsToShow = 24;
  sortBy: keyof CurrencyPair = 'volume';

  priceDefaultColor = PRICE_DEFAULT_COLOR;
  priceRisingColor = PRICE_RISING_COLOR;
  priceFallingColor = PRICE_FALLING_COLOR;

  constructor(
    private currencyService: CurrencyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currencyService.getCurrencyPairs().subscribe((data) => {
      this.currencyPairs = data
        .map((pair) => ({
          ...pair,
          priceColor: this.priceDefaultColor
        }))
        .sort((a, b) => this.dynamicSort(a, b));

      this.displayedPairs = this.currencyPairs.slice(0, this.itemsToShow);
    });

    this.currencyService.startPriceSocket();
    this.priceSubscription = this.currencyService.getPriceUpdates().subscribe((updates) => {
      this.updateCurrencyPrices(updates);
    });
  }

  updateCurrencyPrices(updates: any): void {
    updates.forEach((update: any) => {
      const pair = this.currencyPairs.find((p) => p.symbol === update.s);
      if (pair) {
        const newPrice = parseFloat(update.c);
        const oldPrice = pair.lastPrice;

        pair.lastPrice = newPrice;

        if (newPrice > oldPrice) {
          pair.priceColor = this.priceRisingColor;
          pair.isRising = true;
          pair.isFalling = false;
        } else if (newPrice < oldPrice) {
          pair.priceColor = this.priceFallingColor;
          pair.isRising = false;
          pair.isFalling = true;
        } else {
          pair.priceColor = this.priceDefaultColor;
          pair.isRising = false;
          pair.isFalling = false;
        }

        setTimeout(() => {
          pair.priceColor = this.priceDefaultColor;
          pair.isRising = false;
          pair.isFalling = false;
        }, 800);
      }
    });
  }

  loadMore(): void {
    const currentLength = this.displayedPairs.length;
    const nextItems = this.currencyPairs.slice(currentLength, currentLength + 24);
    this.displayedPairs = [...this.displayedPairs, ...nextItems];
  }

  onSortChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.sortBy = target.value as keyof CurrencyPair;
    this.currencyPairs.sort((a, b) => this.dynamicSort(a, b));
    this.displayedPairs = this.currencyPairs.slice(0, this.itemsToShow);
  }

  private dynamicSort(a: CurrencyPair, b: CurrencyPair): number {
    return (b[this.sortBy] as number) - (a[this.sortBy] as number);
  }

  onDrilldown(symbol: string): void {
    this.router.navigate(['/drilldown', symbol]);
  }

  ngOnDestroy(): void {
    if (this.priceSubscription) {
      this.priceSubscription.unsubscribe();
    }
  }
}
