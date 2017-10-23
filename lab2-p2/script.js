/* global  $ */
/* global onchange */

$(document).ready(function() {
    var fruitList = $("#fruits");
    var fruits = ["Apple", "Banana", "Kiwi", "Orange", "Grape", "Strawberry"];
    for (var i = 0; i < fruits.length; i++) {
        $('#fruits').append("<li id = " + fruits[i] + ">" + fruits[i] + "</li>");
    }
    
    var basket = $("#basket");
    var newF = $("#newfruit");
    
    newF.on('input', function() {
            var fruit = newF.val();
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i] == fruit) {
                    basket.append("<li>" + fruits[i] + "</li>");
                    $('#' + fruits[i]).remove();
                    fruits[i] = null;
                }
            }
        });
    }
);


