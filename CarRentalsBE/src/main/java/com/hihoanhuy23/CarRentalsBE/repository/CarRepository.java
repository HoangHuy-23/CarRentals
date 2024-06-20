package com.hihoanhuy23.CarRentalsBE.repository;

import com.hihoanhuy23.CarRentalsBE.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Long> {
    @Query("Select c From Car c Where c.address.city Like %:location%")
    List<Car> searchCarByLocation(@Param("location") String keyword);

    @Query("SELECT c FROM Car c" +
            "WHERE (c.address.city LIKE %:location%) " +
            "AND (c.company LIKE %:company% OR :company='') " +
            "AND (c.fuel LIKE %:fuel% OR :fuel='') " +
            "AND (c.transmission LIKE %:transmission% OR :transmission='') " +
            "AND ((:minPrice IS NULL AND :maxPrice IS NULL) OR (c.price BETWEEN :minPrice AND :maxPrice)) " +
            "AND ((:minSeats IS NULL AND :maxSeats IS NULL) OR (c.seats BETWEEN :minSeats AND :maxSeats)) " +
            "AND (:yearOfProduction IS NULL OR c.yearOfProduction = :yearOfProduction) " +
            "AND (:fuelConsumption IS NULL OR c.fuelConsumption <= :fuelConsumption) " +
            "ORDER BY " +
            "CASE WHEN :sort = 'price_low' THEN c.price END ASC, " +
            "CASE WHEN :sort = 'price_high' THEN c.price END DESC, " +
            "CASE WHEN :sort = 'rating_high' THEN c.owner.ratingScores END DESC " )
    List<Car> filterCars(@Param("location") String location,
                         @Param("company") String company,
                         @Param("fuel") String fuel,
                         @Param("transmission") String transmission,
                         @Param("minPrice") Integer minPrice,
                         @Param("maxPrice") Integer maxPrice,
                         @Param("minSeats") Integer minSeats,
                         @Param("maxSeats") Integer maxSeats,
                         @Param("yearOfProduction") Integer yearOfProduction,
                         @Param("fuelConsumption") Integer fuelConsumption,
                         @Param("sort") String sort);
}
