package com.hihoanhuy23.CarRentalsBE.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class CreateReviewRequest {
    private int start;
    private String comment;
}
