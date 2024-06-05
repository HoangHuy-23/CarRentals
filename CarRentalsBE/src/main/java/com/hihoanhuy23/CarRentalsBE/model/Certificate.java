package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "certificate")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Certificate {
    @Enumerated(EnumType.STRING)
    private CertificateType certificateType;
    @Column(name = "url_file")
    private String urlFile;
    @EmbeddedId
    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;
}
