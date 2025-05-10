"use client";
import DUser from "@/assets/d_user.jpg";
import { Card, CardContent } from "@/components/ui/card";
import NMContainer from "@/components/ui/core/BFContainer";

import Image from "next/image";
const members = [
  { name: "Ashiq", image: DUser },
  { name: "Amdad", image: DUser },
  { name: "Arif", image: DUser },
  { name: "Asif", image: DUser },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-green-700 to-blue-900 text-white text-center py-10">
        <h1 className="text-3xl font-bold">About</h1>
        <p>About our company</p>
      </div>

      {/* Breadcrumb */}
      {/* <div className="w-full max-w-5xl px-4 mt-6">
        <p className="text-gray-500">Home &gt; About</p>
      </div> */}

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              BasaFinder is a smart rental solution platform helping people find
              their perfect home or list their property with ease. Whether
              you&apos;re a tenant looking for a cozy apartment or a landlord
              looking to rent out, we bridge the gap.
            </p>
          </div>

          <Card className="overflow-hidden shadow-md">
            <CardContent className="p-0">
              <Image
                src="/team.jpeg" // make sure this image is in `public/valo.png`
                alt="Team at work"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-xl"
                priority
              />
            </CardContent>
          </Card>
        </div>
      </section>
      <NMContainer>
        {/* <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}

        <div className=" text-center my-5">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-900 bg-clip-text text-transparent">
            Our Mission
          </h3>
          <p className="text-gray-500 max-w-5xl mx-auto mt-2">
            {" "}
            BasaFinder aims to connect individuals with the best rental
            solutions. Our vision is to simplify the renting experience by
            providing reliable and user-friendly services. We strive to make
            housing accessible and convenient for everyone by leveraging
            technology and innovative solutions. Our platform bridges the gap
            between property owners and renters, ensuring transparency and
            efficiency in every step of the process.
          </p>
        </div>
        {/* Main Content */}

        <div className="text-center my-5">
          <h2 className="text-5xl uppercase font-bold bg-gradient-to-r from-green-700 to-blue-900 bg-clip-text text-transparent">
            Best Rent Service, enjoy your life
          </h2>
        </div>

        <div className="w-full px-4 mt-12 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-blue-900 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            {members.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent>
                  <div className="flex justify-center">
                    <Image
                      src={member.image}
                      alt={`Team Member ${index + 1}`}
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-green-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mt-4">
                    {member.name}
                  </h3>
                  <p className="text-gray-500">Team Role</p>
                  <p className="text-gray-700 mt-4">
                    Passionate team member dedicated to providing the best
                    service.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </NMContainer>
    </>
  );
}
