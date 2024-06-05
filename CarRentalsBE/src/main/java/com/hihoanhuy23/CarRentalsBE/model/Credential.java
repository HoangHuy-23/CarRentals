package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Blob;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "credential")
public class Credential {
    @Enumerated(EnumType.STRING)
    private CredentialType credentialType;
    @Column(name = "url_file")
    private String urlFile;
    @EmbeddedId
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

}
