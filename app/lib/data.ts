import { sql } from "@vercel/postgres";
import { Bidang, VisiMisi } from "./definitions";
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

export async function getVisiMisi() {
  noStore();

  try {
    const data = await sql<VisiMisi>`SELECT * FROM visiMisi`;
    return data.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch visi misi");
  }
}
