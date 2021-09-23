import { Switch, Route } from 'react-router-dom';

export default function Menu({ routes }) {
    return (
        <div>
            <Switch>
                {routes && routes.map((route, i) => (
                    <Route key={i} path={route.path} component={route.component} />
                ))}
            </Switch>
        </div>
    )
};