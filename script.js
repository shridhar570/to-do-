const inputbox = document.getElementById("input-box");
const licontainer = document.getElementById("list-container");

 function addtask() {
    if(inputbox.value === '') {
        alert("you must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        licontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();
}

licontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false)

function savedata() {
    localStorage.setItem("data", licontainer.innerHTML);
}

function showtask() {
    licontainer.innerHTML = localStorage.getItem("data");
}

showtask();