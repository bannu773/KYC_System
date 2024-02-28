package com.bankloan.bankloan.repository;

import com.bankloan.bankloan.model.entity.LoanApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanApplicationRepository extends JpaRepository<LoanApplication,Long> {
}
