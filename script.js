window.addEventListener ("mousemove", function (dets) {
    lerp.style.display = "initial";
    document.querySelector ("#lerp").style.transform = `translate(${dets.clientX-160}px, ${dets.clientY-81}px)`
})

document.querySelector ("#img1").addEventListener ("mousemove", function () {
    lerp.style.width = "60px";
    lerp.style.height = "60px";
    lerp.style.backgroundColor = "white"; 
})

document.querySelector ("#img1").addEventListener ("mouseout", function () {
    lerp.style.width = "25px";
    lerp.style.height = "25px";
    lerp.style.backgroundColor = "black";
    // lerp.style.border = "1px solid black" 
})