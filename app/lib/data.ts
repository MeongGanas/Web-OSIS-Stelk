import { sql } from "@vercel/postgres";
import { Anggota, Bidang, Events, Misi, PesanKetos } from "./definitions";
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

export async function getDetailBidang(id: string) {
  noStore();

  try {
    const data =
      await sql<Bidang>`SELECT * FROM bidangs WHERE id = ${id.toString()}`;
    return data.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch detail bidang");
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
    throw new Error("failed fetch pesan ketos");
  }
}

export async function getIntroImage() {
  noStore();

  try {
    const introImage = await sql`SELECT * FROM intropage`;
    return introImage.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch prev image");
  }
}

export async function getAllEvents() {
  noStore();

  try {
    const events = await sql<Events>`SELECT * FROM events`;
    return events.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch events");
  }
}

export async function get3Events() {
  noStore();

  try {
    const events =
      await sql<Events>`SELECT * FROM events ORDER BY id DESC LIMIT 3`;
    return events.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch events");
  }
}

export async function getDetailEvent(id: string) {
  noStore();

  try {
    const events = await sql<Events>`SELECT * FROM events WHERE id=${id}`;
    return events.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch events");
  }
}

export async function getAllAnggota(id: string) {
  noStore();

  try {
    const anggotas =
      await sql<Anggota>`SELECT * FROM anggotas WHERE idBidang=${id}`;
    return anggotas.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch anggota");
  }
}
