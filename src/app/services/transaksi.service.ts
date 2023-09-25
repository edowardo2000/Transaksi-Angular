import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ITransaksi } from '../interfaces/i-transaksi';

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {

  private apiUrl = environment.baseURL + '/barang-in';

  constructor(private http: HttpClient) {

  }

  getTransaksi(): Observable<ITransaksi[]> {
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": environment.token,
    }

    return this.http
      .get<any>(this.apiUrl, { headers })
      .pipe(map((response) => response));
  }

  public create(katbarang: ITransaksi): Observable<any> {
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": environment.token,
    }
    const body = JSON.stringify(katbarang);
    console.log(body)
    return this.http.post<any>(`${environment.baseURL}/katbarang/v1/sv`, body, { headers });
  }


}
