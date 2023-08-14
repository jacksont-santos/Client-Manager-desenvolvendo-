import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

interface Query {
    skip: number,
    take: number,
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    baseURL = environment.myApp_business;
    constructor(private http: HttpClient) {};

    getProductList(query?: Query): Observable<any> {
        const options = query
            ? { params: new HttpParams().set('skip', query.skip) }
            : { params: new HttpParams().set('skip', 0).set('take', 22) };
        return this.http.get(`${this.baseURL}/products`, options)
    };
}