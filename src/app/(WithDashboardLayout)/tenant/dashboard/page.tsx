import BFChart, { UserCountByMonth } from "@/components/ui/core/Chart/BFChart";
import { getAllRequest } from "@/services/RequestService";
import { IRequestRent } from "@/types";
type MonthlyCount = {
  year: number;
  month: number;
  count: number;
};

export default async function TenantDashboard() {
  const { data } = await getAllRequest();

  const getMonthlyCounts = (data: IRequestRent[]): UserCountByMonth[] => {
    const grouped = data?.reduce(
      (acc: Record<string, UserCountByMonth>, item) => {
        const date = new Date(item.createdAt);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const key = `${year}-${month}`;

        if (!acc[key]) {
          acc[key] = { year, month, count: 0 };
        }

        acc[key].count += 1;
        return acc;
      },
      {}
    );

    return Object.values(grouped);
  };

  if (!data) return null;
  const approvedTotal =
    data?.filter((item: any) => item.status === "Approved").length || 0;
  const rejectTotal =
    data?.filter((item: any) => item.status === "rejected").length || 0;
  return (
    <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted flex justify-center items-center">
          Total Request: <strong> {data.length}</strong>
        </div>
        <div className="aspect-video rounded-xl bg-muted flex justify-center items-center">
          Total Approved: <strong>{approvedTotal}</strong>
        </div>
        <div className="aspect-video rounded-xl bg-muted flex justify-center items-center">
          Total Rejected: <strong>{rejectTotal}</strong>
        </div>
      </div>
      <div className="min-h-[100vh] rounded-xl bg-muted mt-4">
        <BFChart title="Approved Request" serverData={getMonthlyCounts(data)} />
      </div>
    </div>
  );
}
