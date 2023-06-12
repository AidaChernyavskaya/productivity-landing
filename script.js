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

const createSwipers = () => {
    const swiper1 = new Swiper('.swiper1', {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination1",
        },
        mousewheel: true,
        keyboard: true,
    });

    const swiper2 = new Swiper('.swiper2', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 52,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
        },
        mousewheel: true,
    });
}



checkEmail();
showQuestion();
createSwipers();