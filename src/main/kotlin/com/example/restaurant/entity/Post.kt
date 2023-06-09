package com.example.restaurant.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import org.hibernate.validator.constraints.Range
import org.springframework.web.multipart.MultipartFile
import java.time.LocalDateTime

@Entity
class Post(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
    val storeName: String,
    val keyword: String,
    val category: String,
    val photo: String? = null,
    val rating: Int,
    val comment: String,
    val createdDate: LocalDateTime? = null,
    val nickname : String,
)