import React from 'react'

export function TripleItemGrid(props) {
	return (
		<div className="triple-row-grid">
			<a href="#SWE"><div className="triple-row-item">{props.item1}</div></a>
			<a href="#ML"><div className="triple-row-item">{props.item2}</div></a>
			<a href="#GD"><div className="triple-row-item">{props.item3}</div></a>
		</div>
		);

}