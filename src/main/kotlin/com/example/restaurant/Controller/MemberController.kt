package com.example.restaurant.Controller

import com.example.restaurant.dto.MemberDto
import com.example.restaurant.service.MemberService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.validation.BindingResult
import org.springframework.validation.FieldError
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

data class MemberResponse(val data: MutableMap<String, String>, val errors: MutableList<String>)

@RestController
@RequestMapping("/member")
class MemberController(
    @Autowired val memberService: MemberService
){
    @PostMapping("/signup")
    fun singup(@RequestBody @Validated memberDto: MemberDto, bindingResult: BindingResult): ResponseEntity<MemberResponse>{
        if (memberDto == null) return ResponseEntity.badRequest().body(MemberResponse(mutableMapOf(), mutableListOf("데이터가 담기지 않았습니다.")))
        if (bindingResult.hasErrors()) return ResponseEntity.badRequest().body(MemberResponse(mutableMapOf(), fieldErrors(bindingResult)))
        if (memberService.checkEmailDuplication(memberDto.email!!)) return ResponseEntity.badRequest().body(MemberResponse(mutableMapOf(), mutableListOf("이미 있는 이메일입니다.")))
        if (memberService.checkSnoDuplication(memberDto.sno!!)) return ResponseEntity.badRequest().body(MemberResponse(mutableMapOf(), mutableListOf("이미 있는 학번 입니다.")))
        if (memberService.checkNicknameDuplication(memberDto.nickname!!)) return ResponseEntity.badRequest().body(MemberResponse(mutableMapOf(), mutableListOf("이미 있는 닉네임입니다.")))
        if (!memberService.checkPassword(memberDto.password1!!, memberDto.password2!!)) return ResponseEntity.badRequest().body(MemberResponse(mutableMapOf(), mutableListOf("비밀번호와 확인 비밀번호가 일치하지 않습니다.")))

        memberService.createMember(
            MemberDto(
                sno = memberDto.sno,
                email = memberDto.email,
                password1 = memberDto.password1,
                password2 = memberDto.password2,
                name = memberDto.name,
                nickname = memberDto.nickname,
                birthDate = memberDto.birthDate
            )
        )
        return ResponseEntity.ok().body(MemberResponse(mutableMapOf("success" to "true"), mutableListOf()))
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