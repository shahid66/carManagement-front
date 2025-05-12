import UpdateListingFormByAdmin from "@/components/modules/listing/UpdateListingFormByAdmin";
import { getSingleListing } from "@/services/partsService";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) => {
  const { listingId } = await params;

  const { data } = await getSingleListing(listingId);
  console.log(data);

  return (
    <div className="flex justify-center items-center">
      <UpdateListingFormByAdmin listing={data} />
    </div>
  );
};

export default UpdateProductPage;
