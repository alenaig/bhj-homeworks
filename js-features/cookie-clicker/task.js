const image = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");

image.onclick = function() {
    
    count.textContent ++;
    
    if(this.width == 200) {
        this.width = 100;
    }
    else this.width = 200;

}

