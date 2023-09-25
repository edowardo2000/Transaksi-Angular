import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISupplier } from '../interfaces/i-supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiUrl = environment.baseURL + '/suppliers';

  constructor(private http: HttpClient) {

  }

  getSuppliers(): Observable<ISupplier[]> {
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": environment.token,
    }

    return this.http
      .get<any>(this.apiUrl, { headers })
      .pipe(map((response) => response));
  }

  getSupplierById(id: number): Observable<ISupplier> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ISupplier>(url);
  }

  deleteSupplier(id: number): Observable<void> {
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": environment.token,
    }
    const url = `${this.apiUrl}/v1/del/${id}`;
    return this.http.delete<void>(url, {
      headers
    });
  }
}
