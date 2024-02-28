package com.bankloan.bankloan.service;

import com.bankloan.bankloan.exception.CustomJwtException1;
import com.bankloan.bankloan.exception.EntityNotFoundException;
import com.bankloan.bankloan.model.Role;
import com.bankloan.bankloan.model.entity.User;
import com.bankloan.bankloan.repository.UserRepository;
import com.bankloan.bankloan.security.JwtTokenProvider;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
@Service
@RequiredArgsConstructor

public class UserService {
    private  UserRepository userRepository;
    private  PasswordEncoder passwordEncoder;
    private  JwtTokenProvider jwtTokenProvider;
    private  AuthenticationManager authenticationManager;


    public List<User> getAll() {
        return userRepository.findAll();
    }

    public String signIn(String userName, String password) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, password));
            return jwtTokenProvider.createToken(userName, userRepository.findByUsername(userName).getRoles());
        } catch (AuthenticationException e) {
            throw new CustomJwtException1();
        }
    }

    public String signUp(User user, boolean isAdmin) {
        if (!userRepository.existsByUsername(user.getUsername())){
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            Role role = isAdmin ? Role.ROLE_ADMIN : Role.ROLE_CLIENT;
            user.setRoles(Collections.singletonList(role));
            userRepository.save(user);
            return jwtTokenProvider.createToken(user.getUsername(),user.getRoles());
        } else {
            throw new CustomJwtException1();
        }
    }

    public void delete(String userName) {
        User byUsername = userRepository.findByUsername(userName);
        if (byUsername == null) {
            throw new EntityNotFoundException("User", "userName : " + userName);
        } else if (byUsername.getRoles().contains(Role.ROLE_ADMIN)) {
            throw new AccessDeniedException("No permission to delete user : " + userName);
        }
        userRepository.deleteByUsername(userName);
    }

    public User search(String userName) {
        User user = userRepository.findByUsername(userName);
        if (user == null) {
            throw new CustomJwtException1();
        }
        return user;
    }
}

