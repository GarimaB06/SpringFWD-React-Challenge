import "../stylesheets/todolist.css";
import ListItem from "./ListItem";
import STRINGS from "../data/strings";

const initialTaskState = {
	checked: false,
	toDoString: "",
};
const ToDoList = ({ input, setInput, list, setList }) => {
	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const addListItems = () => {
		if (input.trim() !== "") {
			const initialTaskStateCopy = { ...initialTaskState };
			initialTaskStateCopy.toDoString = input;
			setList([...list, initialTaskStateCopy]);
			setInput("");
		}
	};

	const handleChecked = (index) => {
		const listCopy = [...list];
		listCopy[index].checked = !listCopy[index].checked;
		setList(listCopy);
	};

	const deleteItem = (itemIndex) => {
		const newItemList = [...list];
		newItemList.splice(itemIndex, 1);
		setList(newItemList);
	};

	const handleEditStringOnSave = (index, string) => {
		const listCopy = [...list];
		listCopy[index].toDoString = string;
		setList(listCopy);
	};

	return (
		<div className="to-do-list">
			<h1 className="title">{STRINGS.toDoList.toUpperCase()}</h1>
			<input value={input} onChange={handleInputChange} />
			<button className="button add-button" onClick={() => addListItems()}>
				{STRINGS.add}
			</button>
			<ul>
				{list.map((item, index) => (
					<ListItem
						index={index}
						handleChecked={handleChecked}
						item={item}
						deleteItem={deleteItem}
						handleEditStringOnSave={handleEditStringOnSave}
					/>
				))}
			</ul>
		</div>
	);
};
export default ToDoList;
