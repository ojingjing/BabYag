package com.example.restaurant.entity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import java.time.LocalDate

@Entity
class Member(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
    @Column(unique = true) val email: String,
    var password: String,
    @Column(unique = true) val sno: String,
    @Column(unique = true) var nickname: String,
    val name: String,
    val department : String,
    val birthDate: LocalDate,
)
