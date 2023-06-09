package com.example.restaurant.Controller

import com.example.restaurant.repository.MemberRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/mypage")
class MyPageController(
    private val memberRepository: MemberRepository
) {
    @GetMapping("/profile")
    fun getProfile(): ResponseEntity<ProfileResponse> {
        val member = memberRepository.findByNickname("jing")
        if (member == null) {
            val errorResponse = ProfileResponse(
                data = mutableMapOf(),
                errors = mutableListOf("Member not found")
            )
            return ResponseEntity.ok(errorResponse)
        }

        val profile = Profile(
            email = member.email,
            sno = member.sno,
            nickname = member.nickname,
            name = member.name,
            department = member.department
        )

        val successResponse = ProfileResponse(
            data = profile.toMutableMap(),
            errors = mutableListOf(),
        )

        return ResponseEntity.ok(successResponse)
    }
}

data class ProfileResponse(
    val data: MutableMap<String, String>,
    val errors: MutableList<String>
)

data class Profile(
    val email: String,
    val sno: String,
    val nickname: String,
    val name: String,
    val department: String
) {
    fun toMutableMap(): MutableMap<String, String> {
        return mutableMapOf(
            "email" to email,
            "sno" to sno,
            "nickname" to nickname,
            "name" to name,
            "department" to department
        )
    }
}