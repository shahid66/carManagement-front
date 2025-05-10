import ApartmentCard, {
  House,
} from "@/components/modules/apartment/apartmentCard";
import CounterSection from "@/components/modules/home/CounterSection";
import { demoData } from "@/components/modules/home/demoData";
import AppointmentForm from "@/components/modules/home/HeroSection/AppointmentForm";
import HeroSection from "@/components/modules/home/HeroSection/index";
import HeroSlide from "@/components/modules/home/HeroSlider";
import OperatingHours from "@/components/modules/home/OperatingTimeSection";
import DemoSlider from "@/components/modules/home/TestimonialSection";
import RentingTips from "@/components/modules/home/TipsSection";
import BFContainer from "@/components/ui/core/BFContainer";
import { getAllListings } from "@/services/listingService";
import Image from "next/image";

const Home = async () => {
  const { data } = await getAllListings();
  console.log(data);
  return (
    <>
      <HeroSection />
      <OperatingHours />
      {/* <Suspense fallback={<>Loading...</>}>
        <SearchSection title="Find your rooms, for your ability" />
      </Suspense> */}

      <div className="px-5 py-10">
        <h2 className="mb-4 text-4xl">
          Best Car Service Center In Dhaka, Bangladesh
        </h2>
        <p>
          Biswas Automobiles BD - The best car service center in Dhaka providing
          top quality auto repair services for all vehicle types. If you are
          looking for the *best car repair services* from a premium car
          servicing center in Dhaka City. Then we are the best leading
          multi-brand car workshop for you. Entrust your prized automobile with
          Bangladesh’s #1 car repair shop Biswas Automobiles BD. Call
          +8801742700300 today.
        </p>
      </div>
      <div className="px-5 py-10">
        <h2 className="mb-4 text-4xl">Premium Car servicing center near you</h2>
        <p>
          Biswas Automobiles BD is a leading car servicing center in Dhaka.
          Established in 2015, we have over 09 years of experience serving
          customers with all their automobile needs. Our state-of-the-art
          facilities and expert technicians enable us to provide trusted,
          reliable, and satisfactory services for vehicles of all makes and
          models.
        </p>
        <p className="mt-4 ">
          As an authorized dealer and car service center in Dhaka for renowned
          automotive brands like BMW, Mercedes, Toyota, Honda, Nissan,
          Mitsubishi, etc., we have extensive expertise across various vehicle
          segments - from small hatchbacks and sedans to luxury cars, SUVs,
          commercial vehicles, and more. Over the years, we have handled
          thousands of vehicles, building capabilities to address practically
          any automotive issue efficiently.
        </p>
        <p>
          Our comprehensive service portfolio covers periodic maintenance like
          car wash services, oil change services, tune-up services, brake
          inspection services; engine and transmission services; and accident
          repair services - denting, painting, bodywork, windshield
          replacements; detailing, and more. We use high-quality spare parts and
          accessories for optimum performance and longevity of vehicles.
        </p>
      </div>
      <HeroSlide data={demoData} />
      <div className="bg-gray-300">
        <div className="px-5 py-10">
          <div className="grid grid-col-1 md:grid-cols-2 gap-4">
            <div style={{ width: "100%" }}>
              <Image
                src="/banner2.webp"
                alt="My Image"
                width={1920} // Original image width
                height={1080} // Original image height
                layout="responsive"
                sizes="100vw"
              />
            </div>

            <div>
              <h2 className="text-4xl font-semibold">
                Biswas Automobiles BD - Premium auto repair services near Dhaka
                City
              </h2>
              <p className="mt-10">
                We are committed to delivering best in class ownership
                experiences for our customers over the lifetime of their
                vehicle. Our state of the art auto repair services center is
                well organized across a 30,000 sq. ft area for swift services.
                We have the latest diagnostic tools for in-depth vehicle health
                checks and precision car repair services.
              </p>
              <p className="mt-4">
                Our team has 100+ qualified technicians and engineers who
                undergo regular training programs to stay updated on
                ever-evolving automobile technologies. We have clear workflows
                for each task - right from receiving vehicles, documentation,
                diagnosis, repair processes to quality checks before final
                delivery. This ensures transparent, standardized and timely
                services.
              </p>
              <p className="mt-4">
                We genuinely care for our customers and develop long-term
                relationships through consistent quality. Our customers smiles
                and satisfaction motivate us to keep raising the bar on our car
                repair services every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-10">
        <div className="grid grid-col-1 md:grid-cols-2 gap-4">
          <div style={{ width: "100%" }} className="order-2">
            <Image
              src="/banner2.webp"
              alt="My Image"
              width={1920} // Original image width
              height={1080} // Original image height
              layout="responsive"
              sizes="100vw"
            />
          </div>

          <div className="order-1">
            <h2 className="text-4xl font-semibold">
              Biswas Automobiles BD - Premium auto repair services near Dhaka
              City
            </h2>
            <p className="mt-10">
              We are committed to delivering best in class ownership experiences
              for our customers over the lifetime of their vehicle. Our state of
              the art auto repair services center is well organized across a
              30,000 sq. ft area for swift services. We have the latest
              diagnostic tools for in-depth vehicle health checks and precision
              car repair services.
            </p>
            <p className="mt-4">
              Our team has 100+ qualified technicians and engineers who undergo
              regular training programs to stay updated on ever-evolving
              automobile technologies. We have clear workflows for each task -
              right from receiving vehicles, documentation, diagnosis, repair
              processes to quality checks before final delivery. This ensures
              transparent, standardized and timely services.
            </p>
            <p className="mt-4">
              We genuinely care for our customers and develop long-term
              relationships through consistent quality. Our customers&#39;
              smiles and satisfaction motivate us to keep raising the bar on our
              car repair services every single day.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 py-8 mt-12">
        <BFContainer>
          <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">
            Parts
          </h2>
          <div className="h-1 w-12 bg-green-400 mx-auto mb-8 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 my-6">
            {data?.result?.slice(0, 4).map((house: House) => (
              <ApartmentCard key={house?._id} house={house} />
            ))}
          </div>
        </BFContainer>
      </div>

      <CounterSection />

      <div className="bg-slate-50 py-8 mt-12">
        <BFContainer>
          <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">
            Services
          </h2>
          <div className="h-1 w-12 bg-green-400 mx-auto mb-8 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 my-6">
            {data?.result?.slice(0, 4).map((house: House) => (
              <ApartmentCard key={house?._id} house={house} />
            ))}
          </div>
        </BFContainer>
      </div>

      <DemoSlider data={demoData} />
      <RentingTips />
      <AppointmentForm />
    </>
  );
};

export default Home;
