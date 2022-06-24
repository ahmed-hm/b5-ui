import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FiltersComponent } from '@components/filters/filters.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { SearchComponent } from '@components/header/search/search.component';
import { MenuComponent } from '@components/menu/menu.component';
import { ProductCardComponent } from '@components/products-list/product-card/product-card.component';
import { ProductsListComponent } from '@components/products-list/products-list.component';
import { categoryEffects } from '@effects/category.effects';
import { ProductEffects } from '@effects/product.effects';
import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { cartReducer } from '@state/cart/cart.reducers';
import { categoryReducer } from '@state/category/category.reducers';
import { productReducer } from '@state/product/product.reducers';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';

@NgModule({
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
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      cart: cartReducer,
      product: productReducer,
      category: categoryReducer
    }),
    EffectsModule.forRoot([ProductEffects, categoryEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
