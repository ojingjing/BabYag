package com.example.restaurant.service

import com.example.restaurant.entity.Member
import com.example.restaurant.repository.MemberRepository
import com.example.restaurant.security.MemberDetails
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class MemberDetailsService(@Autowired private val memberRepository: MemberRepository) : UserDetailsService {
    override fun loadUserByUsername(email: String): UserDetails {
        val member: Member = memberRepository.findByEmail(email).get()
        return MemberDetails(member.email, member.password)
    }
}