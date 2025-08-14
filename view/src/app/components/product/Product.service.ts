import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Base URL for all product operations. nginx proxies /api to your backend.
  private readonly base = '/api/products';

  constructor(private http: HttpClient) {}

  /** Get all products or a single product by id */
  get(id?: number): Observable<any> {
    const url = id ? `${this.base}/${id}` : `${this.base}${location.search}`;
    return this.http.get(url);
  }

  /** Create a new product */
  create(data: any): Observable<any> {
    // data: { name: string, price: number }
    return this.http.post(this.base, data);
  }

  /** Update an existing product */
  edit(id: number, data: any): Observable<any> {
    return this.http.put(`${this.base}/${id}`, data);
  }

  /** Delete a product */
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
