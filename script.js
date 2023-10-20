const color = ["rgb(253, 91, 148)","rgb(255, 255, 255)","rgb(29, 194, 177)" ,"rgb(243, 108, 25)", "rgb(255, 201, 4)", "rgba(2, 48, 185, 0.932)", "rgba(224, 5, 5, 0.906)"]
let colorIndex = 0;

function changeBackground(){
    const scrollY  = window.scrollY 
    const threshold = 500

    if(scrollY > threshold){
        const colorIndex = Math.floor((scrollY + threshold) / 50) % color.length;
        document.body.style.backgroundColor = color[colorIndex];
    }
}

window.addEventListener('scroll', changeBackground);