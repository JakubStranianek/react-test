
class App extends React. Component {
    constructor(props) {
      super(props)
    
      this.input = React.createRef();
      this.state = {
          newWho: "",
          newWat: "",
          characters: []
      }
    }
    
    handleWho = event => {
        this.setState({
            newWho: event.target.value
        })
    }

    handleWat = event => {
      this.setState({
          newWat: event.target.value
      })
  }

    handleSubmit = event => {
      if (event.key === "Enter" && this.state.newWho && this.state.newWat) {
         this.setState(state => {
        const newDude = {
          id: Math.max(...this.state.characters.map(d => d.id)) + 1,
          who: this.state.newWho,
          wat: this.state.newWat,
          cool: Math.floor(Math.random() * 100) + 1
        }

        
        return {characters: [...state.characters, newDude]}
      })
      this.resetForm()
    }
  }
    
  handleChangeCool = dude => event => {
    const cool = +event.target.value
    
    this.setState(state => {
      return {
          characters: state.characters.map(item =>
              item === dude ? { ...item, cool } : item
          )
      }
  })
    
  }


  removeDude = dude => {
      this.setState(state => {
        return {
          characters: state.characters.filter(item => item !== dude)
        }  
    })
  }

  
  resetForm = () => {

   this.setState({
    newWho: "",
    newWat: ""
   })

    this.input.current.focus()
  }

    listOfDudes = () => {
      return this.state.characters.map(dude => (

          <li key={dude.id} className="dude">
        <a className="ctrl" onClick={() => this.removeDude(dude)}>x</a>
        
        <article className={dude.cool < 10 ? "faded" : dude.cool > 50 ? "gold" : ""}>
        {dude.who}
        <span>{dude.wat}</span>
        </article>

        <input className="ctrl" type="number" onChange={this.handleChangeCool(dude)} value={dude.cool}></input>
        
        </li>
        )  
      )
    }

    componentDidMount = () => {
      fetch("http://myjson.dit.upm.es/api/bins/ck9p").then(res => res.json()).then(json => this.setState({characters: json}))
    }

    render() {
        return (
            <div>
               <ul>{this.listOfDudes()}</ul>

                <form className="add-new" onKeyPress={this.handleSubmit}>
                    <input autoFocus type="text" value={this.state.newWho} onChange={this.handleWho} ref={this.input}/>
                    <input type="text" value={this.state.newWat} onChange={this.handleWat}/>
                </form>
                <p className="preview">{this.state.newWho}</p>
                <br/>
                <small className="preview">{this.state.newWat}</small>
            </div>
        )    
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));