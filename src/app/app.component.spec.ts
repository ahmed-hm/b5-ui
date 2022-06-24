import { Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductCardComponent } from './components/products-list/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        ProductCardComponent,
        FooterComponent,
        FiltersComponent,
        SearchComponent,
        ProductsListComponent
      ],
      providers: [Store, provideMockStore(), Renderer2]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'b5digital-ui-task'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('b5digital-ui-task');
  });
});
