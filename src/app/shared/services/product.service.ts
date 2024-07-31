import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/posts'

  postCreate(product: any): Observable<any>{
    return this.http.post<any>(`${this.url}`, product).pipe(map(obj =>{
      console.log(obj);
      return obj
    }))

  }

  getProduct():Observable<any>{
    return this.http.get(`${this.url}`) .pipe(map(obj => {
      console.log(obj);
      return obj
    }))
  }

  deleteProduct(id:any): Observable<any>{
     return this.http.delete<void>(`${this.url}/${id}`)
  }
  updateProduct(id: number, product: any): Observable<void> {
    return this.http.put<void>(`${this.url}/${id}`, product);
  }
}
