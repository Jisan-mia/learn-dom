/*
 * Title: TODO Application
 * Description: It's kinda todo app where user can insert there todo, complete them, delete them
 * Author: Jisan Mia
 * Date: 06/04/21
 *
 */
//finding elements
const todoInput = document.querySelector("#todoInput");
const submitForm = document.querySelector("form");
const activeTodoLists = document.querySelector(".active-todo-lists");
const completeTodoLists = document.querySelector(".complete-todo-lists");

// funcitons for todo functionality
let createTodo = function (todo) {
	const liElem = document.createElement("li");
	const checkbox = document.createElement("input");
	const labelElm = document.createElement("label");
	const editBtnElm = document.createElement("button");

	labelElm.innerText = todo;
	checkbox.type = "checkbox";
	editBtnElm.innerText = "Edit";
	editBtnElm.className = "btn edit-btn";

	liElem.appendChild(checkbox);
	liElem.appendChild(labelElm);
	liElem.appendChild(editBtnElm);

	return liElem;
};

let addTodo = function (e) {
	e.preventDefault();

	let liElm = createTodo(todoInput.value);

	activeTodoLists.appendChild(liElm);
	todoInput.value = "";

	// bind the new list item to the activeTodo list
	bindActiveTodoLists(liElm, completeTodo);
};

let completeTodo = function () {
	let liElm = this.parentNode;

	let deleteBtnElm = document.createElement("button");
	deleteBtnElm.innerText = "Delete";
	deleteBtnElm.className = "delete-btn btn";

	liElm.appendChild(deleteBtnElm);

	let checkbox = liElm.querySelector('input[type="checkbox"]');
	checkbox.remove();
	let editBtn = liElm.querySelector(".edit-btn");
	editBtn.remove();

	completeTodoLists.appendChild(liElm);

	bindCompleteTodoLists(liElm, deleteTodo);
};

let deleteTodo = function () {
	let liElm = this.parentNode;
	let ul = liElm.parentNode;
	ul.removeChild(liElm);
};

let bindActiveTodoLists = function (todoItem, checkboxClick) {
	let checkbox = todoItem.querySelector('input[type="checkbox"]');

	checkbox.onchange = checkboxClick;
};

let bindCompleteTodoLists = function (todoItem, deleteButtonClick) {
	let deleteBtn = todoItem.querySelector(".delete-btn");
	deleteBtn.onclick = deleteButtonClick;
};

for (let i = 0; i < activeTodoLists.children.length; i++) {
	bindActiveTodoLists(activeTodoLists.children[i], completeTodo);
}

for (let i = 0; i < completeTodoLists.children.length; i++) {
	bindCompleteTodoLists(completeTodoLists.children[i], deleteTodo);
}

submitForm.addEventListener("submit", addTodo);
