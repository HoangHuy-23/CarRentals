import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car, PickUpLocation } from "@/types";

interface BookingState {
  location: string | null;
  startDate: string | null;
  endDate: string | null;
  pickUpLocation: PickUpLocation | null;
  selectedCar: Car | null;
  bookingStep: number;
}

const initialState: BookingState = {
  location: null,
  startDate: null,
  endDate: null,
  pickUpLocation: PickUpLocation.CAR_ADDRESS,
  selectedCar: null,
  bookingStep: 1,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
    setPickUpLocation: (state, action: PayloadAction<PickUpLocation>) => {
      state.pickUpLocation = action.payload;
    },
    setSelectedCar: (state, action: PayloadAction<Car | null>) => {
      state.selectedCar = action.payload;
    },
    setBookingStep: (state, action: PayloadAction<number>) => {
      state.bookingStep = action.payload;
    },
  },
});

export const {
  setLocation,
  setStartDate,
  setEndDate,
  setPickUpLocation,
  setSelectedCar,
  setBookingStep,
} = bookingSlice.actions;
export default bookingSlice.reducer;
