import React from "react";
import Projects from './Projects'
import Tasklists from './Tasklists'
import Tasks from './Tasks'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [],
      tasklists: [],
      tasks: []
    }
  }

  async componentDidMount() {
    const projectsResponse = await fetch('https://app.paymoapp.com/api/projects', {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    })

    const projects = (await projectsResponse.json()).projects

    this.setState({projects})

    const tasklistsResponse = await fetch('https://app.paymoapp.com/api/tasklists', {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    })

    const tasklists = (await tasklistsResponse.json()).tasklists

    this.setState({tasklists})

    const tasksResponse = await fetch('https://app.paymoapp.com/api/tasks', {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      }, 
    })

    const tasks = (await tasksResponse.json()).tasks

    this.setState({tasks})
  }
  
  render() {
      return ([<Projects projects={this.state.projects}/>,
        <Tasklists tasklists={this.state.tasklists}/>,
      <Tasks tasks={this.state.tasks}/>])
  }
}
export default App;
