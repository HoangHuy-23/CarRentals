package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "rental_contact")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RentalContact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
    @Column(name  = "pick_up_date")
    private LocalDateTime pickUpDate;
    @Column(name = "drop_off_date")
    private LocalDateTime dropOffDate;
    @Column(name = "delivery_address")
    private String deliveryAddress;
    @Column(name = "rental_insurance")
    private long rentalInsurance;
    @Column(name = "total_price")
    private long totalPrice;
}
