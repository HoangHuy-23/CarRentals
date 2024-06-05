package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;

@Entity
@Table(name = "admin")
public class Admin extends User{
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", referencedColumnName = "account_id", foreignKey = @ForeignKey(name = "FK_ADMIN_ACCOUNT"))
    private Account account;
}
