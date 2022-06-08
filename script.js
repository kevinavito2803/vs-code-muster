// var button = document.getElementsByTagName("button") [0];

// button.addEventListener ("click", function(){
//     console.log("Click!!!!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }
}

function addListAfterEnter(event){
     {
        if (inputLenght() > 0 && event.which === 13) {
          createListElement();
        }
      } 

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress",addListAfterEnter );
