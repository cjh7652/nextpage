export default function Register() {
    return (
      <div className="reg">
        <h2>회원가입</h2>
          <form method="POST" action="/api/auth/signup">
            <input name="name" type="text" placeholder="이름" required /> 
            <input name="email" type="text" placeholder="이메일" required />
            <input name="password" type="password" placeholder="비밀번호" required />
            <input name="address" type="text" placeholder="주소" required />
            <button type="submit">id/pw 가입요청</button>
          </form>
      </div>
    )
  }