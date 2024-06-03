package com.hihoanhuy23.CarRentalsBE.model;

public abstract class User {
    protected Long id;
    protected String name;
    protected String address;
    protected Contact contact;
    protected UserRole userRole;
    protected Account account;
    protected String urlImage;
}
