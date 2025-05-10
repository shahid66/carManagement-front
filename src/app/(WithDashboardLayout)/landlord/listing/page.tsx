import ManageListings from "@/components/modules/listing";
import { getAllListingsByOwner } from "@/services/listingService";

const page = async () => {
  const { data } = await getAllListingsByOwner();
  

  return (
    <div>
      <ManageListings products={data?.result} meta={data?.meta} />
    </div>
  );
};

export default page;
