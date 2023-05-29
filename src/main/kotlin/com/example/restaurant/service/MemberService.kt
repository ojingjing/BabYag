    package com.example.restaurant.service

    import com.example.restaurant.dto.LoginDto
    import com.example.restaurant.dto.MemberDto
    import com.example.restaurant.jwt.JwtUtils
    import com.example.restaurant.repository.MemberRepository
    import jakarta.transaction.Transactional
    import org.springframework.beans.factory.annotation.Autowired
    import org.springframework.security.crypto.password.PasswordEncoder
    import org.springframework.stereotype.Service
    import java.lang.reflect.Member
    import java.time.LocalDate
    import java.time.format.DateTimeFormatter

    @Service
    class MemberService(
        @Autowired val memberRepository: MemberRepository,
        @Autowired val passwordEncoder: PasswordEncoder,
        @Autowired val jwtUtils: JwtUtils
    ){
        fun checkEmailDuplication(email : String) = memberRepository.existsByEmail(email)
        fun checkSnoDuplication(sno : String) = memberRepository.existsBySno(sno)
        fun checkNicknameDuplication(nickname : String) = memberRepository.existsByNickname(nickname)
        fun checkPassword(password : String, passwordCheck  : String) = password == passwordCheck
        fun checkLogin(email: String, password: String) = passwordEncoder.matches(password,memberRepository.findByEmail(email).get().password)
        fun findByEmail(email: String) = memberRepository.findByEmail(email)

        fun createMember(memberDto: MemberDto) {
            val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
            val member = com.example.restaurant.entity.Member(
                email = memberDto.email!!,
                password = passwordEncoder.encode(memberDto.password1!!),
                sno = memberDto.sno!!,
                nickname = memberDto.nickname!!,
                name = memberDto.name!!,
                birthDate = LocalDate.parse(memberDto.birthDate!!, formatter),
                department = memberDto.department!!,
            )
            memberRepository.save(member)
        }
        fun login(loginDto: LoginDto) = jwtUtils.generateJwtToken(loginDto.email!!)
    }
