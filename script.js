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

const showIcon = () => {
    let buttonsList = document.querySelectorAll(".main__button");
    let iconsList = document.querySelectorAll(".speed_icon_background");
    for(let i = 0; i < buttonsList.length; i++){
        buttonsList[i].onclick = () => {
            iconsList[i].classList.toggle('speed_icon_close');
        }
    }
}

const showMenu = () => {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    menuBtn.addEventListener('click', function(){
        menu.classList.toggle('active');
        menuBtn.classList.toggle('btn-active');
    })
    menu.addEventListener('click', function(){
        menu.classList.remove('active');
        menuBtn.classList.remove('btn-active');
    })
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
showIcon();
showMenu();