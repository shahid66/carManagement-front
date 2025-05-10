export interface House {
  _id: number;
  location: string;
  images: string[];
  details: string;
  category: string;
  rent_amount: number;
  nof_bedroom: number;
}

export interface IListing {
  _id: string;
  name: string;
  location: string;
  details: string;
  rent_amount: number;
  nof_bedroom: number;
  category: string;

  images: string[];

  createdAt?: string;
  updatedAt?: string;
}
export interface IListingRequest {
  _id: string;

  createdAt?: string;
  updatedAt?: string;
}
