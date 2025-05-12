import ProfileComponents from "@/components/modules/profile/ProfileComponents";
import { getOwnUser } from "@/services/partsService";

const ProfilePage = async () => {
  const { data } = await getOwnUser();

  return (
    <>
      <ProfileComponents userData={data} />
    </>
  );
};

export default ProfilePage;
