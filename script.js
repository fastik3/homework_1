const student = "Уткин Денис Алексеевич";

document.getElementById("student").innerHTML = student;


let scores_amount = 2
let scores = []
let msg = "Введите счет команды"

alert('Вводите счет таким образом: число:число, например: 1:1')

for (let command = 1; command <= scores_amount; command++) {
    score = prompt(msg).split(':')
    scores.push(Number(score[0]), Number(score[1]))
    msg = 'Введите предполагаемый счет команды: '
}

if ((scores[0] == scores[2]) && (scores[1] == scores[3])) {
    alert("Счёт был угадан верно!")
}
else if (((scores[0] < scores[1]) && (scores[2] < scores[3])) || (scores[0] > scores[1]) && (scores[2] > scores[3]) || ((scores[0] == scores[1]) && (scores[2] == scores[3]))) {
    alert('Счёт не угадали, но исход угадали!')
}

else {
    alert("Ни счёта, ни исхода не угадали")
}