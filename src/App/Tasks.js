import React from "react";

export default class Tasks extends React.Component {
	render() {
	  const tasksList = this.props.tasks.map( task => {
		return <div key={task.id}>{task.name}</div>
	  })
	  return <div>{tasksList}</div>
	}
}