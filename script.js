// Madi Mesenbrink :P

//ID section

document.getElementById("firstPara").innerHTML += " <span class= \"tan\">This is new tan text.</span>";

// Tag name section--change width of pics to 250px

let images= document.getElementsByTagName("img");
console.log(images);

for(let image of images){
    image.width = "250";
}

// Class name section--change blue settings

let ltBlueSpans = document.getElementsByClassName("light-blue");

let medBlueSpans = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpans){
    span.style.color= "#7C9EA6";
}

for(let span of medBlueSpans){
    span.style.color= "#3C5E73";
}