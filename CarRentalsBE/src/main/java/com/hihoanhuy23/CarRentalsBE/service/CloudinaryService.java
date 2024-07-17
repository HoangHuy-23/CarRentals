package com.hihoanhuy23.CarRentalsBE.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {
    @Autowired
    private Cloudinary cloudinary;

    public Map upload(MultipartFile file, String fileName) throws IOException {
            Map uploadParams = ObjectUtils.asMap(
                "async", "auto",
                "folder", "CarRentals/DriverLicense",
                "public_id", fileName
        );
        return cloudinary.uploader().upload(file.getBytes(), uploadParams);
    }

    public Map delete(String publicId) throws IOException {
        return cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
    }
}
