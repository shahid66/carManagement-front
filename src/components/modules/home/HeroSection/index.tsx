"use client";
import { Button } from "@/components/ui/button";
import BFContainer from "@/components/ui/core/BFContainer";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import HeroImage from "./HEroImage";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const router = useRouter();
  const { user } = useUser();
  console.log(user);

  const handleButtonClick = () => {
    // Check if user is logged in
    if (user === null) {
      // Redirect to login page if not logged in
      router.push("/login");
    } else {
      if (user?.role === "landlord") {
        router.push("/landlord/listing/add-listing");
      } else {
        toast.error("You need to be a landlord to access this page.");
      }
    }

    // // Check if user role is 'landlord'
    // if (user?.role !== "landlord") {
    //   // Optionally show an error message or redirect to a different page
    //   alert("You need to be a landlord to access this page.");
    // }
    // Navigate to the "/some-page" route
  };
  return (
    <BFContainer className={`${styles.banner}`}>
      <div className={`  grid grid-cols-1 md:grid-cols-2  gap-4 `}>
        <section className="px-5 flex items-center">
          <div className="py-5 text-center md:text-start ">
            <h1 className="md:text-4xl  md:text-start font-bold text-black">
              Car Repair 360 In BD – Where & When You Need It
            </h1>
            <p className="text-slate-200 mt-2  md:text-start">
              Our car repair service is the fastest and most trustworthy mobile
              car repair service in Kuwait. We provide expert on-demand service
              whenever our customers need it, wherever they may be. We provide
              professional car repair solutions to satisfy our customers.
            </p>
            <Button
              onClick={handleButtonClick}
              className="mt-4 cursor-pointer "
            >
              Book You&#39;r Appointment Now
            </Button>
          </div>
        </section>

        <section className="px-5 flex justify-center items-center ">
          <HeroImage />
        </section>
      </div>
    </BFContainer>
  );
};

export default HeroSection;
