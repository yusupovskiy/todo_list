import { 
	createStore, 
	compose, 
	applyMiddleware, 
	combineReducers, 
	bindActionCreators 
} from 'redux';
import { connect} from 'react-redux';
import { save } from 'redux-localstorage-simple';

import config from './modules.json';

const ALLOWED_MODULES = config.modules;

const actions = ALLOWED_MODULES.reduce((actions, moduleName) => {
    return {
        ...actions,
        [moduleName]: require(`./${moduleName}/actions`)
    };
}, {});

const reducers = ALLOWED_MODULES.reduce((reducers, moduleName) => {
    try {
        return {
            ...reducers,
            [moduleName]: combineReducers(require(`./${moduleName}/reducers`))
        };
    } catch (err) {
        return {};
    }
}, {});

export function DI(modules = []) {
    return connect(
        makeMapStateToProps(modules.concat(['common'])),
        makeMapDispatchToProps(modules.concat(['common']))
    );
}

function makeMapStateToProps(modules) {
    return function(state) {
        let props = {};
        modules.forEach((name) => {
            props[name] = state[name];
        });
        return props;
    };
}

function makeMapDispatchToProps(modules) {
    return function(dispatch) {
        let props = {};
        modules.forEach((name) => {
            if (actions.hasOwnProperty(name) && typeof actions === 'object') {
                props[name] = bindActionCreators(actions[name], dispatch);
            }
        });
        return {
            actions: props
        };
    };
}

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(
	combineReducers(reducers),
	composeEnhancers(
		applyMiddleware(save({ namespace: 'todo-list' }))
	)
);