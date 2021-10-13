const nextBtns = document.querySelectorAll('.nextBtn');
const prevBtns = document.querySelectorAll('.prevBtn');
const allFormSite = document.querySelectorAll('.formSite');
const allHeaderBtns = document.querySelectorAll('.formHeaderContainer button');
const allSideTexts = document.querySelectorAll('.formSideContainer p');
const sendBtn = document.querySelector('.sendBtn');

nextBtns.forEach((nextBtn, index) => {
    nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const btn = e.currentTarget;
        const currentSlide = btn.parentNode.parentNode.parentNode;
        const nextSlide = currentSlide.nextElementSibling;
        currentSlide.classList.replace('show', 'hide');
        nextSlide.classList.replace('hide', 'show');
        console.log(index);
        const sideContainer = currentSlide.parentNode.previousElementSibling;
        const allSideText = sideContainer.querySelectorAll('.formSideContainer > p');
        console.log(allSideText);
        allSideText[index].classList.remove('selected');
        allSideText[index + 1].classList.add('selected');
        allHeaderBtns.forEach((headerBtn) => {
            headerBtn.classList.remove('selected');
        });
        allHeaderBtns[index + 1].classList.add('selected');
    });
});

prevBtns.forEach((prevBtn, index) => {
    prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const btn = e.currentTarget;
        const currentSlide = btn.parentNode.parentNode.parentNode;
        const prevSlide = currentSlide.previousElementSibling;
        currentSlide.classList.replace('show', 'hide');
        prevSlide.classList.replace('hide', 'show');
        const sideContainer = currentSlide.parentNode.previousElementSibling;
        const allSideText = sideContainer.querySelectorAll('.formSideContainer > p');
        console.log(allSideText);
        console.log(index);
        allSideText[index + 1].classList.remove('selected');
        allSideText[index].classList.add('selected');
        allHeaderBtns.forEach((headerBtn) => {
            headerBtn.classList.remove('selected');
        });
        allHeaderBtns[index].classList.add('selected');
    });
});

allHeaderBtns.forEach((headerBtn, index) => {
    headerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        allFormSite.forEach((formSite) => {
            formSite.classList.replace('show', 'hide')
        });
        allFormSite[index].classList.replace('hide', 'show');
        allHeaderBtns.forEach((hb) => {
            hb.classList.remove('selected');
        });
        allHeaderBtns[index].classList.add('selected');
        allSideTexts.forEach(sideText => {
            sideText.classList.remove('selected');
        });
        allSideTexts[index].classList.add('selected');
    });
});

sendBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let privacyPolicyValidator = document.querySelector('.policyAgreeValidation');
    privacyPolicyValidator.classList.remove('show');
    let infoFirstName = document.querySelector('[name="infoFirstName"]').value;
    let infoLastName = document.querySelector('[name="infoLastName"]').value;
    let gender = document.querySelector('[name="gender"]').value;
    let birthdate = document.querySelector('[name="birthdate"]').value;
    let title = document.querySelector('[name="title"]').value;
    let employmentType = document.querySelector('[name="employmentType"]').value;
    let salary = document.querySelector('[name="salary"]').value;
    let emergencyFirstName = document.querySelector('[name="emergencyFirstName"]').value;
    let emergencyLastName = document.querySelector('[name="emergencyLastName"]').value;
    let phone = document.querySelector('[name="phone"]').value;
    let policyAgree = document.querySelector('[name="policyAgree"]').checked;
    let formObj = {
        infoFirstName,
        infoLastName,
        gender,
        birthdate,
        title,
        employmentType,
        salary,
        emergencyFirstName,
        emergencyLastName,
        phone
    }
    if (policyAgree) {
        sessionStorage.setItem('formObj', JSON.stringify(formObj));
        window.location.href = "basicFormSummary.html";
    } else {
        privacyPolicyValidator.classList.add('show');
    }
});