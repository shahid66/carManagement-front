interface Transaction {
    id: string;
    transactionStatus: string;
    bank_status?: string;
    sp_code?: string;
    sp_message?: string;
    method?: string;
    date_time?: string;
  }
  
  interface User {
    _id: string;
    name: string;
    email: string;
  }
  
  interface RentalHouse {
    _id: string;
    location: string;
    images: string[]; // assuming image URLs or paths
  }
  
  export interface IRequestRent {
    _id: string;
    createdAt: string;
    updatedAt: string;
    landlord: string;
    landlordPhone: string;
    message: string;
    paymentStatus: "Pending" | "Paid";
    phone: string;
    rentalHouse: RentalHouse;
    status: "Pending" | "Approved" | "reject" | "Completed";
    transaction: Transaction;
    user: User;
    __v: number;
  }