import { sql } from "@vercel/postgres";
import { Bidang } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function getDetailBidang() {
  noStore();

  try {
    const data = await sql<Bidang>`SELECT * FROM bidangs`;
    return data.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch bidang");
  }
}
