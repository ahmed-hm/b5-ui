import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ProductCardComponent } from './product-card/product-card.component';

import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent, ProductCardComponent],
      providers: [Store, provideMockStore()]
    }).compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call next page of products with limit of 10', () => {
    const spy = spyOn(store, 'dispatch');
    component.onScroll(0, 10);
    expect(spy).toHaveBeenCalled();
  });

  it('should call next page of products with undefined limit', () => {
    const spy = spyOn(store, 'dispatch');
    component.onScroll(0);
    expect(spy).toHaveBeenCalled();
  });
});
