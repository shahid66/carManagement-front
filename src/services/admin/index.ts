"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getUsersCount = async (): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/total-users`,
      {
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["USER"],
        },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const getUsers = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users`, {
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      next: {
        tags: ["USER"],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const deleteUsers = async (id: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/users/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("USER");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const updateUserRole = async (
  statusData: { role: string },
  id: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/change-status/${id}`,
      {
        method: "POST",
        body: JSON.stringify(statusData),
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("USER");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllListings = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/listings`,
      {
        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["LISTING"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const updateListingByAdmin = async (
  productData: any,
  id: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/listings/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Set the content type as JSON
          Authorization: (await cookies()).get("accessToken")!.value, // Assuming you're still using an Authorization header
        },
        body: JSON.stringify(productData), // Stringify the JSON data you want to send
      }
    );
    revalidateTag("LISTING");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
