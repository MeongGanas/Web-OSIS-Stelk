"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { UploadMultiImage, UploadSingleImage } from "./utils";

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
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
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
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
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

export async function EditPesanKetos(formData: FormData) {
  console.log(formData);
  const pesan = formData.get("pesan")?.toString();
  const nama = formData.get("nama")?.toString();
  const periode = formData.get("periode")?.toString();

  try {
    const imageUrl = await UploadSingleImage(formData);
    if (imageUrl) {
      await sql`UPDATE pesanketos SET pesan=${pesan}, periode=${periode}, nama=${nama}, image=${imageUrl}`;
    } else {
      await sql`UPDATE pesanketos SET pesan=${pesan}, periode=${periode}, nama=${nama}`;
    }
    revalidatePath("/dashboard/home");
    return { success: true, message: "Sambutan Ketos updated successfully." };
  } catch (error) {
    return { success: false, message: "Something went wrong." };
  }
}

export async function EditIntro(formData: FormData) {
  try {
    const imageUrl = await UploadSingleImage(formData);
    if (imageUrl) {
      await sql`UPDATE intropage SET image=${imageUrl}`;
      return { success: true, message: "Intro Page updated successfully." };
    }
    return { success: false, message: "Please insert image first." };
  } catch (err) {
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
  }
}

export async function AddEvent(formData: FormData) {
  const nama = formData.get("namaEvent")?.toString();
  const tanggal = formData.get("tanggalEvent")?.toString();
  const desc = formData.get("desc")?.toString();

  try {
    const imageUrl = await UploadSingleImage(formData);
    await sql`INSERT INTO events (nama, tanggal, deskripsi, foto) 
    VALUES (${nama}, ${tanggal}, ${desc}, ${imageUrl})`;

    revalidatePath("/dashboard/events");

    return { success: true, message: "Event added successfully." };
  } catch (err) {
    console.log(err);
    return { success: false, message: "Something went wrong." };
  }
}

export async function EditEvent(formData: FormData) {
  const id = formData.get("id")?.toString();
  const nama = formData.get("namaEvent")?.toString();
  const tanggal = formData.get("tanggalEvent")?.toString();
  const desc = formData.get("desc")?.toString();
  try {
    if (formData.get("image-event")) {
      const imageUrl = await UploadSingleImage(formData);
      await sql`UPDATE events SET nama=${nama}, tanggal=${tanggal}, deskripsi=${desc}, foto=${imageUrl} WHERE id=${id}`;
    } else {
      await sql`UPDATE events SET nama=${nama}, tanggal=${tanggal}, deskripsi=${desc} WHERE id=${id}`;
    }
    revalidatePath("/dashboard/events");
    return { success: true, message: "Event edited successfully." };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
  }
}

export async function DeleteEvent(id: number) {
  try {
    await sql`DELETE FROM events WHERE id=${id}`;

    revalidatePath("/dashboard/events");

    return { success: true, message: "Event deleted successfully." };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
  }
}

export async function AddAnggota(formData: FormData) {
  console.log(formData);
  const idBidang = formData.get("id")?.toString();
  const nama = formData.get("nama")?.toString();
  const jabatan = formData.get("jabatan")?.toString();

  try {
    const imageUrl = await UploadSingleImage(formData);

    await sql`INSERT INTO anggotas (nama, image, jabatan, idbidang)
    VALUES (${nama}, ${imageUrl}, ${jabatan}, ${idBidang})`;

    revalidatePath(`/dashboard/pengurus/bidang/${idBidang}`);

    return { success: true, message: "Anggota added successfully." };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
  }
}

export async function EditAnggota(formData: FormData) {
  const [id, idbidang] = formData.get("id")?.toString()?.split("-") ?? [];
  const nama = formData.get("nama")?.toString();
  const jabatan = formData.get("jabatan")?.toString();

  try {
    if (formData.get("image-anggota")) {
      const imageUrl = await UploadSingleImage(formData);

      await sql`UPDATE anggotas SET nama=${nama}, jabatan=${jabatan}, image=${imageUrl} WHERE id=${id}`;
    } else {
      await sql`UPDATE anggotas SET nama=${nama}, jabatan=${jabatan} WHERE id=${id}`;
    }

    revalidatePath(`/dashboard/pengurus/bidang/${idbidang}`);

    return { success: true, message: "Anggota edited successfully." };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
  }
}

export async function DeleteAnggota(id: number, idBidang: number) {
  try {
    await sql`DELETE FROM anggotas WHERE id=${id}`;

    revalidatePath(`/dashboard/pengurus/bidang/${idBidang}`);

    return { success: true, message: "Anggota deleted successfully." };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
  }
}

export async function AddBidang(formData: FormData) {
  const id = formData.get("id")?.toString();
  const nama = formData.get("nama")?.toString();
  const tugasumum = formData.get("tugas")?.toString();

  try {
    const [intro, card] = await UploadMultiImage(formData);
    await sql`INSERT INTO bidangs (id, nama, tugasumum, introImage, cardImage)
      VALUES (${id}, ${nama}, ${tugasumum}, ${intro}, ${card})`;

    revalidatePath(`/dashboard/pengurus`);

    return { success: true, message: "Bidang added successfully." };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
  }
}

export async function EditBidang(formData: FormData) {
  const id = formData.get("id")?.toString();
  const nama = formData.get("nama")?.toString();
  const tugasumum = formData.get("tugas")?.toString();
  try {
    if (formData.get("image-intro") && formData.get("image-card")) {
      const [intro, card] = await UploadMultiImage(formData);

      await sql`UPDATE bidangs SET id=${id}, nama=${nama}, tugasumum=${tugasumum}, introimage=${intro}, cardimage=${card} WHERE id=${id}`;
    } else if (formData.get("image-intro") && !formData.get("image-card")) {
      const intro = await UploadSingleImage(formData);

      await sql`UPDATE bidangs SET id=${id}, nama=${nama}, tugasumum=${tugasumum}, introimage=${intro} WHERE id=${id}`;
    } else if (!formData.get("image-intro") && formData.get("image-card")) {
      const card = await UploadSingleImage(formData);

      await sql`UPDATE bidangs SET id=${id}, nama=${nama}, tugasumum=${tugasumum}, cardimage=${card} WHERE id=${id}`;
    } else {
      await sql`UPDATE bidangs SET id=${id}, nama=${nama}, tugasumum=${tugasumum} WHERE id=${id}`;
    }

    revalidatePath(`/dashboard/pengurus`);
    return { success: true, message: "Bidang edited successfully." };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
  }
}

export async function DeleteBidang(id: number) {
  try {
    await sql`DELETE FROM bidangs WHERE id=${id}`;

    revalidatePath(`/dashboard/pengurus`);

    return { success: true, message: "Bidang deleted successfully." };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: `Something went wrong, please try again`,
    };
  }
}
