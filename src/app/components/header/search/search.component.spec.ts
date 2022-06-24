import { Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Subject } from 'rxjs';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [Store, provideMockStore(), Renderer2]
    }).compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dropdown', () => {
    component.toggleDropdown();
    expect(component.isDroppedDown).toBeTrue();
    component.toggleDropdown();
    expect(component.isDroppedDown).toBeFalse();
  });

  it('should filter products by category', () => {
    const spy = spyOn(store, 'dispatch');
    component.filterByCategory('category');
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should emit search term', () => {
    const searchSubject = new Subject<string>();
    const spy = spyOn(searchSubject, 'next');
    component.searchSubject = searchSubject;

    const event = { target: { value: 'test search' } } as any;

    component.onSearch(event);
    expect(spy).toHaveBeenCalled();
  });

  it('should not close dropdown if clicked outside it', () => {
    const searchSubject = new Subject<string>();

    const event = { target: { value: 'test search' } } as any;
    component.clickOutsideEventListener(event);

    expect(component.isDroppedDown).toBeFalse();
  });
});
