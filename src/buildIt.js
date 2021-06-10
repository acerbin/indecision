class VisiblityApp extends React.Component {
  constructor(props) {
    super(props)
    this.toggleData = this.toggleData.bind(this)
    this.state = {
      isVisible: false
    }
  }
  toggleData() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      }
    })
    //alert(this.state.isVisible)
  }
  render() {
    return (
        <div>
          <h1>Visiblity Toggle</h1>
          <button onClick={this.toggleData}>{ this.state.isVisible ? "Hide details" : "Show details" }</button>
          {this.state.isVisible && <p>This is some very important details</p>}
        </div>
    )
  }
}

ReactDOM.render(<VisiblityApp />, document.getElementById('app'))


// const container = document.getElementById("app")
// let isVisible = false;
//
// const toggleData = ()=> {
//   isVisible = !isVisible;
//   reRenderApp()
// }
//
// const reRenderApp = () => {
//   const template = (
//   <div>
//     <h1>Visiblity Toggle</h1>
//
//     <button onClick={toggleData}>{isVisible ? "Show details" : "Hide details"}</button>
//     {isVisible && <p>This is some very important details</p>}
//   </div>
//   )
//
//   ReactDOM.render(template, container)
// }
//
// reRenderApp()
