import React from "react";
import {  Link } from 'react-router-dom';

require('./Home.scss');

import { Footer } from "../Footer/Footer";

export class Home extends React.Component {

	render(){

		return(
			<main className="home">
				<section className="container">
					<div className="row">

						<div className="home-content">
							
							<h1 className="animate-reveal animate-first">
								<p>
								<span>React</span> Slider for Y+S
								</p>
							</h1>

							<Link to="/task" className="btn btn-lg btn-custom animate-reveal animate-second">Check it Out !</Link>
						</div>
						
					</div>
				</section>
				 <Footer />
			</main>


		);
	}
}
