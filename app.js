/* Контактная форма  ---------------------------------------------------------------- */
const form = document.forms["form"];
const button = form.elements["button"];

const inputArr = Array.from(form);
const validInputArr = [];

inputArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validInputArr.push(el);
    }
});

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}
function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.style.border = "2px solid rgb(0, 196, 0)";
        el.setAttribute("is-valid", "1");
    } else {
        el.style.border = "2px solid rgb(255, 0, 0)";
        el.setAttribute("is-valid", "0");
    }
/*     if(el.style.border === "2px solid rgb(255, 0, 0)"){
        return alert( 'ты тупой')
    } */
}

function buttonHandler(e) {
    const isAllValid = [];
    validInputArr.forEach((el) =>{
        isAllValid.push(el.getAttribute("is-valid"));
    });
    const isValid = isAllValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isValid))){
        e.preventDefault();
    }
}
/* Пллавный скролл ---------------------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Плавная прокрутка к элементу
        targetElement.scrollIntoView({
            behavior: 'smooth'  
        });
    });
});
/* --------------------------------------------------  */
/* 
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Собираем данные формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.querySelector('textarea').value;

    const newMessage = {
        name: name,
        email: email,
        phone: phone,
        message: message,
    };

    // Ваш API-ключ JSONBin
    const apiKey = '$2a$10$ngOVaDb0HuZ2D3zX6e4XLuXtrwIJ9.yTnRWo7VWXPP/xQSaS7s3tm'; // Вставьте сюда ваш API-ключ
    const binId = '6761475fad19ca34f8dc851e';

    // Сначала получаем текущие данные
    fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
        method: 'GET',
        headers: {
            'X-Master-Key': apiKey,
        },
    })
    .then(response => response.json())
    .then(data => {
        // Обновляем массив сообщений
        const currentMessages = data.record.messages || [];
        currentMessages.push(newMessage);

        // Отправляем обновлённый массив обратно в Bin
        return fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': apiKey,
            },
            body: JSON.stringify({ messages: currentMessages }),
        });
    })
    .then(response => response.json())
    .then(data => {
        alert('Сообщение успешно отправлено!');
        console.log(data);
                document.getElementById('form').reset();
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке сообщения.');
    });
}); */


/* burger */
// Получаем элементы
/* const burgerIcon = document.getElementById('burgerIcon');
const headerList = document.getElementById('headerList');

// Добавляем обработчик событий
burgerIcon.addEventListener('click', () => {
    // Переключаем класс "active" для меню
    headerList.classList.toggle('active');
}); */
const burgerIcon = document.getElementById('burgerIcon');
const burgerImage = document.getElementById('burgerImage');
const headerList = document.getElementById('headerList');

// Добавляем обработчик событий
burgerIcon.addEventListener('click', () => {
    // Переключаем класс "active" для меню
    headerList.classList.toggle('active');
    
    // Меняем иконку
    if (headerList.classList.contains('active')) {
        burgerImage.src = 'images/close.png'; // Укажите путь к иконке "Закрыть"
    } else {
        burgerImage.src = 'images/burger-menu.png'; // Возвращаем бургер-иконку
    }
});
