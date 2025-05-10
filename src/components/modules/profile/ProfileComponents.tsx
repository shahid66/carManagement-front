import { IUser } from "@/types/user";
import Image from "next/image";
import Link from "next/link";

const ProfileComponents = ({ userData }: { userData: IUser }) => {
  return (
    <div className="grid md:grid-cols-2">
      <div className=" mt-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center">
          <Image
            src={userData?.image || ""}
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full w-[120px] h-[120px] border-4 border-gray-300"
          />
          <h1 className="text-2xl font-semibold mt-4">{userData?.name}</h1>
          <p className="text-gray-600">{userData?.email}</p>
          <p className="mt-2 text-gray-500">
            {userData?.phone ? userData?.phone : "Need to Update"}
          </p>
          <p className="text-gray-500">
            📍 {userData?.address ? userData?.address : "Need to Update"}
          </p>
          <Link
            href={`/${userData?.role}/profile/${userData?._id}`}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={`/change-password`}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Change Password
        </Link>
      </div>
    </div>
  );
};

export default ProfileComponents;
