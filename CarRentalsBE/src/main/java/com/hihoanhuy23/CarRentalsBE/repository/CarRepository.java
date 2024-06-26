package com.hihoanhuy23.CarRentalsBE.repository;

import com.hihoanhuy23.CarRentalsBE.model.Car;
import com.hihoanhuy23.CarRentalsBE.model.FuelType;
import com.hihoanhuy23.CarRentalsBE.model.TransmissionType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Long> {
    @Query("Select c From Car c Where c.address.city Like %:location%")
    List<Car> searchCarByLocation(@Param("location") String keyword);

    @Query("SELECT c FROM Car c " +
            "WHERE (:location IS NULL OR c.address.city LIKE %:location%) " +
            "AND (:company IS NULL OR c.company LIKE %:company%) " +
            "AND (:fuel IS NULL OR c.fuel = :fuel) " +
            "AND (:transmission IS NULL OR c.transmission = :transmission) " +
            "AND (:price IS NULL OR c.price <= :price) " +
            "AND (:seat IS NULL OR c.seats = :seat) "
    )
    Page<Car> filterCars(@Param("location") String location,
                         @Param("company") String company,
                         @Param("fuel") FuelType fuel,
                         @Param("transmission") TransmissionType transmission,
                         @Param("price") Integer price,
                         @Param("seat") Integer seat,
                         Pageable pageable);
}
