package com.bankloan.bankloan.exception;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class CustomJwtException1 extends RuntimeException {
    private  String message;
    private  HttpStatus httpStatus;
}