import { getContactById } from "@/lib/data";
import { notFound } from "next/navigation";
import UpdateForm from "@/components/edit-form";

type Params = {
  id: string;
};

interface PageProps {
  params: Params;
}

const UpdateContactPage = async ({ params }: PageProps) => {
  const { id } = params;
  const contact = await getContactById(id);

  if (!contact) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Contact</h1>
      <UpdateForm contact={contact} />
    </div>
  );
};

export default UpdateContactPage;
