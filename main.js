#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in todos?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more ?",
            defaul: "true"
        }
    ]);
    todos.push(addTask.todo);
    console.log(todos);
    condition = addTask.addmore;
}
