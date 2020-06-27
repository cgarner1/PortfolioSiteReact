import React from 'react'
import {HashLink as Link} from "react-router-hash-link"

export function TripleItemGrid(props) {
	return (
		<div className="triple-row-grid">
			<Link to="/#SWE"><div className="triple-row-item">{props.item1}</div></Link>
			<Link to="/#ML"><div className="triple-row-item">{props.item2}</div></Link>
			<Link to="/#GD"><div className="triple-row-item">{props.item3}</div></Link>
		</div>
		);

}