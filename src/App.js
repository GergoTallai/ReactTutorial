import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';
import React, {Component} from 'react'; //class használat
//import React, {useState} from 'react'; //hook használat. UseState kezeli a függvényalapú komponenseket!
/*
Index.js-ben található a hivatkozás a renderelésre és az "APP"-ra.
*/

/* HOOK HASZNÁLAT
const App = props => {

  const [aktualisState, ujState] = useState({ //Mindig két értéket ad vissza a UseState
    //Speciális objektum a state, foglalt kulcsszó, ezzel adható meg értékek
    persons: [
      {name: "Balázs", age: "22"},
      {name: "János", age: "32"},
    ],
    masikState: 'másik state'
  });

  //Kattintás kezelés
  const nameChangeHander = ()=> {
    //NE HASZNÁLD!!! this.state.persons[0].name = "Jakab"
    ujState({
      persons: [
        {name: "Jakab", age: "99"},
        {name: "Karcsi", age: "85"},
      ]
    }); 
  }

 return( //Mindig kell return
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Party hard!</p>
          <button onClick={nameChangeHander}>Katt ide</button> 
          <Person name={aktualisState.persons[0].name} age={aktualisState.persons[0].age} />
          <Person name={aktualisState.persons[1].name} age={aktualisState.persons[1].age}>Hobbim az info!</Person>
        </header>
      </div>
      //Button Metódus neve utánra "()" raksz akkor betöltéskor lefut
  );
}


/*
Funkcióval is megoldható:
function App() {

  return ( //Minidg kell return
    <div>
    ...
    </div>
  );
}
*/

//OSZTÁLY ALAPÚ:
class App extends Component {

  state = { //Speciális objektum a state, foglalt kulcsszó, ezzel adható meg értékek
    persons: [
      {id: '001', name: "Balázs", age: "22"},
      {id: '002', name: "János", age: "32"},
      {id: '003', name: "Béla", age: "44"},
      {id: '004', name: "Elemer", age: "37"},
    ],
    masikState: 'másik state',
    lathatosag: true
  }

  nevValtozasKezelo = (event, id) =>{

    const szemelyIndex = this.state.persons.findIndex(aktSzemely => {
      return aktSzemely.id === id;
    });

    const szemely = {
      ...this.state.persons[szemelyIndex]
    }

    szemely.name = event.target.value;
    const szemelyek = [...this.state.persons];
    szemelyek[szemelyIndex] = szemely;

    this.setState({
      persons: szemelyek
    });
  }

  kapcsolo = () => {
      const lathato = this.state.lathatosag;
      this.setState({lathatosag: !lathato});
  }

  personDeletHandler = (personIndex) => {
    //const szemelyek = this.state.persons;
    const szemelyek = [...this.state.persons]
    szemelyek.splice(personIndex, 1);
    this.setState({persons: szemelyek});
  }

  render(){
    const stilus = {
      backgroundColor: 'green',
      border: '2px solid grey',
      padding: '8px',
      color: 'white',
    }
    
    let persons = null;

    if(this.state.lathatosag == false) {
      persons = (
        <header>
          <div>
            <p>IF!</p>
            <p>IF Feltétel</p>
          </div>
        </header>
      );
      stilus.backgroundColor = 'red';
    }
    
    let classes = []; //red bold

    if (this.state.persons.length === 3) {
      classes.push('red');
      classes.push('bold');
    } else {
      classes = [];
    }

    return( //Mindig kell return
      <div className="App">
        <h1 className={classes.join(' ')}>Dinamik</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Party hard!</p>
          <button onClick={this.kapcsolo} style={stilus}>Kapcsoló!</button> 
          { this.state.lathatosag ? //Ternális feltétel a ? b : c, azaz ha a igaz akkor b ha nem akkor c
            <div>
              {
                //Map metódus, state-person-ból kiszedi az adatokat és feltölti/kilistázza
                this.state.persons.map((person, index) => { 
                  return(
                    <Person name={person.name} 
                    age={person.age} 
                    delete={() => this.personDeletHandler(index)} 
                    key={person.id}
                    change={ (event) => this.nevValtozasKezelo(event, person.id)}
                    />
                  )
                })
              }
            </div>
            : null //Ternális feltétel
          }
        </header>
        {persons}
      </div>
      
      //Button Metódus neve utánra "()" raksz akkor betöltéskor lefut
    );
  }
}


/*
                <Person
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} 
                  click={this.nameChangeHander.bind(this, 'Lakkos Jocó')} //Hatákony megoldás
                  change={this.nevValtozasKezelo}
                />
                <Person
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                  click={(event) => this.nameChangeHander('Sörös Gábor')} //Nem javasolt mert plusz munkát végez a react
                  change={this.nevValtozasKezelo}
                />
*/
export default App;
