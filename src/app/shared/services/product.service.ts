import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Category } from '@interfaces/category.interface';
import { Product } from '@interfaces/product.interface';
import { Pagination } from '../interfaces/pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts({ skip = 0, limit = 10, category, search }: { skip?: number; limit?: number; category?: Category; search?: string }) {
    const url = `${environment.apiUrl}/products`;
    const searchSegment = search ? '/search' : '';
    const categorySegment = category ? `/category/${category}` : '';

    return this.httpClient.get<Pagination<Product>>(`${url}${searchSegment}${categorySegment}`, {
      params: {
        skip,
        limit,
        ...(search ? { q: search } : {})
      }
    });
  }
}
