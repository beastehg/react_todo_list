import React from "react"
import List from "./components/List"
import {ListSvg, AddSvg} from "./components/Icons"

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
				<List items={[
					{
						icon: AddSvg(),
						name: "Добавить список"
					}
				]} />
			</div>
			<div className="todo__content">

			</div>
		</div>
	)
}

export default App