package com.bankloan.bankloan.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.bankloan.bankloan.model.LoanStatus;
import com.bankloan.bankloan.model.LoanLimit;
import com.bankloan.bankloan.model.LoanScoreResult;
import com.bankloan.bankloan.model.LoanType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

//import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "loan")
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    private LoanType loanType;

    private Double loanLimit;

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LoanType getLoanType() {
		return loanType;
	}

	public void setLoanType(LoanType loanType) {
		this.loanType = loanType;
	}

	public Double getLoanLimit() {
		return loanLimit;
	}

	public void setLoanLimit(Double loanLimit) {
		this.loanLimit = loanLimit;
	}

	public LoanScoreResult getLoanScoreResult() {
		return loanScoreResult;
	}

	public void setLoanScoreResult(LoanScoreResult loanScoreResult) {
		this.loanScoreResult = loanScoreResult;
	}

	public LoanStatus getLoanStatus() {
		return loanStatus;
	}

	public void setLoanStatus(LoanStatus loanStatus) {
		this.loanStatus = loanStatus;
	}

	public Date getLoanDate() {
		return loanDate;
	}

	public void setLoanDate(Date loanDate) {
		this.loanDate = loanDate;
	}

	public LoanApplication getLoanApplication() {
		return loanApplication;
	}

	public void setLoanApplication(LoanApplication loanApplication) {
		this.loanApplication = loanApplication;
	}

	public Integer getCreditMultiplier() {
		return creditMultiplier;
	}

	@Enumerated(EnumType.STRING)
    private LoanScoreResult loanScoreResult;

    @Enumerated(EnumType.STRING)
    private LoanStatus loanStatus;

    @CreationTimestamp
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date loanDate;

    private final Integer creditMultiplier = 4;


    public Loan(LoanType loanType, Double loanLimit, LoanScoreResult loanScoreResult, LoanStatus loanStatus, Date loanDate) {
        this.loanType = loanType;
        this.loanLimit = loanLimit;
        this.loanScoreResult = loanScoreResult;
        this.loanStatus = loanStatus;
        this.loanDate = loanDate;
    }

    @OneToOne(cascade = CascadeType.ALL,mappedBy = "loan")
    private LoanApplication loanApplication;

}
