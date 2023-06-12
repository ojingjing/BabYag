package com.example.restaurant.dto

import jakarta.validation.constraints.NotNull
import org.hibernate.validator.constraints.Range
import org.springframework.web.multipart.MultipartFile

data class PostDto(
    @field:NotNull(message = "가게 이름은 필수 항목입니다.")
    val storeName: String,

    @field:NotNull(message = "주소는 필수 항목입니다.")
    val location: String,

    @field:NotNull(message = "카테고리는 필수 항목입니다.")
    val category: String,

    val photo: MultipartFile? = null,

    @field:NotNull(message = "평점은 필수 항목입니다.")
    @field:Range(min = 0, max = 5, message = "평점은 0부터 5까지의 범위여야 합니다.")
    val rating: Int,

    @field:NotNull(message = "한줄평은 필수 항목입니다.")
    val comment: String,
)