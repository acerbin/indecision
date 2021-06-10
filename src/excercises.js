class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.addOne = this.addOne.bind(this)
    this.lessOne = this.lessOne.bind(this)
    this.reset = this.reset.bind(this)
    this.state = {
      count: props.count
    }
  }
  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  lessOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  reset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render(){
    return(
          <div>
            <h1>Count is: {this.state.count}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.lessOne}>-1</button>
            <button onClick={this.reset}>Reset</button>
          </div>
    )
  }

}

Counter.defaultProps = {
  count: 5
}

ReactDOM.render(<Counter />, document.getElementById('app'))


// let count = 0
// const addOne = () => {
//   count ++
//   render();
// }
//
// const lessOne = () => {
//   count --
//   render()
// }
//
// const reset = () => {
//   count = 0
//   render()
// }
//
// const render = () => {
//   const template2 = (
//     <div>
//       <h1>Count is: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={lessOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
//   ReactDOM.render(template2, container)
//
// }
//
// render()
