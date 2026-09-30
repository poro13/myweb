/* ==============================
   메인 상품 슬라이드
================================= */

const slides = document.querySelectorAll(".main-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;


/* ==============================
   슬라이드 보여주기
================================= */

function showSlide(index) {

    /* 현재 슬라이드 변경 */

    currentSlide = index;


    /* 모든 슬라이드 숨기기 */

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });


    /* 모든 Dot 비활성화 */

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    /* 선택한 슬라이드 표시 */

    slides[currentSlide].classList.add("active");


    /* 선택한 Dot 표시 */

    dots[currentSlide].classList.add("active");
}


/* ==============================
   다음 슬라이드
================================= */

function nextSlide() {

    currentSlide++;

    /* 마지막이면 첫 번째로 */

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}


/* ==============================
   이전 슬라이드
================================= */

function prevSlide() {

    currentSlide--;

    /* 첫 번째에서 이전으로 가면 마지막 */

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}


/* ==============================
   5초마다 자동으로 변경
================================= */

setInterval(function() {

    nextSlide();

}, 5000);