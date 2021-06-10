console.log("App.js is running")

const container = document.getElementById("app")


const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value
  e.target.elements.option.value = ''
  if(option) {
    app.options.push(option)
    reRenderApp()
  }
}

const removeOptions = ()=> {
  app.options = []
  reRenderApp()
}

const pickAction = () => {
  const randomIndex = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomIndex]
  alert(option)
}



const reRenderApp = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Your options are: " : "No options" }</p>
    <button disabled={app.options.length === 0} onClick={pickAction}>What sould I do?</button>
    <button onClick={removeOptions}>Remove All</button>
    <ol>
      {
        app.options.map((option) => {
          return <li key={option}>{option}</li>
        })
      }
    </ol>
    <form onSubmit = {onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add option</button>
    </form>
  </div>
  )

  ReactDOM.render(template, container)
}

reRenderApp()
