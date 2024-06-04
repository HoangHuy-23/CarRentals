package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;
    protected String name;
    protected String address;
    protected Contact contact;
    @ElementCollection
    private Set<SocialMedia> socialMedia;
    @Enumerated
    @Column(name = "role")
    protected UserRole userRole;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    protected Account account;
    @Column(name = "url_image")
    protected String urlImage;
}
