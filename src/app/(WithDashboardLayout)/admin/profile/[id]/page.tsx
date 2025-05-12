import EditProfilePage from "@/components/modules/profile/ProfileForm";
import { getSingleUser } from "@/services/partsService";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { data } = await getSingleUser(id);
  console.log(data);
  return (
    <div>
      <EditProfilePage userData={data} />
    </div>
  );
};

export default page;
