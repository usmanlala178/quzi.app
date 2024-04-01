let start_btn = document.querySelector('.start-btn');
let username = document.querySelector('#username');
let container = document.querySelector('.container');
let valid = document.querySelector('#valid');
let quiz_container = document.querySelector('.quiz-container');
let std_name = document.querySelector('.std_name');
let std_name1 = document.querySelector('.std_name1');
let result_container = document.querySelector('.result_container');
result_container.style.display = 'none';
let remarks = document.getElementById('remarks');
let emoji = document.getElementById('emoji');



start_btn.addEventListener('click', function() {
    let no_space = username.value.trim();
    let validd = no_space.split(" ").join("");
    let b_s = validd.length;
    if (b_s == "") {
        valid.innerHTML = "Name is Required";
    } else if (b_s <= 2) {
        valid.innerHTML = "Name Atleast Contain 3 or More Words!";
    } else {
        container.style.display = 'none';
        quiz_container.style.display = 'block';
        std_name.innerHTML = username.value;
        std_name1.innerHTML = username.value;
        timer = setInterval(time_counter, 1000);
    }
});

var allQs = [{
        qs: 'What is the full form of DOM?',
        answer: 'Document Object Model',
        opt1: 'Data Object Model',
        opt2: 'Document Object Model',
        opt3: 'Delete Object Model',
        opt4: 'Design Object Model'
    },
    {
        qs: `The external JavaScript file must contain the &ltscript&gt tag?`,
        answer: 'False',
        opt1: 'True',
        opt2: 'False',
        opt3: 'All of Above',
        opt4: 'None of these'
    },
    {
        qs: 'What is the full form of RAM?',
        answer: 'Random access memory',
        opt1: 'Read only memory',
        opt2: 'Random access memory',
        opt3: 'Remove all memory',
        opt4: 'Run all memory '
    }, {
        qs: 'What is 7*5 = ?',
        answer: '35',
        opt1: '35',
        opt2: '49',
        opt3: '37',
        opt4: '42'
    },
    {
        qs: 'Which is the capital city of Pakistan?',
        answer: 'Islamabad',
        opt1: 'Karachi',
        opt2: 'Lahore',
        opt3: 'Islamabad',
        opt4: 'Peshawar'
    },
    {
        qs: 'What does HTML stand for?',
        answer: 'Hyper Text Markup Language',
        opt1: 'HperLinks Markup Language',
        opt2: 'Home Tool Markup Language',
        opt3: 'Hyper Tool Markup Language',
        opt4: 'Hyper Text Markup Language'
    },
];



//

let Question = document.getElementById('Ques');
let toal_Qs = document.getElementById('total_qs');
let toal_QS = document.getElementById('total_QS');
toal_Qs.innerHTML = allQs.length;
toal_QS.innerHTML = allQs.length;
let crr_Qs_no = document.getElementById('qs_no');

let opt1 = document.querySelector('.q1');
let opt2 = document.querySelector('.q2');
let opt3 = document.querySelector('.q3');
let opt4 = document.querySelector('.q4');
Question.innerHTML = 'Q1: ' + allQs[0].qs;
opt1.innerHTML = allQs[0].opt1;
opt2.innerHTML = allQs[0].opt2;
opt3.innerHTML = allQs[0].opt3;
opt4.innerHTML = allQs[0].opt4;

//

function selected_answer() {
    let selected_ans = document.querySelectorAll('div.q');
    let next_btn = document.querySelector('.next-btn');
    for (let i = 0; i < selected_ans.length; i++) {
        selected_ans[i].onclick = function() {
            for (let j = 0; j < selected_ans.length; j++) {
                if (selected_ans[j].classList.contains('selected_answer')) {
                    selected_ans[j].classList.remove('selected_answer');
                }
            }
            selected_ans[i].classList.add('selected_answer');
            next_btn.disabled = false;
            next_btn.style.opacity = .9;
        }
    }
    next_btn.disabled = true;
    next_btn.style.opacity = .3;
}
selected_answer();

let Next_btn = document.querySelector('.next-btn');
let a = 0;
crr_Qs_no.innerHTML = a + 1;
let r_score = 0;
let wr_score = 0;
let a_q = 0;
let Percentage = document.getElementById('percentage');
//


Next_btn.addEventListener('click', function() {
    Next_btn.disabled = true;
    Next_btn.style.opacity = .3;
    let user_answer = document.querySelector('div.selected_answer').innerHTML;
    let right_ans = document.getElementById('right_ans');
    let wrong_ans = document.getElementById('wrong_ans');
    let attemd_qs = document.getElementById('attemd_qs');

    if (user_answer == allQs[a].answer) {
        a_q++;
        r_score++;
        right_ans.innerHTML = r_score;
        attemd_qs.innerHTML = a_q;
    } else if (user_answer != allQs[a].answer) {
        a_q++;
        wr_score++;
        wrong_ans.innerHTML = wr_score;
        attemd_qs.innerHTML = a_q;
    }
    cal();

    // **********************

    let selected_a = document.querySelectorAll('div.q');
    for (let i = 0; i < selected_a.length; i++) {
        selected_a[i].classList.remove('selected_answer');
    }
    //
    if (a < allQs.length - 1) {
        a++;
        let b = a + 1
        Question.innerHTML = 'Q' + b + ': ' + allQs[a].qs;
        opt1.innerHTML = allQs[a].opt1;
        opt2.innerHTML = allQs[a].opt2;
        opt3.innerHTML = allQs[a].opt3;
        opt4.innerHTML = allQs[a].opt4;
        crr_Qs_no.innerHTML = a + 1;

    } else {
        a = 0;
        let b = a + 1
        Question.innerHTML = 'Q' + b + ': ' + allQs[a].qs;
        opt1.innerHTML = allQs[a].opt1;
        opt2.innerHTML = allQs[a].opt2;
        opt3.innerHTML = allQs[a].opt3;
        opt4.innerHTML = allQs[a].opt4;
        crr_Qs_no.innerHTML = a + 1;
        quiz_container.style.display = 'none';
        result_container.style.display = 'block';

        clearInterval(timer);
        sec = 60;
        min = 01;
        document.getElementById('sec').innerHTML = "60 Mins";
        document.getElementById('min').innerHTML = "02 Sec";
    }
    // ***************
});


function cal() {
    let perc = r_score * 100 / allQs.length;
    let s = Math.floor(perc);
    percentage.innerHTML = s + "%";
    if (perc >= 80) {
        remarks.innerHTML = "Congractulations!";
        remarks.style.color = 'green';
        emoji.src = "smile.png";
    } else if (perc >= 70) {
        remarks.innerHTML = "Well Done!";
        remarks.style.color = 'green';
        emoji.src = "smile.png";
    } else if (perc >= 50) {
        remarks.innerHTML = "Good. Keep it Up!";
        remarks.style.color = 'orange';
        emoji.src = "smile.png";
    } else {
        remarks.innerHTML = "Bad Luck! Try Again";
        remarks.style.color = 'red';
        emoji.src = "sad.png";
    };
}


//

let try_again = document.querySelector('.try_again');
try_again.addEventListener('click', tryagain);

function tryagain() {
    quiz_container.style.display = 'block';
    result_container.style.display = 'none';
    r_score = 0;
    wr_score = 0;
    right_ans.innerHTML = 0;
    wrong_ans.innerHTML = 0;
    s = 0;
    percentage.innerHTML = s + "%";
    sec = 60;
    min = 01;
    document.getElementById('sec').innerHTML = "60 Sec";
    document.getElementById('min').innerHTML = "02 Mins";
    a_q = 0;
    attemd_qs.innerHTML = a_q;
    timer = setInterval(time_counter, 1000);
};
//

let sec = 60;
let min = 01;
let timer;

function time_counter() {
    sec--;
    if (sec < 10) {
        document.getElementById('sec').innerHTML = "0" + sec + " Sec";
    } else {
        document.getElementById('sec').innerHTML = sec + " Sec";
    }
    if (sec <= 0) {
        sec = 60;
        min--;
    }
    if (sec === 0 || min === 00) {
        document.getElementById('sec').style.color = 'red';
    }
    if (min === -1) {
        clearInterval(timer);
        cal();
        a = 0;
        let b = a + 1
        Question.innerHTML = 'Q' + b + ': ' + allQs[a].qs;
        opt1.innerHTML = allQs[a].opt1;
        opt2.innerHTML = allQs[a].opt2;
        opt3.innerHTML = allQs[a].opt3;
        opt4.innerHTML = allQs[a].opt4;
        crr_Qs_no.innerHTML = a + 1;
        let selected_a = document.querySelectorAll('div.q');
        for (let i = 0; i < selected_a.length; i++) {
            selected_a[i].classList.remove('selected_answer');
        }
        quiz_container.style.display = 'none';
        result_container.style.display = 'block';
        Next_btn.disabled = true;
        document.getElementById('sec').style.color = '#fff';
    }
    if (min < 10) {
        document.getElementById('min').innerHTML = "0" + min + " Mins";
    } else {
        document.getElementById('min').innerHTML = min + " Mins";
    }
}