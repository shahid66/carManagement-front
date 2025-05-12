import ApartmentCard, {
  House,
} from "@/components/modules/part/part";
import FilterSection from "@/components/modules/home/SearchSection/FilterSection";
import { getAllListings } from "@/services/partsService";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const AllListingPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;

  const { data } = await getAllListings(undefined, undefined, query);
  console.log(data?.result);
  return (
    <>
      <div className="w-full bg-gradient-to-r from-green-700 to-blue-900 text-white text-center py-10">
        <h1 className="text-3xl font-bold">All Listing House</h1>
        <p>Find Your Best</p>
      </div>

      <div className="container mx-auto my-4">
        <div className=" grid grid-cols-5 gap-2">
          <div className="bg-slate-800 max-h-[400px]">
            <FilterSection />
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {data?.result?.map((house: House) => (
                <ApartmentCard key={house?._id} house={house} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllListingPage;
