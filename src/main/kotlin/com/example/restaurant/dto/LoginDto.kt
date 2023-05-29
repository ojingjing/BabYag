package com.example.restaurant.dto

import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Pattern

data class LoginDto(
    @field:NotEmpty(message = "email : 필수 항목입니다.")
    @field:Pattern(
        regexp = "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@ks.ac.kr\$",
        message = "이메일은 메일 형식을 따라주세요. (예시, example@ks.ac.kr)"
    )
    val email: String? = null,

    @field:NotEmpty(message = "필수 항목입니다.")
    val password: String? = null,
    )