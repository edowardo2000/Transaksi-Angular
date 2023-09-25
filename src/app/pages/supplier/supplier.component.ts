import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, throwError } from 'rxjs';
import { ISupplier } from 'src/app/interfaces/i-supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  iSupplier: ISupplier[] = [];
  addForm: boolean = false;

  // newSupplier: ISupplier = {
  //   id: 0,
  //   nama: '',
  //   alamat: '',
  //   listBarang = ;
  // };

  // upSupplier: ISupplier = {
  //   id: 0,
  //   nama: '',
  //   alamat: '',
  // };

  ngOnInit(): void {
    this.getSupplier();
  }

  getSupplier() {
    this.supplierService.getSuppliers().pipe(catchError(this.handleError)).subscribe((data) => {
      this.iSupplier = data;
      console.log(data);
    })
  }

  constructor(private modalService: NgbModal, private http: HttpClient, private supplierService: SupplierService) {
  }

  openAdd(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
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


  onDelete(suppliers: ISupplier): void {
    if (suppliers && suppliers.id) {
      this.supplierService.deleteSupplier(suppliers.id).subscribe(() => {
        this.getSupplier()
        window.location.reload();
      })
    }
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
