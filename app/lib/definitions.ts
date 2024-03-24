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

export type VisiMisi = {
  periode: string;
  visi: string;
  misi: Array<string>;
};

export type Admin = {
  id: string;
  name: string;
  email: string;
  password: string;
};
