// EmailJS 설정
// EmailJS 계정을 만든 후 여기에 키를 입력하세요.
// 가이드: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,      // Email Service ID
   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,    // Email Template ID
   publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,      // Public Key

   // 이메일 수신 주소
   toEmail: 'gimeontae@gmail.com',    // 문의를 받을 이메일 주소
};

/*
📧 EmailJS 설정 가이드:

1. EmailJS 계정 생성
   - https://www.emailjs.com/ 접속
   - 무료 계정 생성 (월 200개 이메일 무료)

2. Email Service 추가
   - Dashboard → Email Services → Add New Service
   - Gmail, Outlook 등 선택
   - happinding@empas.com 계정 연결
   - Service ID 복사 → serviceId에 입력

3. Email Template 생성
   - Dashboard → Email Templates → Create New Template
   - 아래 템플릿 사용:
   
   제목: [ADCT 홈페이지 문의] {{subject}}
   
   내용:
   안녕하세요,
   
   ADCT 홈페이지를 통해 새로운 문의가 접수되었습니다.
   
   ━━━━━━━━━━━━━━━━━━━━━━
   보낸 사람: {{from_name}}
   이메일: {{from_email}}
   제목: {{subject}}
   ━━━━━━━━━━━━━━━━━━━━━━
   
   문의 내용:
   {{message}}
   
   ━━━━━━━━━━━━━━━━━━━━━━
   
   이 이메일은 ADCT 웹사이트 문의 폼에서 자동 발송되었습니다.

   - Template ID 복사 → templateId에 입력

4. Public Key 확인
   - Dashboard → Account → General
   - Public Key 복사 → publicKey에 입력

5. 이 파일 저장 후 웹사이트 테스트!
*/
