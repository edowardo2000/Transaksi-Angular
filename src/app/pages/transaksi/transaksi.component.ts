import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, throwError } from 'rxjs';
import { ISupplier } from 'src/app/interfaces/i-supplier';
import { ITransaksi } from 'src/app/interfaces/i-transaksi';
import { SupplierService } from 'src/app/services/supplier.service';
import { TransaksiService } from 'src/app/services/transaksi.service';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.css']
})
export class TransaksiComponent implements OnInit {
  iTransaksi: ITransaksi[] = [];
  iSupplier: ISupplier[] = [];
  addForm: boolean = false;

  constructor(private modalService: NgbModal, private http: HttpClient, private transaksiService: TransaksiService, private supplierService: SupplierService) {
  }

  getTransaksi() {
    this.transaksiService.getTransaksi().pipe(catchError(this.handleError)).subscribe((data) => {
      this.iTransaksi = data;
      console.log(data);
    })
  }

  getSupplier() {
    this.supplierService.getSuppliers().pipe(catchError(this.handleError)).subscribe((data) => {
      this.iSupplier = data;
      console.log(data);
    })
  }

  // onCreate(transaksiService: TransaksiService){
  //   transaksiService?.create(this.iTransaksi).pipe(catchError
  //     (this.handleError)).subscribe(()=>{
  //       this.getTransaksi();
  //       this.iTransaksi={

  //       };
  //     })

  // }




  ngOnInit(): void {
    this.getTransaksi();
    this.getSupplier();
  }

  openAdd(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' },).result.then(
      (result: any) => {
        console.log("opening")
      },
      (reason: any) => {

      }
    )
  }

  onAdd() {
    this.addForm = !this.addForm;
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

}
