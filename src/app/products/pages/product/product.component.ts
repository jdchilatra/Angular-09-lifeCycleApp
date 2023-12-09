import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements
              OnInit, OnChanges, DoCheck,
              AfterContentInit, AfterContentChecked,
              AfterViewInit, AfterViewChecked,
              OnDestroy{

  public isProductVisible = false;
  public currentPrice: number = 10;

  constructor(){
    console.log('constructor');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  increasePrice(){
    this.currentPrice++;
  }

}
