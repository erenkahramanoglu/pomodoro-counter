//var eski bir yöntem olsada burada kullanmayı tercih ettim
var timer = document.querySelector('.timer');
var startBtn = document.querySelector('.btn-start');
var pauseBtn = document.querySelector('.btn-pause');
var stopBtn = document.querySelector('.btn-stop');

var pomodoroBtn = document.querySelectorAll('.btn-mode')[0];
var rule5217Btn = document.querySelectorAll('.btn-mode')[1];
var minutes90Btn = document.querySelectorAll('.btn-mode')[2];

var minutes = 25;
var seconds = 0;
var isRunning = false;
var interval;

pomodoroBtn.onclick = function () {
    minutes = 25;
    seconds = 0;
    timer.textContent = '25:00';
    pomodoroBtn.classList.add('active');
    rule5217Btn.classList.remove('active');
    minutes90Btn.classList.remove('active');
    stopTimer();
};

rule5217Btn.onclick = function () {
    minutes = 52;
    seconds = 0;
    timer.textContent = '52:00';
    rule5217Btn.classList.add('active');
    pomodoroBtn.classList.remove('active');
    minutes90Btn.classList.remove('active');
    stopTimer();
};

minutes90Btn.onclick = function () {
    minutes = 90;
    seconds = 0;
    timer.textContent = '90:00';
    minutes90Btn.classList.add('active');
    pomodoroBtn.classList.remove('active');
    rule5217Btn.classList.remove('active');
    stopTimer();
};

startBtn.onclick = function () {
    if (isRunning == false) {
        isRunning = true;
        interval = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    stopTimer();
                    alert('Time is up!');
                    return;
                }
                minutes = minutes - 1;
                seconds = 59;
            } else {
                seconds = seconds - 1;
            }

            var displayMinutes = minutes;
            var displaySeconds = seconds;

            if (minutes < 10) {
                displayMinutes = '0' + minutes;
            }
            if (seconds < 10) {
                displaySeconds = '0' + seconds;
            }

            timer.textContent = displayMinutes + ':' + displaySeconds;
        }, 1000);
    }
};

pauseBtn.onclick = function () {
    isRunning = false;
    clearInterval(interval);
};

stopBtn.onclick = function () {
    stopTimer();
};

function stopTimer() {
    isRunning = false;
    clearInterval(interval);
    if (pomodoroBtn.classList.contains('active')) {
        minutes = 25;
        seconds = 0;
        timer.textContent = '25:00';
    }
    if (rule5217Btn.classList.contains('active')) {
        minutes = 52;
        seconds = 0;
        timer.textContent = '52:00';
    }
    if (minutes90Btn.classList.contains('active')) {
        minutes = 90;
        seconds = 0;
        timer.textContent = '90:00';
    }
}

var goalInput = document.querySelector('.input-area input');
var addBtn = document.querySelector('.btn-add');
var goalsList = document.querySelector('.goals-box');

addBtn.onclick = function () {
    var goalText = goalInput.value;
    if (goalText != '') {
        var goalDiv = document.createElement('div');
        goalDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        goalDiv.style.padding = '15px';
        goalDiv.style.borderRadius = '10px';
        goalDiv.style.marginTop = '10px';
        goalDiv.style.display = 'flex';
        goalDiv.style.justifyContent = 'space-between';
        goalDiv.style.alignItems = 'center';

        var text = document.createElement('span');
        text.textContent = goalText;
        text.style.fontSize = '16px';

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.backgroundColor = 'red';
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.padding = '8px 15px';
        deleteBtn.style.borderRadius = '5px';
        deleteBtn.style.cursor = 'pointer';

        deleteBtn.onclick = function () {
            goalDiv.remove();
        };

        goalDiv.appendChild(text);
        goalDiv.appendChild(deleteBtn);
        goalsList.appendChild(goalDiv);

        goalInput.value = '';
    }
};

var motivationText = document.querySelector('.quote p');
var newMotivationBtn = document.querySelector('.btn-new');

var motivations = [
    'Taking a small step every day leads to great achievements!',
    'Success is the sum of small efforts repeated day in and day out.',
    'The secret of getting ahead is getting started.',
    'Don\'t watch the clock; do what it does. Keep going.',
    'Believe you can and you\'re halfway there.',
    'Your limitation is only your imagination.',
    'Great things never come from comfort zones.',
    'Dream it. Wish it. Do it.',
    'Success doesn\'t just find you. You have to go out and get it.',
    'The harder you work for something, the greater you\'ll feel when you achieve it.'
];

newMotivationBtn.onclick = function () {
    var randomNumber = Math.floor(Math.random() * motivations.length);
    motivationText.textContent = motivations[randomNumber];
};

var menuItems = document.querySelectorAll('.menu-item');
var timerBox = document.querySelector('.timer-box');
var goalsBox = document.querySelector('.goals-box');
var motivationBox = document.querySelector('.motivation-box');

menuItems[0].onclick = function () {
    timerBox.style.display = 'block';
    goalsBox.style.display = 'block';
    motivationBox.style.display = 'block';

    menuItems[0].classList.add('active');
    menuItems[1].classList.remove('active');
    menuItems[2].classList.remove('active');
    menuItems[3].classList.remove('active');
    menuItems[4].classList.remove('active');

    window.scrollTo(0, 0);
};

menuItems[1].onclick = function () {
    timerBox.style.display = 'block';
    goalsBox.style.display = 'none';
    motivationBox.style.display = 'none';

    menuItems[1].classList.add('active');
    menuItems[0].classList.remove('active');
    menuItems[2].classList.remove('active');
    menuItems[3].classList.remove('active');
    menuItems[4].classList.remove('active');

    timerBox.scrollIntoView({ behavior: 'smooth' });
};

menuItems[2].onclick = function () {
    timerBox.style.display = 'none';
    goalsBox.style.display = 'block';
    motivationBox.style.display = 'none';

    menuItems[2].classList.add('active');
    menuItems[0].classList.remove('active');
    menuItems[1].classList.remove('active');
    menuItems[3].classList.remove('active');
    menuItems[4].classList.remove('active');

    goalsBox.scrollIntoView({ behavior: 'smooth' });
};

menuItems[3].onclick = function () {
    timerBox.style.display = 'none';
    goalsBox.style.display = 'none';
    motivationBox.style.display = 'none';

    menuItems[3].classList.add('active');
    menuItems[0].classList.remove('active');
    menuItems[1].classList.remove('active');
    menuItems[2].classList.remove('active');
    menuItems[4].classList.remove('active');

    alert('Statistics page coming soon!');
};

menuItems[4].onclick = function () {
    timerBox.style.display = 'none';
    goalsBox.style.display = 'none';
    motivationBox.style.display = 'block';

    menuItems[4].classList.add('active');
    menuItems[0].classList.remove('active');
    menuItems[1].classList.remove('active');
    menuItems[2].classList.remove('active');
    menuItems[3].classList.remove('active');

    motivationBox.scrollIntoView({ behavior: 'smooth' });
};