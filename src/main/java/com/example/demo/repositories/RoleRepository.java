package com.example.demo.repositories;

import com.example.demo.models.ERole;
import com.example.demo.models.Role;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends PagingAndSortingRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
