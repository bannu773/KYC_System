package com.bankloan.bankloan.repository;

import com.bankloan.bankloan.model.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification,Long> {
}
