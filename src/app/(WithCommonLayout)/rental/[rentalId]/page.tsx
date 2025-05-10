import RentalHouseDetails from "@/components/modules/details/HomeDetails";
import { getCurrentUser } from "@/services/AuthService";
import { getSingleListing } from "@/services/listingService";
import { getSingleRequestByUser } from "@/services/RequestService";

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ rentalId: string }>;
}) => {
  const user = await getCurrentUser();
  const { rentalId } = await params;
  const { data } = await getSingleListing(rentalId);
  const { data: requestStatus } = await getSingleRequestByUser({
    id: user?.id,
    postId: rentalId,
  });

  console.log(requestStatus, "request Status");

  return <RentalHouseDetails house={data} requestStatus={requestStatus}/>;
};

export default DetailsPage;
