package com.bankloan.bankloan.model;

import com.bankloan.bankloan.model.entity.Loan;

public enum LoanStatus {
    ACTIVE, INACTIVE;
    public static LoanStatus get(int index){
        return LoanStatus.values()[index];
    }
}
