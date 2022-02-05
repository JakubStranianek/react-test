class App extends React. Component {
    constructor(props) {
      super(props)
    
      this.state = {
          dude: "Marceline the Vampire",
          characters: [
                {
                  "id": 1,
                  "who": "Finn the Human",
                  "wat": "A silly kid who wants to become a great hero one day.",
                  "cool": 9
                },
                {
                  "id": 2,
                  "who": "Jake the Dog",
                  "wat": "Finn's best friend is a wise, old dog with a big heart.",
                  "cool": 42
                },
                {
                  "id": 3,
                  "who": "Ice King",
                  "wat": "Armed with a magic crown and an icy heart.",
                  "cool": 0
                },
                {
                  "id": 4,
                  "who": "Princess Bubblegum",
                  "wat": "A millionaire nerd enthusiast.",
                  "cool": 24
                },
                {
                  "id": 5,
                  "who": "Marcy the Vampire",
                  "wat": "Marceline is a wild rocker girl.",
                  "cool": 9
                }
              ]
      }
    }
    
    handleChange = event => {
        this.setState({
            dude: event.target.value
        })
    }
    
    render() {
    const dudes = this.state.characters.map(dude => <li key={dude.id}>{dude.who}</li>);

        return (
            <div>
                <ul>{dudes}</ul>

                <form className="add-new">
                    <input type="text" value={this.state.dude} onChange={this.handleChange} />
                </form>
                <p className="preview">{this.state.dude}</p>
            </div>
        )    
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));