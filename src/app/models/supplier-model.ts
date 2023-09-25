import { IBarang } from '../interfaces/i-barang';
import { ISupplier } from '../interfaces/i-supplier';

export class SupplierModel implements ISupplier {
    id?: number | undefined = 0;
    nama: string = '';
    alamat: string = '';
    listBarang: IBarang[] = [];
}
