import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '@app/app.component';
import { FiltersComponent } from '@components/filters/filters.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { SearchComponent } from '@components/header/search/search.component';
import { MenuComponent } from '@components/menu/menu.component';
import { ProductCardComponent } from '@components/products-list/product-card/product-card.component';
import { ProductsListComponent } from '@components/products-list/products-list.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ProductCardComponent,
    FooterComponent,
    FiltersComponent,
    SearchComponent,
    ProductsListComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
