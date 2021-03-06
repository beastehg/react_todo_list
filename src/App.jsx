import React from "react"
import List from "./components/List"
import {ListSvg} from "./components/Icons"
import AddList from "./components/AddList"

// Assets
import dataBase from "./assets/db.json"


function App() {
	return (
		<div className="todo">
			<div className="todo__sidebar">
				<List items={[
					{
						icon: ListSvg(),
						name: "Все задачи",
						active: true
					}
				]} />
				<List
					items={[
						{
							color: "green",
							name: "Покупки 1"
						},
						{
							color: "blue",
							name: "Покупки 2"
						},
						{
							color: "pink",
							name: "Покупки 3"
						},
					]}
					itemIsRemovable />
				<AddList
					colors={dataBase.colors}
				/>
			</div>
			<div className="todo__content">

			</div>
		</div>
	)
}

export default App