package com.example.restaurant.repository

import com.example.restaurant.entity.Member
import com.example.restaurant.entity.Post
import org.springframework.data.jpa.repository.JpaRepository

interface PostRepository: JpaRepository<Post, Long> {
}