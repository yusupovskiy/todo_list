import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../config/routes';

export default function MainMenu() {
	return (
		<Fragment>
			<NavLink {...routes.tasks} to={routes.tasks.path}>Tasks</NavLink>
			{'     '}
			<NavLink {...routes.tasks} to={routes.users.path}>Users</NavLink>
		</Fragment>
	);
}