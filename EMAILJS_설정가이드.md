# 📧 EmailJS 설정 가이드

이메일 전송 기능을 활성화하려면 EmailJS 설정이 필요합니다.

## 1단계: EmailJS 회원가입

1. https://www.emailjs.com/ 접속
2. **Sign Up** 클릭 (무료 계정: 월 200건까지 무료)
3. 이메일 인증 완료

---

## 2단계: Email Service 추가

1. EmailJS 대시보드 로그인
2. 좌측 메뉴에서 **Email Services** 클릭
3. **Add New Service** 클릭
4. Gmail 선택 (또는 원하는 이메일 서비스)
5. **Connect Account** 클릭하여 Gmail 계정 연결
6. Service ID 확인 및 복사 (예: `service_abc123`)

---

## 3단계: Email Template 생성

### 📝 기업 상담 문의용 템플릿

1. 좌측 메뉴에서 **Email Templates** 클릭
2. **Create New Template** 클릭
3. **Template Name**: `기업 상담 문의`
4. **To Email**: `info@withstep.com` (받을 이메일 주소)
5. **Subject**: `[기업 상담] {{companyName}}님의 문의`
6. **Content** 에 아래 내용 입력:

```
안녕하세요,

{{companyName}}에서 기업 상담 문의가 접수되었습니다.

===== 문의 정보 =====
회사명: {{companyName}}
담당자명: {{contactPerson}}
연락처: {{phone}}
이메일: {{email}}
필요 서비스: {{serviceType}}
업종: {{industry}}
필요 인원: {{headcount}}
근무 지역: {{location}}

===== 문의 내용 =====
{{message}}

======================
```

7. **Save** 클릭
8. Template ID 확인 및 복사 (예: `template_xyz789`)

---

### 📝 인재 지원용 템플릿

1. **Create New Template** 클릭
2. **Template Name**: `인재 지원`
3. **To Email**: `info@withstep.com`
4. **Subject**: `[인재 지원] {{name}}님의 지원서`
5. **Content** 에 아래 내용 입력:

```
안녕하세요,

인재 지원 지원서가 접수되었습니다.

===== 지원자 정보 =====
이름: {{name}}
연락처: {{phone}}
이메일: {{email}}
지원 분야: {{field}}
경력: {{career}}

===== 자기소개 및 지원 동기 =====
{{message}}

======================
```

6. **Save** 클릭
7. Template ID 확인 및 복사 (예: `template_abc456`)

---

## 4단계: Public Key 확인

1. 좌측 메뉴에서 **Account** 클릭
2. **API Keys** 탭 클릭
3. **Public Key** 확인 및 복사 (예: `xYz123ABc456`)

---

## 5단계: 코드에 설정값 입력

`js/main.js` 파일을 열고 **720번 라인 근처**의 `EMAILJS_CONFIG` 객체를 수정:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'xYz123ABc456',              // ← 4단계에서 복사한 Public Key
    SERVICE_ID: 'service_abc123',            // ← 2단계에서 복사한 Service ID
    BUSINESS_TEMPLATE_ID: 'template_xyz789', // ← 3단계 기업 상담용 Template ID
    RECRUIT_TEMPLATE_ID: 'template_abc456'   // ← 3단계 인재 지원용 Template ID
};
```

---

## 6단계: 테스트

1. 웹사이트에서 **문의하기** 페이지 접속
2. 기업 상담 문의 또는 인재 지원 폼 작성
3. **문의하기** 또는 **지원하기** 버튼 클릭
4. "전송 중..." 표시 확인
5. "성공적으로 전송되었습니다" 메시지 확인
6. `info@withstep.com` 이메일 확인

---

## ✅ 설정 완료!

이제 contact.html에서 폼을 제출하면:
- ✉️ `info@withstep.com`으로 이메일이 자동 전송됩니다
- 📊 EmailJS 대시보드에서 전송 내역 확인 가능
- 🆓 월 200건까지 무료

---

## 💡 팁

### 무료 플랜 제한
- 월 200건 이메일 전송 가능
- 초과 시 유료 플랜 필요 ($7/월)

### 스팸 방지
EmailJS 대시보드에서:
1. **Settings** → **Security**
2. **Allowed Domains** 추가 (예: `withstep.com`)
3. **CAPTCHA** 활성화 (선택)

### 자동 응답 설정
템플릿 추가 생성하여:
- 문의자에게 자동 응답 이메일 발송
- "문의가 접수되었습니다" 확인 메일

---

## 🔧 문제 해결

**이메일이 안 오는 경우:**
1. F12 → Console 탭에서 에러 확인
2. EMAILJS_CONFIG 값 재확인
3. EmailJS 대시보드에서 Service 상태 확인
4. Gmail 스팸 폴더 확인

**"YOUR_PUBLIC_KEY" 경고가 뜨는 경우:**
- `js/main.js` 파일의 EMAILJS_CONFIG 설정 확인
- 실제 값으로 교체했는지 확인

---

## 📞 문의

EmailJS 관련 문의:
- https://www.emailjs.com/docs/
- support@emailjs.com
