import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Category } from '@interfaces/category.interface';
import { Store } from '@ngrx/store';
import { categoriesSelector } from '@state/category/category.selectors';
import { getProductsActions, setSearchActions, setSelectedCategoryActions } from '@state/product/product.actions';
import { searchTermSelector, selectedCategorySelector } from '@state/product/product.selectors';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  categories$ = this.store.select(categoriesSelector);
  selectedCategory$ = this.store.select(selectedCategorySelector);
  searchTerm$ = this.store.select(searchTermSelector);

  isDroppedDown: boolean = false;
  searchSubject = new Subject<string>();

  @ViewChild('dropdownMenu') dropdownMenu?: ElementRef;
  @ViewChild('dropdownToggle') dropdownToggle?: ElementRef;

  constructor(private store: Store, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.listen(window, 'click', this.clickOutsideEventListener.bind(this));

    this.searchSubject.pipe(debounceTime(500), distinctUntilChanged()).subscribe((search) => {
      this.store.dispatch(setSearchActions({ search }));
      this.store.dispatch(getProductsActions({ limit: 10, skip: 0, search }));
    });
  }

  ngOnDestroy(): void {
    this.searchSubject.unsubscribe();
  }

  toggleDropdown() {
    this.isDroppedDown = !this.isDroppedDown;
  }

  filterByCategory(category: Category) {
    this.store.dispatch(setSelectedCategoryActions({ category }));
    this.store.dispatch(getProductsActions({ limit: 10, skip: 0 }));
    this.isDroppedDown = false;
  }

  onSearch(event: Event) {
    const search = (event.target as HTMLInputElement).value;
    this.searchSubject.next(search);
  }

  clickOutsideEventListener(event: Event) {
    if (
      this.dropdownMenu &&
      this.dropdownToggle &&
      !this.dropdownMenu.nativeElement.contains(event.target) &&
      !this.dropdownToggle.nativeElement.contains(event.target)
    ) {
      this.isDroppedDown = false;
    }
  }
}
