"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://dummyjson.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.todo;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("Todo has id ".concat(id, " has a title of ").concat(title, " is it complete: ").concat(completed));
};
