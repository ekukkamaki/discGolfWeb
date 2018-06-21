import React from 'react'
import { observer } from 'mobx-react'
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './Header';

import Player from './Player';
import Courses from './Courses';

@withRouter
@observer
export default class App extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/players" component={Player} />
                    <Route path="/courses" component={Courses} />
                </Switch>                          
            </div>
        )
    }
}