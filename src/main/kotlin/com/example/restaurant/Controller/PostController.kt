package com.example.restaurant.Controller

import com.example.restaurant.dto.PostDto
import com.example.restaurant.entity.Post
import com.example.restaurant.repository.MemberRepository
import com.example.restaurant.repository.PostRepository
import com.example.restaurant.service.PostService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

data class PostResponse(val data: MutableMap<String, String>, val errors: MutableList<String>)

@RestController
@RequestMapping("/post")
class PostController(
    @Autowired private val postRepository: PostRepository,
    @Autowired private val memberRepository: MemberRepository,
    @Autowired private val postService: PostService
){
    @PostMapping("/create")
    fun createPost(@Validated @RequestBody postDto: PostDto): ResponseEntity<PostResponse> {
        val email = SecurityContextHolder.getContext().authentication.name

        val post = Post(
            storeName = postDto.storeName,
            keyword = postDto.keyword,
            category = postDto.category,
            photo = postDto.photo,
            rating = postDto.rating,
            comment = postDto.comment,
            member = memberRepository.findByEmail(email).get()
        )

        postRepository.save(post)

        return ResponseEntity.ok().body(PostResponse(mutableMapOf("success" to "true"), mutableListOf()))
    }
}