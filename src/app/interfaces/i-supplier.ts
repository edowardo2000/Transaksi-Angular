import { IBarang } from "./i-barang";

export interface ISupplier {
    id?: number;
    nama: string;
    alamat: string;
    listBarang: IBarang[];
}