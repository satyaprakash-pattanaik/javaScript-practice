let a = 0;
const display = document.getElementById("count");
const bton = document.getElementById("countbtn");

bton.addEventListener('click', () => {
    a++;
    display.textContent = `Count : ${a}`;
});
