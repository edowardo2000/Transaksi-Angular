import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KategoriBarangComponent } from './pages/kategori-barang/kategori-barang.component';
import { BarangComponent } from './pages/barang/barang.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { TransaksiComponent } from './pages/transaksi/transaksi.component';

const routes: Routes = [
  {
    path: 'kategori',
    component: KategoriBarangComponent,
  },
  {
    path: 'barang',
    component: BarangComponent,
  },
  {
    path: 'supplier',
    component: SupplierComponent,
  },
  {
    path: '',
    component: TransaksiComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
