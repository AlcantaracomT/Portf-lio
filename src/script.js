let time = 2000, 
    currenImageIndex = 0,
    images = document
                 .querySelectorAll("#slider img")
    max = images.length;
   
function nextImage(){
    
    images[currenImageIndex]
        .classList.remove("mySlides")

    currenImageIndex++

    if(currenImageIndex >= max)
        currenImageIndex = 0

    images[currenImageIndex]
        .classList.add("mySlides")
}

function start(){
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)