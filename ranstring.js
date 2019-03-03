function genString(num) {
let text = "";
let possible = `?#.!£$%^&*()-=_+1234567890`;

for (let i = 0; i < num; i++)
text += possible.charAt(Math.floor(Math.random() * possible.length));
return text;
}

function randomNum(num) {
let equa = Math.floor((Math.random() * num) + 1);
return equa;
}
