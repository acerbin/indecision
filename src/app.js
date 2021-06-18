class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: props.options
    }
    this.clearOptions = this.clearOptions.bind(this)
    this.chooseOption = this.chooseOption.bind(this)
    this.addOption = this.addOption.bind(this)
  }
  clearOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  chooseOption() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomIndex])
  }
  addOption(option) {
    if(!option) {
      return "Add a valid option"
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option is already defined"
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })

  }
  render() {
    const subtitle = "Leave your life in the hands of a computer!"
    // const options = ["Option one", "Option two", "Option three"]
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action optionsAbility={this.state.options.length > 0} chooseOption = {this.chooseOption}/>
        <Options options={this.state.options} clearOptions={this.clearOptions} />
        <AddOption addOption={this.addOption}/>
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Indecision"
}


const Action = (props) => {
  return (
    <div>
      <button
      className = 'btn btn-large btn-outline-dark'
      onClick={props.chooseOption}
      disabled={!props.optionsAbility}
      > What should I do </button>
    </div>
  )
}

const Option = (props) => {
  return (
    <li className="option">
      {props.optionText}
    </li>
  )
}


const Options = (props) => {
  return (
    <div>
      <button className="btn btn-large btn-dark" onClick={props.clearOptions}>Clear Options</button>
      <ul>
      {
        props.options.map((option) => {
          return <Option key={option} optionText={option} />
        })
      }
      </ul>
    </div>
  )
}


class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleNewOption = this.handleNewOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleNewOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    e.target.elements.option.value = ''
    const error = this.props.addOption(option)
    this.setState(() => {
      return {
        error
      }
    })
  }
  render() {
    return (
      <div>
        <h3>
          Add Options:
        </h3>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.handleNewOption}>
          <input type="text" name="option"/>
          <button className="btn btn-large btn-dark">Add option</button>
        </form>
      </div>
    )
  }
}

const placeholder = document.getElementById("app")



ReactDOM.render(<IndecisionApp />, placeholder)
