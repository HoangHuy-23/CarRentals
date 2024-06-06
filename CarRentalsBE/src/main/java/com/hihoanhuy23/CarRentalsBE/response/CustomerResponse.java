package com.hihoanhuy23.CarRentalsBE.response;

import java.util.List;
import java.util.Set;

public class CustomerResponse {
    private AccountResponse account;
    private Set<CredentialResponse> credentials;
    private List<CarReviewResponse> carReviews;
    private List<RentalContactResponse> rentalContacts;
}
