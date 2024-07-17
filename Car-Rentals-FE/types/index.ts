export type Car = {
  id: number;
  licensePlate: string;
  company: string;
  model: string;
  seats: number;
  yearOfProduction: number;
  transmission: string;
  fuel: string;
  fuelConsumption: number;
  description: string;
  price: number;
  address: carAddress;
  terms: string;
  carImages: carImage[];
  ratingScores: number;
  numOfTrip: number;
  mortgage: boolean;
  deliveryToCusLocation: boolean;
  status: string;
};

export type carAddress = {
  city: string;
  district: string;
  ward: string;
  addressMap: string;
};

export type carImage = {
  id: number;
  urlImage: string;
};

export type User = {
  id: number;
  fullName: string;
  dob: Date;
  gender: boolean;
  phone: string;
  email: string;
  linkFb: string;
  avatar: string;
  createAt: Date;
  ratingScores: number;
  numOfTrip: number;
  role: string;
  driverLicense: DriverLicense;
  addresses: UserAddress[];
};

export type DriverLicense = {
  id?: number;
  code: string;
  fullName: string;
  dob: Date;
  urlImage: string;
  status: string;
};

export type DriverLicenseReq = {
  id?: number;
  code: string;
  fullName: string;
  dob: Date;
  image: File | null;
  status: string;
};

export type UserAddress = {
  id?: number;
  remindName: string;
  city: string;
  district: string;
  ward: string;
  street: string;
  addressMap: string;
  default: boolean;
  type: string;
};

export type CarSearchResponse = {
  data: Car[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};
