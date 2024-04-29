#! /usr/bin/env-node
import inquirer from "inquirer";
console.log("\n*************TO-DO LIST*************\n");
let todos = [];
let condition = true;
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: 'list',
            message: 'Select an operation',
            name: 'select',
            choices: ['Add', 'Update', 'View', 'Delete', 'Exit']
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in To-do list:",
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log("\nTASK LIST, LET'S MAKE IT HAPPEN!!!\n");
            console.log(todos);
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: 'select item for update',
                name: 'todo',
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in To-do list:",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: 'select item for update',
                name: 'todo',
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
        if (ans.select == "Exit") {
            console.log("Task List Complete. Goodbye!");
            process.exit(0);
        }
    } while (true);
}
createTodo(todos);
