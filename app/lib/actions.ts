"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function Logout() {
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
}

export async function AddMisi(
  prevState: { success: boolean; message: string } | undefined,
  formData: FormData,
) {
  const misiBaru = formData.get("misiBaru")?.toString();
  try {
    await sql`INSERT INTO misiosis (misi) VALUES (${misiBaru})`;
    revalidatePath("/dashboard/home");
    return { success: true, message: "Misi added successfully." };
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
}

export async function EditAbout(
  prevState: { success: boolean; message: string } | undefined,
  formData: FormData,
) {
  const about = formData.get("about")?.toString();

  try {
    await sql`UPDATE aboutosis SET about=${about}`;
    revalidatePath("/dashboard/home");
    return { success: true, message: "About updated successfully." };
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
}

export async function EditVisi(
  prevState: { success: boolean; message: string } | undefined,
  formData: FormData,
) {
  const visi = formData.get("visi")?.toString();

  try {
    await sql`UPDATE visiosis SET visi=${visi}`;
    revalidatePath("/dashboard/home");
    return { success: true, message: "Visi updated successfully." };
  } catch (error) {
    return { success: false, message: "Something went wrong." };
  }
}

export async function EditMisi(
  prevState: { success: boolean; message: string } | undefined,
  formData: FormData,
) {
  const entries = Array.from(formData.entries());
  const misiEntries = entries.filter(([key]) => key.startsWith("misi-"));

  try {
    await Promise.all(
      misiEntries.map(async (misi) => {
        const entries = misi[0];
        const id = entries.slice(5, entries.length);
        const value = misi[1];

        if (value.toString().length === 0) {
          await sql`DELETE FROM misiosis WHERE id=${id}`;
        } else {
          await sql`UPDATE misiosis SET misi=${value.toString()} WHERE id=${id}`;
        }
      }),
    );

    revalidatePath("/dashboard/home");
    return { success: true, message: "Misi updated successfully." };
  } catch (error) {
    return { success: false, message: "Something went wrong." };
  }
}

export async function EditPesanKetos(
  prevState: { success: boolean; message: string } | undefined,
  formData: FormData,
) {
  const pesan = formData.get("pesan")?.toString();
  const nama = formData.get("nama")?.toString();
  const periode = formData.get("periode")?.toString();

  try {
    await sql`UPDATE pesanketos SET pesan=${pesan}, periode=${periode}, nama=${nama} `;
    revalidatePath("/dashboard/home");
    return { success: true, message: "Sambutan Ketos updated successfully." };
  } catch (error) {
    return { success: false, message: "Something went wrong." };
  }
}
