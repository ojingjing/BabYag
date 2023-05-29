package com.example.restaurant.repository

import com.example.restaurant.entity.Member
import org.springframework.data.jpa.repository.JpaRepository
import java.util.Optional

interface MemberRepository : JpaRepository<Member, Long> {
    fun findByEmail(email: String): Optional<Member>
    fun existsByEmail(email: String): Boolean
    fun existsBySno(sno: String): Boolean
    fun existsByNickname(nickname : String): Boolean
}
