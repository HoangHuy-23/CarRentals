package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.Column;

public class CarImage {
    @Column(name = "url_image")
    private String urlImage;
    private String description;
}
