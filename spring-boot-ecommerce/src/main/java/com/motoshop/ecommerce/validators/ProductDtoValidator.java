package com.motoshop.ecommerce.validators;

import com.motoshop.ecommerce.dto.CreateProductDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static java.util.Objects.isNull;

@Service
public class ProductDtoValidator {

    public List<String> validateProduct(CreateProductDto createProductDto) {

        List<String> errors = new ArrayList<>();

        if (isNull(createProductDto.getCatalog_number())) {
            errors.add("Catalog can't be null");
        }
        if (isNull(createProductDto.getDescription())) {
            errors.add("Description can't be null");
        }
        if (isNull(createProductDto.getName())) {
            errors.add("Product name can't be null");
        }
        if (isNull(createProductDto.getPrice_brutto())) {
            errors.add("Price brutto can't be null");
        }
        if (isNull(createProductDto.getPrice_netto())) {
            errors.add("Price netto can't be null");
        }
        if (isNull(createProductDto.getQuantity())) {
            errors.add("Quantity can't be null");
        }
        if (isNull(createProductDto.getVat())) {
            errors.add("Vat can't be null");
        }
        if (isNull(createProductDto.getImages())) {
            errors.add("Images can't be null");
        }

        return errors;
    }
}
