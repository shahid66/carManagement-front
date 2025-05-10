import ManageListingsAdmin from "@/components/modules/listing/ManageListingAdmin";
import { getAllListings } from "@/services/admin";

const page = async () => {
  const { data } = await getAllListings();

  return (
    <div>
      <ManageListingsAdmin products={data?.result} meta={data?.meta} />
    </div>
  );
};

export default page;
