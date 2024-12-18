document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.querySelector('.message-box textarea').value;

        if(!validateField(name, "^[А-ЯЁ][а-яё]*$")){
            alert('Введите корректное имя (только кириллица).');
            return; 
        }
        if(!validateField(email, "^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$" )){
            alert('Введите корректный адрес электронный почты.');
            return;
        }
        if(!validateField(phone, "^((\+7|7|8)+([0-9]){10})$")){
            alert('Введите корректный номер телефона');
            return;
        }
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone);
        const safeMessage =  escapeHtml(message);

        console.log('Отправляем данные:', {safeName, safeEmail, safePhone, safeMessage});

        alert('Сообщение отправлено');
    });

    function validateField(value, regex){
        return regex.test(value);
    }
    function escapeHtml(unsafe){
        return unsafe
        .replace(/&/g, "&amp")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")      
    }
});