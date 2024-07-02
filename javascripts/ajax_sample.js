let number = 0;
let data = [];
document.getElementById("btn").addEventListener("click", () => changeVideo());
const titleArea = document.getElementById("title");
const videoArea = document.getElementById("video");
const contentArea = document.getElementById("content");

function getData() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
          if(request.status == 200){
            data = JSON.parse(request.responseText);
          }
        }
    }
    request.open('GET', 'ajax.json', true);
    request.send();
}

function changeVideo() {
    if (data.length == 0) {
        getData();
    } else {
        titleArea.innerHTML = data[number].title;
        contentArea.innerHTML = data[number].content;
        videoArea.setAttribute("src", data[number].url);
        number == 2 ? number = 0 : number++;
    }
}
window.onload = changeVideo();