import UpdateForm from "@/components/edit-form";
import { getContactById } from "@/lib/data";
import { notFound } from "next/navigation";

// Pastikan fungsi handler untuk halaman ini async
const UpdateContactPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params; // Mengambil id dari params
  const contact = await getContactById(id); // Mengambil data kontak berdasarkan id

  if (!contact) {
    notFound(); // Jika kontak tidak ditemukan, tampilkan halaman 404
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Contact</h1>
      <UpdateForm contact={contact} />{" "}
      {/* Render form untuk mengupdate kontak */}
    </div>
  );
};

export default UpdateContactPage;
