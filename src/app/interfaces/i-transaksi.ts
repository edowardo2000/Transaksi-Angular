import { ISupplier } from "./i-supplier";

export interface ITransaksi {
    _id: String;
    tanggal: Date;
    grandTotal: number;
    supplier: ISupplier[];
}
