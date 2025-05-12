import UpdateListingForm from "@/components/modules/listing/UpdateListingForm";
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
      <UpdateListingForm listing={data} />
    </div>
  );
};

export default UpdateProductPage;
