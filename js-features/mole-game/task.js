const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const hole = document.getElementById("hole");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}


for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);
    hole.onclick = function() {
        hole.classList.contains("hole_has-mole") ? dead.textContent ++ : lost.textContent ++;
        
        if (dead.textContent == 10) {
            alert("Заслуженная победа!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    
        if (lost.textContent == 5) {
            alert("Не повезло.. Попробуй ещё раз!");
            dead.textContent = 0;
            lost.textContent = 0;
        }   
    }
}


