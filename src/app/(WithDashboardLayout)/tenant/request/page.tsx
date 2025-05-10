import ManageRequests from "@/components/modules/request";
import { getAllRequest } from "@/services/RequestService";

const page = async () => {
  const { data } = await getAllRequest();
  console.log(data)

  return (
    <div>
      <ManageRequests products={data}  />
    </div>
  );
};

export default page;
