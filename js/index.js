
import { ref, get } from "firebase/database";
import { db } from "./../../config/firebase/firebaseInit";
async function getToDoData() {
	const dbRef = ref(db, "/todos");
	const dataSnapshot = await get(dbRef);
	return await dataSnapshot.val();
}
export { getToDoData };
async function appInit() {
	const appData = await getToDoData();
	// Interactive Templating
	const toDoItems = Object.values(appData).map((obj) => {
		return toDoItemTemplate(obj.todo);
	});

	// render function jsx +++ data
	// template fn() passing the data   =====> template string htmlish string

	// interactive templating
	// container
	// batch update .... to dom updates all at once
	const div = document.createElement('div');
	toDoItems.forEach((markup) => {
		div.appendChild(markup);
	});
	document.querySelector('main').append(markup);
}
import { getToDoData } from './lib/firebase/api';
let store = [];
async function appInit() {
	const toDos = await getToDoData();
	console.log(toDos);
}
appInit();
appInit();
