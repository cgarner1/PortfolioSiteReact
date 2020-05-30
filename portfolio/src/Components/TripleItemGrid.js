import React from 'react'

export function TripleItemGrid(props) {
	return (
		<div className="triple-row-grid">
			<a><div className="triple-row-item">{props.item1}</div></a>
			<a><div className="triple-row-item">{props.item2}</div></a>
			<a><div className="triple-row-item">{props.item3}</div></a>
		</div>
		);

}