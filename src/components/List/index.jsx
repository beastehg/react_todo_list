import React from "react"

// SCSS
import "./List.scss"

function List({items}) {
	return (
		<ul className="list">
			{
				items.map(({icon, name, color, active}) => (
					<li className={active ? "active" : ""}>
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