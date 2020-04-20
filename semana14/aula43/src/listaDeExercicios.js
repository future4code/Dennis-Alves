"use strict";
exports.__esModule = true;
var exercicio1_1 = require("./exercicio1");
var exercicio2_1 = require("./exercicio2");
var exercicio3_1 = require("./exercicio3");
var exercicio4_1 = require("./exercicio4");
var array = [2, 3, 4, 5, 6, 7, 8];
var post1 = {
    autor: "jaum", post: 'oi'
}, post2 = {
    autor: 'jaum', post: 'oieee'
}, post3 = {
    autor: 'zé', post: 'oi sussa?'
}, post4 = {
    autor: 'zé', post: 'oi bl?'
}, post5 = {
    autor: 'jaum', post: 'tarrrde!'
};
var arrayPost = [post1, post2, post3, post4, post5];
exercicio1_1.exercicio1(2, 3);
exercicio2_1.exercicio2(array);
exercicio3_1.exercicio3(arrayPost, "zé");
exercicio4_1.exercicio4(1453, "");
