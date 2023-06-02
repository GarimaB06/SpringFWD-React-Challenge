import React, { useState } from "react";
import "../stylesheets/todolist.css";
import { saveEditedIcon, editIcon, deleteIcon } from "../../assets/svg-icons";

const ListItem = ({
	index,
	handleChecked,
	item,
	deleteItem,
	handleEditStringOnSave,
}) => {
	const [beingEdited, setBeingEdited] = useState(false);
	const [string, setString] = useState(item.toDoString);

	const handleEditingChange = (e) => {
		setString(e.target.value);
	};

	const saveEditedString = () => {
		handleEditStringOnSave(index, string);
		setBeingEdited(false);
	};

	return (
		<li className="list-item" key={index}>
			<input
				type="checkbox"
				className="checkbox"
				checked={item.checked}
				onChange={() => handleChecked(index)}
			/>
			{beingEdited ? (
				<input value={string} onChange={handleEditingChange}></input>
			) : (
				<div className="to-do-string">{item.toDoString}</div>
			)}
			<div>
				{beingEdited ? (
					<button className="save-edited" onClick={saveEditedString}>
						{saveEditedIcon}
					</button>
				) : (
					<button
						className="update-button"
						onClick={() => setBeingEdited(true)}
					>
						{editIcon}
					</button>
				)}
				<button className="delete-button" onClick={() => deleteItem()}>
					{deleteIcon}
				</button>
			</div>
		</li>
	);
};

export default ListItem;
