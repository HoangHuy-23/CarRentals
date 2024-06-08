package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.model.Admin;

public interface AdminService {
    Admin addNewAdmin();

    Admin updateAdmin();

    boolean deleteAdmin();

    Admin getAdminById();
}
