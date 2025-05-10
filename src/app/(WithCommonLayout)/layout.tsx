import Footer from "@/components/shared/Footer";
import NavTest from "@/components/shared/NavTest";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavTest />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
