import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IKategoriBarang } from '../interfaces/i-kategori-barang';

@Injectable({
  providedIn: 'root'
})
export class KategoriBarangService {


  constructor(private http: HttpClient) {

  }

  public all(): Observable<IKategoriBarang[]> {
    const headers = {
      "Content-Type": "application/json",
    }

    return this.http.get<IKategoriBarang[]>(`${environment.baseURL}/katbarang/v1/findall`, {
      headers,
    });
  }
}
