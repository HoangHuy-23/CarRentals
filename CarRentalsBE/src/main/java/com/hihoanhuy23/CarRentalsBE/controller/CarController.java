package com.hihoanhuy23.CarRentalsBE.controller;

import com.hihoanhuy23.CarRentalsBE.response.CarResponse;
import com.hihoanhuy23.CarRentalsBE.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/cars")
public class CarController {
    private final CarService carService;



}
