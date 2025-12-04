const interests = ["ライブ","ギター","旅行"];
const specialties = ["遊ぶこと","散歩すること","昼寝すること"];
const greetings = ["よろしく！","こんにちは！","仲良くしてね！"];
const button = document.querySelector("#button");
button.addEventListener("click", function () {
    const name = document.querySelector("#name").value;
    const index1 = Math.floor(Math.random() * interests.length);
    const index2 = Math.floor(Math.random() * specialties.length);
    const index3 = Math.floor(Math.random() * greetings.length);
    const interest = interests[index1];
    const specialty = specialties[index2];
    const greeting = greetings[index3];
    const message = `
    こんにちは、私の名前は${name}です。
    最近はまっているのは${interest}で、
    特技は${specialty}です。
    ${greeting}`;
    const output = document.querySelector("#output");
    output.textContent = message;
});