   var fruits = ["Apple", "Banana", "Kiwi", "Orange", "Grape", "Strawberry"];

function loadFruit() {
    for (var i = 0; i < fruits.length; i++) {
        var node = document.createElement("li");
        node.setAttribute("id", fruits[i]);
        var textNode = document.createTextNode(fruits[i]);
        node.appendChild(textNode);
        document.getElementById("fruits").appendChild(node);
    }
}

function moveFruit(e) {
    var fruit = "";
  
    fruit = document.getElementById("newfruit").value;
    
    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i] == fruit) {
            var node = document.createElement("li");
            var textNode = document.createTextNode(fruits[i]);
            node.appendChild(textNode);
            document.getElementById("basket").appendChild(node);
            document.getElementById("fruits").removeChild(document.getElementById(fruits[i]));
            fruits[i] = null;
        }
    }
}