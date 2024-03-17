export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="pt-32 px-5 md:px-10">
      <div className="border border-black rounded-md p-5">
        <h1 className="text-3xl">Edit Halaman Bidang {params.id}</h1>

        <form action="" className="mt-10">
          <div>
            <label htmlFor="fotoWelcome" className="text-xl">
              Foto halaman Welcome
            </label>
            <input
              type="file"
              name="fotoWelcome"
              id="fotoWelcome"
              accept="image/*"
              className="block mt-2"
            />
          </div>
          <button className="bg-primary hover:bg-opacity-90 transition-all duration-200 text-white px-10 py-3 rounded-md mt-5">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
