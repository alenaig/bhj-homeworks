const image = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let firstClicked = new Date().getTime();

image.onclick = function() {
    
    count.textContent ++;

    if(this.width == 200) {
        this.width = 100;
    }
    else this.width = 200;

    let lastClicked = new Date().getTime();
    speed.textContent = (lastClicked - firstClicked) / 1000 ;
}


