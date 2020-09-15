const countDown = function() {
    const count = document.getElementById("timer");
    count.textContent -= 1;
    if (count.textContent == 0) {
        clearInterval(this.timer);
        alert("Вы победили в конкурсе!");
    }
}

let timer = setInterval(countDown, 1000);




