
  /*     */


/*  Создание объекста, с методами SetMod и SetValue.   SetMod - создание анимации, пумем добавления класса с анимацией тегу 'circle'. 
    SetValue - установка значения высчитанное по формуле "pct = ((100 - val) / 100) * c" , где val = значение введеное пользователем,
    а c = длина нашего круга, свойству stroke-dashoffset тега 'circle'. */

var progress = {
    setMod: function(anim, value) {
        var cir = document.getElementsByTagName('circle');
        if (anim == 'animated' && value == 'yes') {
            cir[0].classList.add('animated');
            cir[1].classList.add('animated');

        } else {
            cir[0].classList.remove('animated');
            cir[1].classList.remove('animated');

        }
    },
    setValue: function(value) {
        var val = value;
        var circle = document.getElementById('bar');
        if (isNaN(val)) {
            val = 100;
        } else {
            var r = circle.getAttribute('r');
            var c = Math.PI * (r * 2);

            if (val < 0) { val = 0; }
            if (val > 100) { val = 100; }

            var pct = ((100 - val) / 100) * c;

            circle.style.strokeDashoffset = pct;
        }
    }
}

/*  Фиксирование изменения значения Value и вызов функции, которая использует метод progress.setValue со значением Value.  */

document.getElementById('percent').onchange = function() {
    var val = parseInt(document.getElementById('percent').value);
    progress.setValue(val);
}

/*  Фиксирование изменения чекбокса Animation и если он включен , то запускаем метод progress.setMod() с параметрами 'animated' и 'yeas',
    если он выключен , то второй параметр '' */

var checkAnim = document.getElementById('check_animate');
checkAnim.onclick = function() {
    if (checkAnim.checked == true) {
        progress.setMod('animated', 'yes');
    } else {
        progress.setMod('animated', '');
    }
}

/*  Фиксирование изменения чекбокса Hidden и если он включен , скрываемм блок с id 'main_progress_block' путем добавления свойства 'hidden',
    если выключен , то меняем это свойство на 'visible' */

var checkHide = document.getElementById('check_hide');
checkHide.onclick = function() {
    if (checkHide.checked == true) {
        document.getElementById('main_progress_block').style.visibility = 'hidden';
    } else {
        document.getElementById('main_progress_block').style.visibility = 'visible';
    }
}