const checkEmail = () => {
    let emailElem = document.getElementById('email');
    let emailSubmit = document.getElementById('emailSubmit');
    let validRegex = /^[a-zA-Z\d.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/;
    emailSubmit.onclick = () => {
        if (emailElem.value.match(validRegex)) {
            emailElem.value = '';
            alert('Email successfully send!');
        } else {
            alert('Invalid email address((');
            emailElem.focus();
        }
    };
}

const showQuestion = () => {
    let questionsList = document.querySelectorAll(".question");
    let answersList = document.querySelectorAll(".answer");
    for(let i = 0; i < questionsList.length; i++){
        questionsList[i].onclick = () => {
            questionsList[i].classList.toggle('open');
            answersList[i].classList.toggle('answer__open');
        }
    }
}

const resourcesSwiper = () => {
    const swiper = new Swiper('.swiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
}



checkEmail();
showQuestion();
resourcesSwiper();