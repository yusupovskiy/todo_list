import React from 'react';

export default function List(props) {
	return (
		<ul>
			{props.list.map(el => (
				<li key={el.id}>{el.name}</li>
			))}
		</ul>
	);
}