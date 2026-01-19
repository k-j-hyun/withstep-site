/* ========================================
   WITHSTEP Website JavaScript

   Guide:
   - Slider speed: Change SLIDE_INTERVAL value (milliseconds)
   - Animation speed: Change ANIMATION_DURATION value
   - Language: Edit i18n object below
   ======================================== */

const CONFIG = {
    SLIDE_INTERVAL: 5000,
    ANIMATION_DURATION: 2000,
    HEADER_SCROLL: 50
};

/* ========================================
   Language Data - Edit here to change text
   ======================================== */
const i18n = {
    ko: {
        // Navigation
        'nav.home': 'HOME',
        'nav.about': '회사소개',
        'nav.aboutOverview': '회사 개요',
        'nav.ceoMessage': 'CEO 인사말',
        'nav.vision': '비전·미션·핵심가치',
        'nav.history': '회사 연혁',
        'nav.certification': '인증 및 신뢰(준비중)',
        'nav.services': '서비스',
        'nav.serviceOutsourcing': '운영형 아웃소싱',
        'nav.serviceDispatch': '인재파견',
        'nav.serviceHeadhunting': '헤드헌팅·RPO',
        'nav.serviceOutplacement': '전직지원 서비스',
        'nav.serviceHR': '인재관리(HR 컨설팅)',
        'nav.serviceApp': '맞춤형 앱 개발',
        'nav.operation': '운영방식',
        'nav.industries': '산업분야',
        'nav.support': '고객지원',
        'nav.process': '도입 절차 안내',
        'nav.faq': '자주 묻는 질문',
        'nav.contact': '문의하기',

        // Hero
        'hero.subtitle1': '왜 WITHSTEP인가',
        'hero.title1': '여러분의 성공이<br>곧 우리의 성공입니다',
        'hero.description1': 'WITHSTEP은 인력을 보내는 것으로 역할을 끝내지 않습니다.<br>현장의 안정, 운영의 효율, 성과의 개선까지 함께 고민하고 실행합니다.<br>우리는 단기 대응이 아닌, 지속 가능한 성과를 만드는 파트너입니다.',
        'hero.btn1': '자세히 보기',
        'hero.subtitle2': '운영 파트너십',
        'hero.title2': '현장을 대신 운영하는<br>파트너',
        'hero.description2': '운영 구조 설계부터 현장 관리, 성과 개선까지 함께 책임지는 파트너십을 제공합니다.<br>기업은 채용과 관리 부담에서 벗어나 핵심 사업에 집중하고,<br>현장은 안정적인 인력과 체계적인 관리 속에서 생산성을 높입니다.',
        'hero.btn2': '서비스 보기',
        'hero.subtitle3': '운영 전문가',
        'hero.title3': '사람과 현장을<br>동시에 이해합니다',
        'hero.description3': '우리는 사람과 현장을 동시에 이해하는 운영 전문가로서,<br>단기 대응이 아닌 지속 가능한 운영 구조를 만들어 갑니다.',
        'hero.btn3': '문의하기',

        // Search
        'search.placeholder': '검색어를 입력하세요...',
        'search.submit': '검색',

        // About
        'about.pageTitle': '회사소개',
        'about.pageSubtitle': 'About WITHSTEP',
        'about.title': '회사소개',
        'about.heading': 'WITHSTEP은 고객과 함께<br>성장하는 기업입니다',
        'about.desc': '우리는 기술을 통해 고객의 비즈니스 가치를 높이고, 함께 발전하는 파트너십을 추구합니다. 끊임없는 혁신과 신뢰를 바탕으로 최고의 솔루션을 제공합니다.',
        'about.statUnit1': '년+',
        'about.statLabel1': '업력',
        'about.statLabel2': '프로젝트',
        'about.statLabel3': '고객 만족도',
        'about.companyOverviewTitle': 'Company Overview',
        'about.problemTitle': 'Problem',
        'about.solutionTitle': 'Solution - 3단계 운영 모델',
        'about.step1Title': '운영 구조 설계',
        'about.step1Desc': '업무 프로세스 분석 및 인력 구조 최적화',
        'about.step2Title': '현장 밀착 관리',
        'about.step2Desc': '전담 매니저 배치, 근태·업무 품질 실시간 관리',
        'about.step3Title': '성과 기반 개선',
        'about.step3Desc': 'KPI 분석을 통한 생산성 및 비용 구조 지속 개선',
        'about.ceoMessageTitle': 'CEO 인사말',
        'about.visionTitle': '비전·미션·핵심가치',
        'about.visionHeader': 'Vision',
        'about.missionHeader': 'Mission',
        'about.coreValuesHeader': 'Core Values',
        'about.historyTitle': '회사 연혁',
        'about.certificationTitle': '인증 및 신뢰(준비중)',

        // Services
        'services.pageTitle': '서비스',
        'services.pageSubtitle': 'Services',
        'services.outsourcing.title': '운영형 아웃소싱',
        'services.dispatch.title': '인재파견',
        'services.headhunting.title': '헤드헌팅·RPO',
        'services.outplacement.title': '전직지원 서비스',
        'services.hr.title': '인재관리 (HR 컨설팅)',
        'services.app.title': '맞춤형 앱 개발',

        // Operation
        'operation.pageTitle': '운영방식',
        'operation.pageSubtitle': 'Operation Model',
        'operation.philosophy.title': '운영 파트너십 철학',
        'operation.process.title': 'WITHSTEP 운영 파트너십 구조',
        'operation.management.title': '현장 관리 시스템',
        'operation.performance.title': '성과 관리 체계',
        'operation.risk.title': '법적·노무 리스크 관리',
        'operation.why.title': 'WITHSTEP이 선택받는 이유',

        // Industries
        'industries.pageTitle': '산업분야',
        'industries.pageSubtitle': 'Industries',
        'industries.manufacturing.title': '제조 / 생산',
        'industries.logistics.title': '물류 / 창고 / 택배',
        'industries.retail.title': '유통 / 매장 / 판촉',
        'industries.event.title': '행사 / 프로모션',
        'industries.fnb.title': 'F&B / 서비스',
        'industries.office.title': '사무 / 운영 지원',
        'industries.facility.title': '시설관리 / 미화 / 보안',

        // Support
        'support.pageTitle': '고객지원',
        'support.pageSubtitle': 'Support',
        'support.processTitle': '도입 절차 안내',
        'support.faqTitle': '자주 묻는 질문 (FAQ)',

        // Contact
        'contact.pageTitle': '문의하기',
        'contact.pageSubtitle': 'Contact',
        'contact.tabs.business': '기업 상담 문의',
        'contact.tabs.recruit': '인재 지원 (구직자용)',
        'contact.form.companyName': '회사명',
        'contact.form.contactPerson': '담당자명',
        'contact.form.phone': '연락처',
        'contact.form.email': '이메일',
        'contact.form.serviceType': '필요 서비스',
        'contact.form.industry': '업종',
        'contact.form.headcount': '필요 인원',
        'contact.form.location': '근무 지역',
        'contact.form.message': '문의 내용',
        'contact.form.submit': '문의하기',
        'contact.form.selectPlaceholder': '선택하세요',
        'contact.recruit.name': '이름',
        'contact.recruit.phone': '연락처',
        'contact.recruit.email': '이메일',
        'contact.recruit.field': '지원 분야',
        'contact.recruit.career': '경력',
        'contact.recruit.message': '자기소개 및 지원 동기',
        'contact.recruit.submit': '지원하기',
        'contact.info.title': '연락처 안내',

        // Products
        'products.title': '제품',
        'products.product1Title': '제품 1',
        'products.product1Desc': '제품 1에 대한 설명입니다.',
        'products.product2Title': '제품 2',
        'products.product2Desc': '제품 2에 대한 설명입니다.',
        'products.product3Title': '제품 3',
        'products.product3Desc': '제품 3에 대한 설명입니다.',

        // News
        'news.title': '뉴스룸',
        'news.news1Title': '뉴스 제목을 입력하세요',
        'news.news1Desc': '뉴스 내용의 요약을 입력합니다. 간단한 설명으로 사용자의 관심을 유도합니다.',
        'news.news2Title': '뉴스 제목을 입력하세요',
        'news.news2Desc': '뉴스 내용의 요약을 입력합니다. 간단한 설명으로 사용자의 관심을 유도합니다.',
        'news.news3Title': '뉴스 제목을 입력하세요',
        'news.news3Desc': '뉴스 내용의 요약을 입력합니다. 간단한 설명으로 사용자의 관심을 유도합니다.',
        'news.moreNews': '더 많은 뉴스 보기 &rarr;',

        // Contact
        'contact.title': '문의하기',
        'contact.desc': '궁금한 점이 있으시면 언제든 연락주세요.',
        'contact.phone': '전화',
        'contact.email': '이메일',
        'contact.address': '주소',
        'contact.addressValue': '서울특별시 OO구 OO로 000',
        'contact.formName': '이름',
        'contact.formEmail': '이메일',
        'contact.formPhone': '연락처',
        'contact.formMessage': '문의내용',
        'contact.submit': '문의하기',

        // Footer
        'footer.company': '회사',
        'footer.info1': 'WITHSTEP | 대표: OOO | 사업자등록번호: 000-00-00000',
        'footer.info2': '주소: 서울특별시 OO구 OO로 000 | 전화: 02-0000-0000',
        'footer.privacy': '개인정보처리방침',
        'footer.terms': '이용약관',

        // Common
        'common.learnMore': '더 알아보기 &rarr;',
        'common.viewMore': '자세히 보기 &rarr;',
        'common.viewDetail': '자세히 보기'
    },
    en: {
        // Navigation
        'nav.home': 'HOME',
        'nav.about': 'About',
        'nav.aboutOverview': 'Company Overview',
        'nav.ceoMessage': 'CEO Message',
        'nav.vision': 'Vision·Mission·Values',
        'nav.history': 'History',
        'nav.certification': 'Certification & Trust',
        'nav.services': 'Services',
        'nav.serviceOutsourcing': 'Operational Outsourcing',
        'nav.serviceDispatch': 'Staff Dispatch',
        'nav.serviceHeadhunting': 'Headhunting·RPO',
        'nav.serviceOutplacement': 'Outplacement Service',
        'nav.serviceHR': 'HR Consulting',
        'nav.serviceApp': 'Custom App Development',
        'nav.operation': 'Operation Model',
        'nav.industries': 'Industries',
        'nav.support': 'Support',
        'nav.process': 'Introduction Process',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact',

        // Hero
        'hero.subtitle1': 'Why WITHSTEP',
        'hero.title1': 'Your Success<br>Is Our Success',
        'hero.description1': 'WITHSTEP goes beyond just providing workforce.<br>We work together on site stability, operational efficiency, and performance improvement.<br>We are your partner for sustainable results, not just short-term solutions.',
        'hero.btn1': 'Learn More',
        'hero.subtitle2': 'Operation Partnership',
        'hero.title2': 'Your Partner in<br>Site Operations',
        'hero.description2': 'We provide partnership that takes responsibility from operational structure design to on-site management and performance improvement.<br>Companies can focus on core business free from hiring and management burden,<br>while sites increase productivity with stable workforce and systematic management.',
        'hero.btn2': 'View Services',
        'hero.subtitle3': 'Operation Experts',
        'hero.title3': 'We Understand Both<br>People and Sites',
        'hero.description3': 'As operation experts who understand both people and sites,<br>we create sustainable operational structures, not just short-term responses.',
        'hero.btn3': 'Contact Us',

        // Search
        'search.placeholder': 'Enter search term...',
        'search.submit': 'Search',

        // About
        'about.pageTitle': 'About Us',
        'about.pageSubtitle': 'About WITHSTEP',
        'about.title': 'About Us',
        'about.heading': 'WITHSTEP grows<br>together with customers',
        'about.desc': 'We enhance your business value through technology and pursue partnership that grows together. We provide the best solutions based on continuous innovation and trust.',
        'about.statUnit1': 'Years+',
        'about.statLabel1': 'Experience',
        'about.statLabel2': 'Projects',
        'about.statLabel3': 'Satisfaction',
        'about.companyOverviewTitle': 'Company Overview',
        'about.problemTitle': 'Problem',
        'about.solutionTitle': 'Solution - 3-Step Operation Model',
        'about.step1Title': 'Operational Structure Design',
        'about.step1Desc': 'Business process analysis and workforce structure optimization',
        'about.step2Title': 'On-Site Management',
        'about.step2Desc': 'Dedicated manager deployment, real-time attendance and work quality management',
        'about.step3Title': 'Performance-Based Improvement',
        'about.step3Desc': 'Continuous improvement of productivity and cost structure through KPI analysis',
        'about.ceoMessageTitle': 'CEO Message',
        'about.visionTitle': 'Vision·Mission·Core Values',
        'about.visionHeader': 'Vision',
        'about.missionHeader': 'Mission',
        'about.coreValuesHeader': 'Core Values',
        'about.historyTitle': 'Company History',
        'about.certificationTitle': 'Certification & Trust',

        // Services
        'services.pageTitle': 'Services',
        'services.pageSubtitle': 'Services',
        'services.outsourcing.title': 'Operational Outsourcing',
        'services.dispatch.title': 'Staff Dispatch',
        'services.headhunting.title': 'Headhunting·RPO',
        'services.outplacement.title': 'Outplacement Service',
        'services.hr.title': 'HR Consulting',
        'services.app.title': 'Custom App Development',

        // Operation
        'operation.pageTitle': 'Operation Model',
        'operation.pageSubtitle': 'Operation Model',
        'operation.philosophy.title': 'Operation Partnership Philosophy',
        'operation.process.title': 'WITHSTEP Operation Partnership Structure',
        'operation.management.title': 'On-Site Management System',
        'operation.performance.title': 'Performance Management System',
        'operation.risk.title': 'Legal & Labor Risk Management',
        'operation.why.title': 'Why Choose WITHSTEP',

        // Industries
        'industries.pageTitle': 'Industries',
        'industries.pageSubtitle': 'Industries',
        'industries.manufacturing.title': 'Manufacturing / Production',
        'industries.logistics.title': 'Logistics / Warehouse / Delivery',
        'industries.retail.title': 'Retail / Store / Promotion',
        'industries.event.title': 'Event / Promotion',
        'industries.fnb.title': 'F&B / Service',
        'industries.office.title': 'Office / Operations Support',
        'industries.facility.title': 'Facility Management / Cleaning / Security',

        // Support
        'support.pageTitle': 'Support',
        'support.pageSubtitle': 'Support',
        'support.processTitle': 'Introduction Process',
        'support.faqTitle': 'Frequently Asked Questions (FAQ)',

        // Contact
        'contact.pageTitle': 'Contact',
        'contact.pageSubtitle': 'Contact',
        'contact.tabs.business': 'Business Inquiry',
        'contact.tabs.recruit': 'Job Application',
        'contact.form.companyName': 'Company Name',
        'contact.form.contactPerson': 'Contact Person',
        'contact.form.phone': 'Phone',
        'contact.form.email': 'Email',
        'contact.form.serviceType': 'Service Needed',
        'contact.form.industry': 'Industry',
        'contact.form.headcount': 'Number of Staff Needed',
        'contact.form.location': 'Work Location',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Submit Inquiry',
        'contact.form.selectPlaceholder': 'Please select',
        'contact.recruit.name': 'Name',
        'contact.recruit.phone': 'Phone',
        'contact.recruit.email': 'Email',
        'contact.recruit.field': 'Field of Interest',
        'contact.recruit.career': 'Career',
        'contact.recruit.message': 'Self-Introduction & Motivation',
        'contact.recruit.submit': 'Submit Application',
        'contact.info.title': 'Contact Information',

        // Products
        'products.title': 'Products',
        'products.product1Title': 'Product 1',
        'products.product1Desc': 'Description for Product 1.',
        'products.product2Title': 'Product 2',
        'products.product2Desc': 'Description for Product 2.',
        'products.product3Title': 'Product 3',
        'products.product3Desc': 'Description for Product 3.',

        // News
        'news.title': 'Newsroom',
        'news.news1Title': 'Enter news title',
        'news.news1Desc': 'Enter news summary. A brief description to attract user interest.',
        'news.news2Title': 'Enter news title',
        'news.news2Desc': 'Enter news summary. A brief description to attract user interest.',
        'news.news3Title': 'Enter news title',
        'news.news3Desc': 'Enter news summary. A brief description to attract user interest.',
        'news.moreNews': 'View More News &rarr;',

        // Contact
        'contact.title': 'Contact Us',
        'contact.desc': 'Feel free to contact us anytime.',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.address': 'Address',
        'contact.addressValue': 'OO-ro 000, OO-gu, Seoul, Korea',
        'contact.formName': 'Name',
        'contact.formEmail': 'Email',
        'contact.formPhone': 'Phone',
        'contact.formMessage': 'Message',
        'contact.submit': 'Submit',

        // Footer
        'footer.company': 'Company',
        'footer.info1': 'WITHSTEP | CEO: OOO | Business Registration: 000-00-00000',
        'footer.info2': 'Address: OO-ro 000, OO-gu, Seoul | Tel: 02-0000-0000',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',

        // Common
        'common.learnMore': 'Learn More &rarr;',
        'common.viewMore': 'View More &rarr;',
        'common.viewDetail': 'View Details'
    }
};

let currentLang = 'ko';

document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    initMobileMenu();
    initCountAnimation();
    initSmoothScroll();
    initHeaderScroll();
    initContactForm();
    initLanguageToggle();
    initFAQ();
    initContactTabs();
    initSearch();
});

/* ========================================
   Language Toggle
   ======================================== */
function initLanguageToggle() {
    const langBtn = document.getElementById('langToggle');
    if (!langBtn) return;

    const savedLang = localStorage.getItem('withstep-lang');
    if (savedLang) {
        currentLang = savedLang;
        applyLanguage(currentLang);
        langBtn.textContent = currentLang === 'ko' ? 'ENG' : 'KOR';
    }

    langBtn.addEventListener('click', function() {
        currentLang = currentLang === 'ko' ? 'en' : 'ko';
        applyLanguage(currentLang);
        langBtn.textContent = currentLang === 'ko' ? 'ENG' : 'KOR';
        localStorage.setItem('withstep-lang', currentLang);
    });
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(function(el) {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[lang] && i18n[lang][key]) {
            el.placeholder = i18n[lang][key];
        }
    });

    document.documentElement.lang = lang;
}

/* ========================================
   Hero Slider
   ======================================== */
function initSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');

    if (slides.length === 0) return;

    // Apply background images from data-bg attributes
    slides.forEach(function(slide) {
        const bgUrl = slide.getAttribute('data-bg');
        if (bgUrl) {
            slide.style.backgroundImage = 'url(' + bgUrl + ')';
        }
    });

    // Control videos
    function controlVideos(activeIndex) {
        slides.forEach(function(slide, index) {
            const video = slide.querySelector('.hero-video');
            if (video) {
                if (index === activeIndex) {
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(function(error) {
                            // Auto-play was prevented, video will play when user interacts
                            console.log('Video autoplay prevented:', error);
                        });
                    }
                } else {
                    video.pause();
                }
            }
        });
    }

    let currentSlide = 0;
    let slideInterval = null;

    function goToSlide(index) {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        if (dots && dots.length > 0) {
            dots[currentSlide].classList.remove('active');
        }

        // Update current slide index
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        // Add active class to new slide
        slides[currentSlide].classList.add('active');
        if (dots && dots.length > 0) {
            dots[currentSlide].classList.add('active');
        }

        // Control videos
        controlVideos(currentSlide);
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        // Clear any existing interval
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        // Start new interval
        slideInterval = setInterval(nextSlide, CONFIG.SLIDE_INTERVAL);
        console.log('Auto-slide started with interval:', CONFIG.SLIDE_INTERVAL);
    }

    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }

    // Start first video
    controlVideos(0);

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }

    // Dots navigation
    if (dots && dots.length > 0) {
        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                stopAutoSlide();
                goToSlide(index);
                startAutoSlide();
            });
        });
    }

    // Start auto-slide
    startAutoSlide();
}

/* ========================================
   Mobile Menu
   ======================================== */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // 모바일에서 드롭다운 메뉴 처리
    const navItems = nav.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            const mainLink = item.querySelector('a');

            // 메인 링크 클릭 시 드롭다운 토글 (모바일에서만)
            mainLink.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();

                    // 다른 드롭다운 닫기
                    navItems.forEach(function(otherItem) {
                        if (otherItem !== item) {
                            const otherDropdown = otherItem.querySelector('.dropdown');
                            if (otherDropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        }
                    });

                    // 현재 드롭다운 토글
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // 드롭다운 내부 링크 클릭 시에만 메뉴 닫기
    const dropdownLinks = nav.querySelectorAll('.dropdown a');
    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');

            // 모든 드롭다운 닫기
            navItems.forEach(function(item) {
                const dropdown = item.querySelector('.dropdown');
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            });
        });
    });

    // 메뉴 외부 클릭 시 닫기
    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
            menuBtn.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');

            // 모든 드롭다운 닫기
            navItems.forEach(function(item) {
                const dropdown = item.querySelector('.dropdown');
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            });
        }
    });
}

/* ========================================
   Count Animation
   ======================================== */
function initCountAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length === 0) return;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(function(num) {
        observer.observe(num);
    });
}

function animateCount(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = CONFIG.ANIMATION_DURATION;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(function() {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

/* ========================================
   Smooth Scroll
   ======================================== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/* ========================================
   Header Scroll Effect
   ======================================== */
function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (!header) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > CONFIG.HEADER_SCROLL) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* ========================================
   Contact Form with EmailJS
   ======================================== */

// EmailJS 설정 - 아래 값들을 본인의 EmailJS 계정 정보로 변경하세요
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'bAvY1b98_IC4a9XFk',
    SERVICE_ID: 'service_rzonx0n',
    BUSINESS_TEMPLATE_ID: 'template_e0ag3fb',
    RECRUIT_TEMPLATE_ID: 'template_7237v7h'
};

function initContactForm() {
    // EmailJS 초기화
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }

    const businessForm = document.getElementById('businessForm');
    const recruitForm = document.getElementById('recruitForm');

    // 기업 상담 문의 폼
    if (businessForm) {
        businessForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = businessForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = '전송 중...';

            // EmailJS로 이메일 전송
            if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
                emailjs.sendForm(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.BUSINESS_TEMPLATE_ID,
                    businessForm
                ).then(
                    function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        alert('기업 상담 문의가 성공적으로 전송되었습니다.\n빠른 시일 내에 답변 드리겠습니다.');
                        businessForm.reset();
                    },
                    function(error) {
                        console.log('FAILED...', error);
                        alert('전송 중 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.');
                    }
                ).finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                });
            } else {
                // EmailJS 미설정 시 기본 동작
                console.warn('EmailJS가 설정되지 않았습니다. EMAILJS_CONFIG를 확인하세요.');
                alert('기업 상담 문의가 접수되었습니다.\n(데모 모드: 실제 이메일은 전송되지 않습니다)');
                businessForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // 인재 지원 폼
    if (recruitForm) {
        recruitForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = recruitForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = '전송 중...';

            // EmailJS로 이메일 전송
            if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
                emailjs.sendForm(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.RECRUIT_TEMPLATE_ID,
                    recruitForm
                ).then(
                    function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        alert('지원서가 성공적으로 전송되었습니다.\n검토 후 연락 드리겠습니다.');
                        recruitForm.reset();
                    },
                    function(error) {
                        console.log('FAILED...', error);
                        alert('전송 중 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.');
                    }
                ).finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                });
            } else {
                // EmailJS 미설정 시 기본 동작
                console.warn('EmailJS가 설정되지 않았습니다. EMAILJS_CONFIG를 확인하세요.');
                alert('지원서가 접수되었습니다.\n(데모 모드: 실제 이메일은 전송되지 않습니다)');
                recruitForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }
}

/* ========================================
   FAQ Toggle
   ======================================== */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');

                // Close all FAQ items
                faqItems.forEach(function(faq) {
                    faq.classList.remove('active');
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

/* ========================================
   Contact Tabs
   ======================================== */
function initContactTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            tabBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(tabName + '-tab');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}


/* ========================================
   Search Functionality
   ======================================== */
function initSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.getElementById('searchInput');
    const searchSubmit = document.querySelector('.search-submit');
    const searchResults = document.getElementById('searchResults');

    if (!searchBtn || !searchModal) return;

    // Open search modal
    searchBtn.addEventListener('click', function() {
        searchModal.classList.add('active');
        searchInput.focus();
    });

    // Close search modal
    searchClose.addEventListener('click', function() {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    // Close on outside click
    searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });

    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Search on button click
    searchSubmit.addEventListener('click', function() {
        performSearch();
    });

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (!query) {
            searchResults.innerHTML = '<div class="search-no-results">' + (currentLang === 'ko' ? '검색어를 입력하세요.' : 'Please enter a search term.') + '</div>';
            return;
        }

        // Search data
        const searchData = [
            { title: '회사소개', title_en: 'About', url: 'about.html', desc: 'WITHSTEP 회사 개요 및 비전', desc_en: 'Company overview and vision' },
            { title: 'CEO 인사말', title_en: 'CEO Message', url: 'about.html#ceo-message', desc: '대표이사 유재권의 인사말', desc_en: 'Message from CEO Yoo Jae-kwon' },
            { title: '운영형 아웃소싱', title_en: 'Operational Outsourcing', url: 'services.html#service-outsourcing', desc: '현장 운영 전문 아웃소싱 서비스', desc_en: 'Professional on-site operation outsourcing' },
            { title: '인재파견', title_en: 'Staff Dispatch', url: 'services.html#service-dispatch', desc: '검증된 인력 파견 서비스', desc_en: 'Verified workforce dispatch service' },
            { title: '헤드헌팅·RPO', title_en: 'Headhunting·RPO', url: 'services.html#service-headhunting', desc: '전문 인재 채용 서비스', desc_en: 'Professional recruitment service' },
            { title: '맞춤형 앱 개발', title_en: 'Custom App Development', url: 'services.html#service-app', desc: '기업 맞춤형 업무 앱 개발', desc_en: 'Custom business app development' },
            { title: '운영방식', title_en: 'Operation Model', url: 'operation.html', desc: 'WITHSTEP의 운영 파트너십 방식', desc_en: 'WITHSTEP operation partnership model' },
            { title: '산업분야', title_en: 'Industries', url: 'industries.html', desc: '제조, 물류, 유통 등 다양한 산업 지원', desc_en: 'Support for manufacturing, logistics, retail and more' },
            { title: '문의하기', title_en: 'Contact', url: 'contact.html', desc: '기업 상담 및 인재 지원 문의', desc_en: 'Business consultation and talent inquiry' }
        ];

        const results = searchData.filter(function(item) {
            const titleMatch = currentLang === 'ko' ? 
                item.title.toLowerCase().includes(query) : 
                item.title_en.toLowerCase().includes(query);
            const descMatch = currentLang === 'ko' ? 
                item.desc.toLowerCase().includes(query) : 
                item.desc_en.toLowerCase().includes(query);
            return titleMatch || descMatch;
        });

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">' + (currentLang === 'ko' ? '검색 결과가 없습니다.' : 'No results found.') + '</div>';
            return;
        }

        let resultsHTML = '';
        results.forEach(function(result) {
            const title = currentLang === 'ko' ? result.title : result.title_en;
            const desc = currentLang === 'ko' ? result.desc : result.desc_en;
            resultsHTML += '<div class="search-result-item" onclick="location.href=\'' + result.url + '\'">';
            resultsHTML += '<h4>' + title + '</h4>';
            resultsHTML += '<p>' + desc + '</p>';
            resultsHTML += '</div>';
        });

        searchResults.innerHTML = resultsHTML;
    }
}

