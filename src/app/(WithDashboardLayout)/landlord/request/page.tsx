import ManageListingRequests from "@/components/modules/listing/ManageListingsRequest";
import { getAllRequestByOwner } from "@/services/partsService";

const page = async () => {
  const { data } = await getAllRequestByOwner();

  return (
    <div>
      <ManageListingRequests products={data} />
    </div>
  );
};

export default page;
