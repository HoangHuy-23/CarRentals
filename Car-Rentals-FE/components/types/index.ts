export type Car = {
  id: number;
  licensePlate: string;
  company: string;
  model: string;
  seats: number;
  yearOfProduct: number;
  transmission: string;
  fuel: string;
  fuelConsumption: number;
  description: string;
  price: number;
  address: carAddress;
  terms: string;
  image: carImage[];
  numOfTrip: number;
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
  url: string;
};
