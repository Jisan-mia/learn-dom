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
	const editInputElm = document.createElement("input");
	const editBtnElm = document.createElement("button");
	const deleteBtnElm = document.createElement("button");

	labelElm.innerText = todo;
	checkbox.type = "checkbox";
	editInputElm.type = "text";
	editBtnElm.innerText = "Edit";
	editBtnElm.className = "btn edit-btn";
	deleteBtnElm.innerText = "Delete";
	deleteBtnElm.className = "btn delete-btn";

	liElem.appendChild(checkbox);
	liElem.appendChild(labelElm);
	liElem.appendChild(editInputElm);
	liElem.appendChild(editBtnElm);
	liElem.appendChild(deleteBtnElm);

	return liElem;
};

let addTodo = function (e) {
	e.preventDefault();

	let liElem = createTodo(todoInput.value);

	activeTodoLists.appendChild(liElem);
	todoInput.value = "";

	// bind the new list item to the activeTodo list
	bindActiveTodoLists(liElem, completeTodo, editTodo, deleteTodo);
};

let completeTodo = function () {
	let liElem = this.parentNode;

	// remove edit btn
	let editBtn = liElem.querySelector(".edit-btn");
	editBtn.remove();

	// remove edit mode on complete todos
	if (liElem.classList.contains("editMode")) {
		liElem.className = "";
	}

	completeTodoLists.appendChild(liElem);

	bindCompleteTodoLists(liElem, deleteTodo, inCompleteTodo);
};

let inCompleteTodo = function () {
	let liElem = this.parentNode;
	let deleteBtn = liElem.querySelector(".delete-btn");
	let editBtn = document.createElement("button");
	editBtn.innerText = "Edit";
	editBtn.className = "btn edit-btn";
	liElem.insertBefore(editBtn, deleteBtn);

	activeTodoLists.appendChild(liElem);
	bindActiveTodoLists(liElem, completeTodo, editTodo, deleteTodo);
};

let editTodo = function () {
	let liElem = this.parentNode;

	let editInput = liElem.querySelector("input[type=text]");
	let label = liElem.querySelector("label");
	let containsClass = liElem.classList.contains("editMode");

	//If class of the parent is .editmode
	if (containsClass) {
		//switch to .editmode
		//label becomes the inputs value.
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}

	//toggle .editmode on the parent.
	liElem.classList.toggle("editMode");
};

let deleteTodo = function () {
	let liElem = this.parentNode;
	let ul = liElem.parentNode;
	ul.removeChild(liElem);
};

let bindActiveTodoLists = function (
	todoItem,
	checkboxClick,
	editBtnClick,
	deleteClick
) {
	let checkbox = todoItem.querySelector('input[type="checkbox"]');
	checkbox.onchange = checkboxClick;
	let editBtn = todoItem.querySelector(".edit-btn");
	editBtn.onclick = editBtnClick;
	let deleteBtn = todoItem.querySelector(".delete-btn");
	deleteBtn.onclick = deleteClick;
};

let bindCompleteTodoLists = function (
	todoItem,
	deleteButtonClick,
	unCheckClick
) {
	let deleteBtn = todoItem.querySelector(".delete-btn");
	deleteBtn.onclick = deleteButtonClick;

	let checkbox = todoItem.querySelector("input[type=checkbox]");
	checkbox.onchange = unCheckClick;
};

for (let i = 0; i < activeTodoLists.children.length; i++) {
	bindActiveTodoLists(
		activeTodoLists.children[i],
		completeTodo,
		editTodo,
		deleteTodo
	);
}

for (let i = 0; i < completeTodoLists.children.length; i++) {
	bindCompleteTodoLists(
		completeTodoLists.children[i],
		deleteTodo,
		inCompleteTodo
	);
}

submitForm.addEventListener("submit", addTodo);
