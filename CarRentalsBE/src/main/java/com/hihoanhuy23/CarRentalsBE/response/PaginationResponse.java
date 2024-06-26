package com.hihoanhuy23.CarRentalsBE.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PaginationResponse {
    private Long total;
    private Integer page;
    private Integer pages;
}
