

/*  Создание объекта, с методами SetMod и SetValue.   SetMod - создание анимации, путем добавления класса с анимацией элементу с классом 'progress__circle_yellow'. 
    SetValue - установка значения высчитанное по формуле "pct = ((100 - val) / 100) * c" , где val = значение введеное пользователем,
    а c = длина нашего круга, свойству stroke-dashoffset элемента с id 'progress__circle_yellow'. */

var progress = {
    setMod: function(anim, value) {
        var cir = document.getElementsByClassName('progress__circle_yellow');
        if (anim == 'animated' && value == 'yes') {
            cir[0].classList.add('progress__animated');
        } else {
            if (anim == 'animated' && value == '') {
                cir[0].classList.remove('progress__animated');
            } else {
                alert('Неверные параметры');
            }
        }
    },
    setValue: function(value) {
        var val = value;
        if (val < 0) { val = 0;}
        if (val > 100) { val = 100;}
        document.getElementsByClassName('progress__checkbox-percent')[0].value = val;
        var circle = document.getElementsByClassName('progress__circle_yellow');
        var r = circle[0].getAttribute('r');
        var c = Math.PI * (r * 2);
        var pct = ((100 - val) / 100) * c;
        circle[0].style.strokeDashoffset = pct;
    }

}

/*  Функция проверки введенного значения пользователем, если оно больше 100 , то заменяеся на максимально-возможное значение , тоесть '100'.
    Если введенное значение меньше 0 , то заменяется на наименьшее, тоесть '0'  */
function valid(object) {
    if (object.value > 100) object.value = 100;
    if (object.value < 0) object.value = 0;
}

/*  Фиксирование изменения значения Value и вызов функции, которая использует метод progress.setValue со значением Value.  */

document.getElementsByClassName('progress__checkbox-percent')[0].onchange = function() {
    var val = parseInt(this.value);
    progress.setValue(val);
}

/*  Фиксирование изменения чекбокса Animation и если он включен , то вызываем метод setMod объекта progress с аргументами 'animated', 'yes'. 
    Если он выключен, вызываем метод setMod объекта progress с аргументами 'animated', ''. */

var checkAnim = document.getElementById('progress__checkbox-animate');
checkAnim.onclick = function() {
    if (checkAnim.checked == true) {
        progress.setMod('animated', 'yes');
    } else {
        progress.setMod('animated', '');
    }
}

/*  Фиксирование изменения чекбокса Hidden и если он включен , скрываемм блок с id 'progress__block' путём добавления ему
    свойства 'visibility' со значением 'hidden', если он выключен, то изменяем это значение на 'visible' */

var checkHide = document.getElementById('progress__checkbox-hide');
checkHide.onclick = function() {
    if (checkHide.checked == true) {
        document.getElementsByClassName('progress__block')[0].style.visibility = 'hidden';
    } else {
        document.getElementsByClassName('progress__block')[0].style.visibility = 'visible';
    }
}