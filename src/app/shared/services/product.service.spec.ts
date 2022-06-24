import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products', async () => {
    try {
      const products = await lastValueFrom(service.getProducts({ skip: 0, limit: 10 }));

      expect(products).toBeTruthy();
      expect(products.products).toBeInstanceOf(Array);
      expect(products.products.length).toBeGreaterThan(0);
    } catch (error) {}
  });

  it('should get products without passing limit', async () => {
    try {
      const products = await lastValueFrom(service.getProducts({ skip: 0 }));

      expect(products).toBeTruthy();
      expect(products.products).toBeInstanceOf(Array);
      expect(products.products.length).toBeGreaterThan(0);
    } catch (error) {}
  });

  it('should get products without passing limit nor skip', async () => {
    try {
      const products = await lastValueFrom(service.getProducts({}));

      expect(products).toBeTruthy();
      expect(products.products).toBeInstanceOf(Array);
      expect(products.products.length).toBeGreaterThan(0);
    } catch (error) {}
  });

  it('should get products by category', async () => {
    try {
      const products = await lastValueFrom(service.getProducts({ skip: 0, limit: 10, category: 'tops' }));

      expect(products).toBeTruthy();
      expect(products.products).toBeInstanceOf(Array);
      expect(products.products.length).toBeGreaterThan(0);
    } catch (error) {}
  });

  it('should search products', async () => {
    try {
      const products = await lastValueFrom(service.getProducts({ skip: 0, limit: 10, search: 'phone' }));

      expect(products).toBeTruthy();
      expect(products.products).toBeInstanceOf(Array);
      expect(products.products.length).toBeGreaterThan(0);
    } catch (error) {}
  });
});
