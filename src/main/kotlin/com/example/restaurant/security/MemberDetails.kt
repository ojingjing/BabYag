package com.example.restaurant.security

import com.example.restaurant.entity.Member
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.AuthorityUtils
import org.springframework.security.core.userdetails.UserDetails

class MemberDetails(private val email: String, private val password: String,) : UserDetails {
    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        return AuthorityUtils.createAuthorityList()
    }
    override fun getPassword() = password
    override fun getUsername() = email
    override fun isAccountNonExpired() = true
    override fun isAccountNonLocked() = true
    override fun isCredentialsNonExpired() = true
    override fun isEnabled() = true
}