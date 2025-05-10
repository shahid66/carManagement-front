

import BFChartForAdmin from "@/components/ui/core/Chart/BFChartForAdmin";
import { getUsers, getUsersCount } from "@/services/admin";
import { getCurrentUser } from "@/services/AuthService";

const AdminDashboard = async () => {
  const { data } = await getUsers();
  
  const result = await getUsersCount();

  const filterData = data?.result.filter((item: any) => item?.role !== "admin");

  // Count the number of users with role 'landlord'
  const landlordCount =
    filterData?.filter((item: any) => item.role === "landlord").length || 0;
  const tenantCount =
    filterData?.filter((item: any) => item.role === "tenant").length || 0;


  return (
    <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="aspect-video rounded-xl bg-muted flex justify-center items-center">
          <h2 className="text-4xl">
            Total Landlord : <strong>{landlordCount}</strong>
          </h2>
        </div>
        <div className="aspect-video rounded-xl bg-muted flex justify-center items-center">
          <h2 className="text-4xl">
            Total Tenant : <strong>{tenantCount}</strong>
          </h2>
        </div>
        {/* <div className="aspect-video rounded-xl bg-muted" /> */}
      </div>
      <div className="min-h-[100vh] rounded-xl bg-muted mt-4">
        <BFChartForAdmin title="User Report" serverData={result?.data} />
      </div>
    </div>
  );
};

export default AdminDashboard;
