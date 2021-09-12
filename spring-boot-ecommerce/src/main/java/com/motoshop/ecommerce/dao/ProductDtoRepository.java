package com.motoshop.ecommerce.dao;

import com.motoshop.ecommerce.dto.ProductDto;
import com.motoshop.ecommerce.dto.SingleProductDto;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


@CrossOrigin
@Repository
public class ProductDtoRepository {

    private JdbcTemplate jdbcTemplate;

    public ProductDtoRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public SingleProductDto getProductById(Long id) {
        return jdbcTemplate.queryForObject(
                "SELECT p.id_product, p.name, p.price_brutto, p.description FROM product p WHERE p.id_product = " + id + ";",
                (rs, rn) -> mapToSingleProductDto(rs));
    }

    private SingleProductDto mapToSingleProductDto(ResultSet rs) throws SQLException {
        return new SingleProductDto(
                rs.getLong("id_product"),
                rs.getString("name"),
                rs.getBigDecimal("price_brutto"),
                getImagesToProduct(rs.getLong("id_product")),
                rs.getString("description")
        );
    }

    public List<ProductDto> getAllProductsWithImages() {
        List<ProductDto> productDtos = getAllProducts();

        productDtos.forEach(productDtoF -> productDtoF.setImages(getImagesToProduct(productDtoF.getId())));
//        for (ProductDto productDto : productDtos) {
//            productDto.setImages(getImagesToProduct(productDto.getId()));
//        }
        return productDtos;
    }

    private List<String> getImagesToProduct(Long id_product) {
        return jdbcTemplate.query(
                "SELECT i.path FROM images i WHERE i.id_product = " + id_product + ";",
                (rs, rn) -> rs.getString("path"));
    }

    private List<ProductDto> getAllProducts() {
        return jdbcTemplate.query(
                "SELECT p.id_product, p.name, p.price_brutto FROM product p;",
                (rs, rn) -> mapToProductDto(rs));
    }

    private ProductDto mapToProductDto(ResultSet rs) throws SQLException {
        return new ProductDto(
                rs.getLong("id_product"),
                rs.getString("name"),
                rs.getBigDecimal("price_brutto")
        );
    }
}
