import ManageUser from "@/components/modules/user/ManageUser";
import { getUsers } from "@/services/admin";

const page = async () => {
  const { data } = await getUsers();
  const filterData = data?.result.filter((item:any) => item.role !== "admin");

  return (
    <div>
      <ManageUser users={filterData} meta={data?.meta} />
    </div>
  );
};

export default page;
