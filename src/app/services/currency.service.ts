import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { KlineUpdate } from '../models/kline-update.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService implements OnDestroy {
  private readonly apiUrl = 'https://api.binance.com/api/v3/ticker/24hr';
  private klineWs: WebSocket | null = null;
  private priceWs: WebSocket | null = null;
  private priceUpdates$ = new Subject<any>();
  private klineUpdates$ = new Subject<KlineUpdate>();

  constructor(private http: HttpClient) {}

  getCurrencyPairs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) => data.filter((item) => item.symbol.endsWith('USDT')))
    );
  }

  startPriceSocket(): void {
    const wsUrl = `wss://stream.binance.com:9443/ws/!ticker@arr`;
    this.priceWs = new WebSocket(wsUrl);

    this.priceWs.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.priceUpdates$.next(message);
    };
  }

  getPriceUpdates(): Observable<any> {
    return this.priceUpdates$.asObservable();
  }

  startKlineSocket(symbol: string, interval: string): void {
    if (this.klineWs) {
      this.klineWs.close();
    }

    this.klineUpdates$ = new Subject<any>();

    let wsUrl = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`;
    this.klineWs = new WebSocket(wsUrl);

    this.klineWs.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.k && message.k.i === interval) {
        console.log('message.k', message.k)
        this.klineUpdates$.next(message.k as KlineUpdate);
      }
    };

    this.klineWs.onclose = () => {
      this.klineWs = null;
    };
  }

  stopKlineSocket(): void {
    if (this.klineWs) {
      this.klineWs.close();
      this.klineWs = null;
    }
  }

  getKlineUpdates(): Observable<KlineUpdate> {
    return this.klineUpdates$.asObservable();
  }

  getKlineData(symbol: string, interval: string): Observable<any[]> {
    const klineUrl = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}`;
    return this.http.get<any[]>(klineUrl);
  }

  ngOnDestroy(): void {
    if (this.priceWs) {
      this.priceWs.close();
    }
    if (this.klineWs) {
      this.klineWs.close();
    }
  }
}
