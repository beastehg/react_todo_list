import React from "react"

// SCSS
import "./List.scss"

function List({items, itemIsRemovable}) {
	return (
		<ul className="list">
			{
				items.map(({icon, name, color, active}, index) => (
					<li key={index} className={active ? "active" : ""}>
						<i>
							{icon || <i className={`badge badge--${color}`}></i>}
						</i>
						<span>{name}</span>
					</li>
				))
			}
		</ul>
	)
}

export default List