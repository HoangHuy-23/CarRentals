package com.hihoanhuy23.CarRentalsBE.response;

import com.hihoanhuy23.CarRentalsBE.model.Car;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class CarSearchResponse {
    private List<Car> data;
    private PaginationResponse pagination;
}
