import React from "react"

import classNames from "classnames"

import "./Badge.scss"

console.log(classNames)

function Badge({color, click, className}) {
	return (
		< i
			role="button"
			tabIndex={0}
			onClick={() => click()
			}
			// className={`badge badge--${color} ${className}`}>
			className={
				classNames("badge", {
					[`badge--${color}`]: color,
					"active": className
				})}>
		</ i >

	)
}

export default Badge