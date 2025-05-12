import BFChart from "@/components/ui/core/Chart/BFChart";
import { getRequestCount } from "@/services/partsService";

const LandLordDashboard = async () => {
  const result = await getRequestCount();
  return (
    <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted " />
        <div className="aspect-video rounded-xl bg-muted" />
        <div className="aspect-video rounded-xl bg-muted" />
      </div>
      <div className="min-h-[100vh] rounded-xl bg-muted mt-4 ">
        <BFChart title="Monthly Request" serverData={result?.data} />
      </div>
    </div>
  );
};

export default LandLordDashboard;
