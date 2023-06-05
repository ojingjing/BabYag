package com.example.restaurant.service

import com.example.restaurant.Controller.PostResponse
import com.example.restaurant.dto.PostDto
import com.example.restaurant.entity.Post
import com.example.restaurant.repository.MemberRepository
import com.example.restaurant.repository.PostRepository
import jakarta.validation.Validation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.io.File
import java.time.LocalDateTime
import java.util.UUID

@Service
class PostService(
    @Autowired private val memberRepository: MemberRepository,
    @Autowired private val postRepository: PostRepository,
) {
    fun createPost(postDto: PostDto, email: String): PostResponse {
        val validationErrors = validatePostDto(postDto)

        return if (validationErrors.isNotEmpty()) {
            PostResponse(mutableMapOf(), validationErrors.toMutableList())
        } else {
            val now = LocalDateTime.now()
            val savedPhotoPath = savePhoto(postDto.photo)
            val post = Post(
                storeName = postDto.storeName,
                keyword = postDto.keyword,
                category = postDto.category,
                photo = savedPhotoPath,
                rating = postDto.rating,
                comment = postDto.comment,
                createdDate = now,
                member = memberRepository.findByEmail(email).get()
            )

            postRepository.save(post)
            PostResponse(mutableMapOf("success" to "true"), mutableListOf())
        }
    }
    private fun validatePostDto(postDto: PostDto): List<String> {
        val validationErrors = mutableListOf<String>()
        return validationErrors
    }
    private fun savePhoto(photo: MultipartFile?): String? {
        if (photo == null || photo.isEmpty) {
            return null
        }
        val fileName = "${UUID.randomUUID()}_${photo.originalFilename}"
        val filePath = "/path/to/save/$fileName"

        photo.transferTo(File(filePath))
        return filePath
    }
}