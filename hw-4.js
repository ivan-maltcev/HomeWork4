//Задание 1
for(let i = 0; i < 2; i++)
    alert('Привет');

//Задание 2
for(let i = 1; i <= 5; i++)
    alert(i);

//Задание 3
for(let i = 7; i <= 22; i++)
    alert(i);

//Задание 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for(let name in obj)
    alert(`${name} - зарплата ${obj[name]} долларов`);

//Задание 5
let n = 1000;
let num = 0;
while(n >= 50) {
    n = n / 2;
    num++;
}
alert(`Полученное число: ${n}`);
alert(`Количество итераций: ${num}`);

//Задание 6
const firstFriday = 3;
for(let day = 1; day <= 31; day++) {
    if ((day - firstFriday) % 7 === 0) {
        alert(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    }
}