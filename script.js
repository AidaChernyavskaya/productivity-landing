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

checkEmail();