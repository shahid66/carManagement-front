export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "tenant" | "admin" | "landlord"; // Add more roles if needed
  phone: string;
  address: string;
  city: string;
  image: string | null;
}
