type RentalHouse = {
  _id: string;
  location: string;
  images: string[]; // Assuming images are URLs or file paths
};

type User = {
  _id: string;
  name: string;
  email: string;
};

export type RentalRequest = {
  _id: string;
  landlord: string;
  landlordPhone: string;
  message: string;
  paymentStatus: "Pending" | "Completed" | "Failed" | "Paid"; // Enum-like type for better safety
  phone: string;
  rentalHouse: RentalHouse;
  status: "Pending" | "Approved" | "Rejected"; // Adjust based on possible values
  user: User;
  createdAt: string; // You can also use `Date` if you'll convert it
  updatedAt: string;
  __v: number;
};
