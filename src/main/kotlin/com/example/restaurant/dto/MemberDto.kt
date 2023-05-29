package com.example.restaurant.dto

import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Pattern

data class MemberDto(
    @field:NotNull(message = "학번 : 필수 항목입니다.")
    val sno: String? = null,

    @field:NotNull(message = "email : 필수 항목입니다.")
    @field:Pattern(
        regexp = "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@ks.ac.kr\$",
        message = "이메일은 메일 형식을 따라주세요. (예시, example@ks.ac.kr)"
    )
    val email: String? = null,

    @field:NotNull(message = "password : 필수 항목입니다.")
    val password1: String? = null,

    @field:NotNull(message = "password check : 필수 항목입니다.")
    val password2: String? = null,

    @field:NotNull(message = "이름 : 필수 항목입니다.")
    val name: String? = null,

    @field:NotNull(message = "단과대 : 필수 항목입니다.")
    val department : String? = null,

    @field:NotNull(message = "nickname : 필수 항목입니다.")
    val nickname: String? = null,

    @field:NotNull(message = "생일 : 필수 항목입니다.")
    @Pattern(regexp = "\\d{4}-\\d{2}-\\d{2}", message = "유효한 날짜 형식이 아닙니다.")
    val birthDate: String? = null,
)