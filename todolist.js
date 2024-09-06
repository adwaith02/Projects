const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("No Task Entered");
    }
    else{
        // document.createElement() is used to create an element in HTML using JS.
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // appendChild is used to add the li to the listContainer, as it is going to be displayed there.
        listContainer.appendChild(li);

        // for displaying cross icon
        // Create a span element for the remove button
        let removeBtn = document.createElement("span");
        removeBtn.textContent = '\u00d7'; // 'x' symbol | textContent -> to add text
        removeBtn.className = "remove-btn"; // Given a Classname remove-btn
        removeBtn.onclick = function(){ // function() -> anonymous function
            li.remove();
        }
        li.appendChild(removeBtn);

        // To toggle checked class
        li.onclick = function(){
            li.classList.toggle("checked");
        };

        listContainer.appendChild(li);

        inputBox.value = "";

    }
    inputBox.value = "";
}

document.getElementById("input-box").onkeydown = function(e){
    if(e.key === 'Enter'){
        addTask();
    }
};