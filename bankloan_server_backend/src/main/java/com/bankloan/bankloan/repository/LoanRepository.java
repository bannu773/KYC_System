package com.bankloan.bankloan.repository;

import com.bankloan.bankloan.model.entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan,Long> {


}
