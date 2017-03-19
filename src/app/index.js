import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { MainHeader } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Task } from "./components/Task/Task";

class App extends React.Component {

	render() {

		return(
			<Router>
				<div>

				  <MainHeader />
				  
				  <Route exact path="/" component={Home}/>
			      <Route path="/task" component={Task}/>

			    </div>
		    </Router>
		);
	}
}

render(<App/>, window.document.getElementById("app"));

