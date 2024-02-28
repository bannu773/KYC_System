package com.bankloan.bankloan.controller;

import com.bankloan.bankloan.model.dto.CustomerDTO;
import com.bankloan.bankloan.model.entity.Notification;
import com.bankloan.bankloan.service.NotificationService;
import org.aspectj.weaver.ast.Not;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/notification")
public class NotificationController {
    private final NotificationService notificationService;

    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping("/get/{notificationId}")
    public ResponseEntity<Notification> getNotificationById(@PathVariable Long notificationId) {
        return new ResponseEntity(notificationService.getNotificationById(notificationId), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity addCustomer(@RequestBody Notification notification) {
        notificationService.createNotification(notification);
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
