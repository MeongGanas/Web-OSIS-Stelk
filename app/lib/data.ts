import { sql } from "@vercel/postgres";
import { Bidang, Misi, PesanKetos } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function getAllBidang() {
  noStore();

  try {
    const data = await sql<Bidang>`SELECT * FROM bidangs`;
    return data.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch all bidang");
  }
}

export async function getDetailBidang(id: String) {
  noStore();

  try {
    const data =
      await sql<Bidang>`SELECT * FROM bidangs WHERE id = ${id.toString()}`;
    return data.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch bidang");
  }
}

export async function getAbout() {
  noStore();

  try {
    const about = await sql`SELECT * FROM aboutosis`;
    const visi = await sql`SELECT * FROM visiosis`;
    const misi = await sql<Misi>`SELECT * FROM misiosis ORDER BY id`;
    return {
      about: about.rows[0].about,
      visi: visi.rows[0].visi,
      misi: misi.rows,
    };
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch about");
  }
}

export async function getPesanKetos() {
  noStore();

  try {
    const pesan = await sql<PesanKetos>`SELECT * FROM pesanketos`;
    return pesan.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch about");
  }
}
