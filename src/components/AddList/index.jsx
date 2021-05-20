import React, {useState} from "react"
import {AddSvg, CloseSvg} from "../Icons"
import List from "../List/index.jsx"
import Badge from "../Badge"

import "./AddList.scss"


function AddList({colors}) {
	const [visiblePopup, setVisiblePopup] = useState(false)
	const [selectedColor, setSelectColor] = useState(colors[0].id)
	console.log(colors)

	return (
		<div className="add-list">
			<List
				items={[
					{
						className: "list__add-button",
						icon: AddSvg(),
						name: "Добавить список"
					}
				]}
				onShowPopup={() => setVisiblePopup(true)}
			/>
			{visiblePopup && <div className="add-list__popup">
				<div
					className="add-list__popup-close-btn"
					role="button"
					tabIndex={0}
					onClick={() => setVisiblePopup(false)}>
					{CloseSvg()}
				</div>
				<input
					className="field"
					type="text"
					placeholder="Название списка"
				/>
				<div className="add-list__popup-colors">
					{
						colors.map(({name, id}) => (
							<Badge
								color={name}
								click={() => setSelectColor(id)}
								className={selectedColor === id && "active"}
								key={id} />
						))
					}
				</div>
				<button className="button" type="button">
					Добавить
				</button>
			</div>}
		</div>
	)
}

export default AddList