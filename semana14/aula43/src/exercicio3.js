"use strict";
exports.__esModule = true;
function exercicio3(post, autor) {
    var filteredArray = post.filter(function (post) {
        if (post.autor === autor) {
            return post;
        }
    });
    console.log("exercicio 3");
    console.log(filteredArray);
}
exports.exercicio3 = exercicio3;
