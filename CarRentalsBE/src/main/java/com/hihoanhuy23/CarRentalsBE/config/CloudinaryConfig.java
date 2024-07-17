package com.hihoanhuy23.CarRentalsBE.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {
    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dr7uxdi9o",
                "api_key", "637344836669722",
                "api_secret", "PKvOq2V7ITubN1arcNNyIJd4bTE",
                "folder", "CarRentals"
        ));
    }
}
