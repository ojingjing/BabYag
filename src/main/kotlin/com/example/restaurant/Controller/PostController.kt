package com.example.restaurant.Controller

import com.example.restaurant.dto.PostDto
import com.example.restaurant.entity.Post
import com.example.restaurant.repository.MemberRepository
import com.example.restaurant.repository.PostRepository
import com.example.restaurant.service.PostService
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.validation.BindingResult
import org.springframework.validation.FieldError
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime

data class PostResponse(val data: MutableMap<String, String>, val errors: MutableList<String>)
data class PostResponse1(val data: List<Map<String, String>>, val errors: MutableList<String>)

@RestController
@RequestMapping("/post")
class PostController(
    @Autowired private val postRepository: PostRepository,
    @Autowired private val postService: PostService,
){
    @PostMapping("/create")
    fun createPost(@Validated @RequestBody postDto: PostDto,bindingResult: BindingResult): ResponseEntity<PostResponse> {
        val email = SecurityContextHolder.getContext().authentication.name
        if (postDto.storeName.isNullOrEmpty()) {
            return ResponseEntity.badRequest().body(PostResponse(mutableMapOf(), mutableListOf("가게 이름은 필수입니다.")))
        }
        if (postDto.category.isNullOrEmpty()) {
            return ResponseEntity.badRequest().body(PostResponse(mutableMapOf(), mutableListOf("카테고리는 필수 입니다.")))
        }
        if (postDto.location.isNullOrEmpty()) {
            return ResponseEntity.badRequest().body(PostResponse(mutableMapOf(), mutableListOf("keyword는 필수 입니다.")))
        }
        if (postDto.comment.isNullOrEmpty()) {
            return ResponseEntity.badRequest().body(PostResponse(mutableMapOf(), mutableListOf("한줄평은 필수 입니다.")))
        }
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(PostResponse(mutableMapOf(), fieldErrors(bindingResult)))
        }
        val postResponse = postService.createPost(postDto, email)
        return ResponseEntity.ok().body(postResponse)
    }
    @GetMapping("/lists")
    fun getAllPosts(): ResponseEntity<PostResponse1> {
        val posts = postRepository.findAll()
        val responseData = posts.map { post ->
            mapOf(
                "id" to post.id.toString(),
                "storeName" to post.storeName,
                "location" to post.location,
                "nickname" to post.nickname,
                "category" to post.category,
                "rating" to post.rating.toString()
            )
        }

        val postResponse = PostResponse1(data = responseData, errors = mutableListOf())
        return ResponseEntity.ok().body(postResponse)
    }


    @GetMapping("/detail/{postId}")
    fun getPostDetails(@PathVariable postId: Long): ResponseEntity<PostResponse> {
        val post = postRepository.findById(postId)
        if (post.isPresent) {
            val responseData = mutableMapOf<String, String>()
            val selectedPost = post.get()
            responseData["id"] = selectedPost.id.toString()
            responseData["storeName"] = selectedPost.storeName
            responseData["nickname"] = selectedPost.nickname
            responseData["rating"] = selectedPost.rating.toString()
            responseData["comment"] = selectedPost.comment

            val postResponse = PostResponse(responseData, mutableListOf())
            return ResponseEntity.ok().body(postResponse)
        } else {
            return ResponseEntity.notFound().build()
        }
    }
    private fun fieldErrors(bindingResult: BindingResult): MutableList<String> {
        val errors = mutableListOf<String>()
        bindingResult.allErrors.forEach {
            val field = it as FieldError
            val message = it.defaultMessage
            errors.add("${field.field} : $message")
        }
        return errors
    }
}