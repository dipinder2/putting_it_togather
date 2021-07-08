import React,{Component} from 'react';

export default class PersonCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			agecounter: props.person['age'],
			color:'black'
		}
	}

	handleAgeAndColor(){
		this.setState({
			agecounter:this.state.agecounter+1,
			color:'RED'
		})
	}
	render() {
		const {name, age, hair } = this.props.person
		return (
			<div>
				<h1>{name}</h1>
				<p>Age: {this.state.agecounter}</p>
				<p>Hair Color: {this.state.color}</p>
				<button onClick={()=>{
					this.handleAgeAndColor()
				}}>Birthday button for {name}</button>
			 </div>
		);
	}
}
