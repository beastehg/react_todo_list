/* eslint-disable no-unneeded-ternary */
import React from "react"
import classNames from "classnames"

import Badge from "../Badge"

// SCSS
import "./List.scss"

function List({items, itemIsRemovable, onShowPopup}) {
	return (
		<ul
			className="list"
			onClick={
				onShowPopup
					? () => onShowPopup()
					: false}>
			{
				items.map(({icon, name, color, active, className}, index) => (
					// <li key={index} className={active ? "active" : `${className}`}>
					<li
						key={index}
						className={
							classNames(className, {
								active: active
							})
						}>
						{icon ? icon : <Badge color={color} />}
						<span>{name}</span>
					</li>
				))
			}
		</ul >
	)
}

export default List