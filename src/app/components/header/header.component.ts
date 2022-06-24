import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartTotalProductsSelector } from '@state/cart/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartTotalProducts$ = this.store.select(CartTotalProductsSelector);
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
