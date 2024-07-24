import { Car } from "@/types";
import { createAction, createReducer } from "@reduxjs/toolkit";

interface DataBookingState {
  car: Car[];
}

const initialState: DataBookingState = {
  car: [],
};

export const addCar = createAction<Car>("booking/car");

const dataBookingReducer = createReducer(initialState, (builder) => {
  builder.addCase(addCar, (state, action) => {
    const car = action.payload;
    state.car.push(car);
  });
});

export default dataBookingReducer;
