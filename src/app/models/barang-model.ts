import { IBarang } from "../interfaces/i-barang";

export class Barang implements IBarang {
    harga: number = 0;
    idBarang: Number = 0;
    namaBarang: String = "";
    deskripsi: String = "";
}
