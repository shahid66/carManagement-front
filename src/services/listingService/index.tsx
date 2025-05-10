"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getSingleListing = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${productId}`,
      {
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

export const getAllListings = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();
  if (query?.maxPrice) {
    params.append("maxPrice", query?.maxPrice.toString());
  }

  // Filter by minPrice
  if (query?.minPrice) {
    params.append("minPrice", query?.minPrice.toString());
  }

  // Existing price filter logic (if needed)
  if (query?.category) {
    params.append("category", query?.category.toString());
  }

  if (query?.searchTerm) {
    params.append("searchTerm", query?.searchTerm.toString());
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords?limit=${limit}&page=${page}&${params}`,
      {
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
export const getAllListingsByOwner = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings`,
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

export const addListing = async (productData: any): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings`,
      {
        method: "POST",
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
export const updateListing = async (
  productData: any,
  id: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${id}`,
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
export const deleteListing = async (id: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${id}`,
      {
        method: "DELETE",

        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("LISTING");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

//Request Handle
export const getAllRequestByOwner = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/requests`,
      {
        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["REQUEST"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getRequestCount = async (): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/count`,
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

export const updateListingRequest = async (
  productData: { status: string; phone: string },
  id: string
): Promise<any> => {
  try {
    console.log(productData);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/requests/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(productData),
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("REQUEST");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getOwnUser = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/own`, {
      headers: {
        authorization: (await cookies()).get("accessToken")!.value,
      },
      next: {
        tags: ["USERS"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getSingleUser = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/${id}`, {
      headers: {
        authorization: (await cookies()).get("accessToken")!.value,
      },
      next: {
        tags: ["USERS"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const updateProfile = async (userData: any): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/update-user`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Set the content type as JSON
          Authorization: (await cookies()).get("accessToken")!.value, // Assuming you're still using an Authorization header
        },
        body: JSON.stringify(userData), // Stringify the JSON data you want to send
      }
    );
    revalidateTag("USER");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
