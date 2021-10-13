window.addEventListener('load', function () {
    let formObj = JSON.parse(sessionStorage.getItem('formObj'));

    for (const [key, value] of Object.entries(formObj)) {
        document.querySelector(`.${key}`).innerHTML = value;
    }
});