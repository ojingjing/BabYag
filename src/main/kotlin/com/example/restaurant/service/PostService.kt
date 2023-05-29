package com.example.restaurant.service

import com.example.restaurant.Controller.PostResponse
import com.example.restaurant.dto.PostDto
import com.example.restaurant.entity.Member
import com.example.restaurant.entity.Post
import com.example.restaurant.repository.PostRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class PostService(
    @Autowired private val postRepository: PostRepository
) {
}