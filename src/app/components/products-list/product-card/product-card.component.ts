import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@interfaces/product.interface';
import { Store } from '@ngrx/store';
import { addToCartAction } from '@state/cart/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = Object(null);

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addProductToCard(product: Product) {
    this.store.dispatch(addToCartAction({ product }));
  }
}
