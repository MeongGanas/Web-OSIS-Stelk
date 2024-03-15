import { sql } from "@vercel/postgres";
import { Bidang } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function getDetailBidang(id: String) {
  noStore();

  try {
    console.log("fetch data");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("selesai fetch data");

    const data =
      await sql<Bidang>`SELECT * FROM bidangs WHERE id = ${id.toString()}`;
    return data.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch bidang");
  }
}
