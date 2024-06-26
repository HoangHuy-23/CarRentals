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
            "AND (:minPrice IS NULL OR :maxPrice IS NULL OR c.price BETWEEN :minPrice AND :maxPrice) " +
            "AND (:minSeats IS NULL OR :maxSeats IS NULL OR c.seats BETWEEN :minSeats AND :maxSeats) " +
            "AND (:yearOfProduction IS NULL OR c.yearOfProduction = :yearOfProduction) " +
            "AND (:fuelConsumption IS NULL OR c.fuelConsumption <= :fuelConsumption) " //+
//            "ORDER BY " +
//            "CASE WHEN :sort = 'price_low' THEN c.price END ASC, " +
//            "CASE WHEN :sort = 'price_high' THEN c.price END DESC, " +
//            "CASE WHEN :sort = 'rating_high' THEN c.owner.ratingScores END DESC, " +
//            "CASE WHEN :sort = 'rating_low' THEN c.owner.ratingScores END ASC, " +
//            "CASE WHEN :sort = 'year_newest' THEN c.yearOfProduction END DESC, " +
//            "CASE WHEN :sort = 'year_oldest' THEN c.yearOfProduction END ASC"
    )
    Page<Car> filterCars(@Param("location") String location,
                         @Param("company") String company,
                         @Param("fuel") FuelType fuel,
                         @Param("transmission") TransmissionType transmission,
                         @Param("minPrice") Integer minPrice,
                         @Param("maxPrice") Integer maxPrice,
                         @Param("minSeats") Integer minSeats,
                         @Param("maxSeats") Integer maxSeats,
                         @Param("yearOfProduction") Integer yearOfProduction,
                         @Param("fuelConsumption") Integer fuelConsumption,
//                         @Param("sort") String sort,
                         Pageable pageable);
}
