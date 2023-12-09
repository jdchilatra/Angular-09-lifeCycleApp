import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements
              OnInit, OnChanges, OnDestroy{

  @Input()
  price : number = 0;

  public interval$?: Subscription;

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('PriceComponent: ngOnChanges');
  }
  ngOnDestroy(): void {
    this.interval$?.unsubscribe();
  }
  ngOnInit(): void {
    this.interval$ = interval(1000)
      .subscribe(value => console.log(`Tick:${value}`))
    console.log('PriceComponent: ngOnInit');
  }

}
