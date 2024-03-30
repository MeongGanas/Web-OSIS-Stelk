type Anggota = {
  nama: string;
  image: string;
  profesi?: string;
};

export type Bidang = {
  id: number;
  nama: string;
  periode: string;
  anggota: Array<Anggota>;
  tugas: string;
  image: string;
};

export type Inti = {
  periode: string;
  image: string;
  anggota: Array<Anggota>;
  tugas: string;
};

export type Admin = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Misi = {
  id: number;
  misi: string;
};

export type PesanKetos = {
  id: number;
  nama: string;
  pesan: string;
  periode: string;
};
