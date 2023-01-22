import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

class Counter extends React.Component {
  state = {
    counter: 0
  }

  useEffect = () => {
    alert("Number of orders: " + this.state.counter);
  }

  increment = () => {
    this.setState({counter: this.state.counter+1});
  }

  decrement = () => {
    this.setState({counter: this.state.counter-1});
  }

  componentDidMount() {
    this.setState({counter: 42});
  } 

  render() {
    return (<>
    <div className='status'>
      <h2>Current orders: {this.state.counter}</h2>
    </div>

    <div class='buttons'>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      <button onClick={this.useEffect}>Submit changes</button>
    </div>
    </>);
  }
}

class Sliders extends React.Component {
  marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 70,
      label: '70',
    },
  ];

  render() {
    return(
      <>
        <div class='sliders'>
          <p>Change motor speed</p>
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaValueText={this.valuetext}
              aria-label="Restricted values"
              step={null}
              marks={this.marks}
              valueLabelDisplay="auto"
            />
          </Box>
          <p>Kerfus sex appeal</p>
          <Box sx={{ width: 300 }}>
            <Slider 
                disabled 
                defaultValue={100} 
                aria-label="Disabled slider"
                step={null}
                marks={this.marks} 
              />
            </Box>
        </div>
      </>
    )
  }
}

class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "pieczywo"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Actual Kerfuś destination: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class='selectform'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select Kerfuś destination:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="owoce">Dzial z owocami</option>
              <option value="mrozonki">Dzial z mrozonkami</option>
              <option value="przekaski">Dzial ze slodyczami i przekaskami</option>
              <option value="pieczywo">Dzial z pieczywem</option>
            </select>
          </label>
          <input type="submit" value="Wyślij" />
        </form>
      </div>
    );
  }
}

function KerfExp() { 
  const kerfusies = [
    {
      id: "1",
      title: "Default Kerfus",
      img: "defaultkerfus.jpeg"
    },
    {
      id: "2",
      title: "Shocked Kerfus",
      img: "zdziwionykerfus.jpeg"
    },
    {
      id: "3",
      title: "Happy Kerfus",
      img: "happykerfus.jpeg"
    }
  ];

  const [toggle, setToggle] = useState("1");

  return(
    <div className="App">
    {kerfusies.map(({ title, id, img }) => 
    {
      return (
        <>
          <div className="kerfexp">
            <div className="text">
              <ul>
                <li> <h1 onClick={() => setToggle(id)}>{title}</h1> </li>
              </ul>
            </div>
                  
            <div className="img">
              {toggle === id ? (
                <>
                  <img src={img} id={id} className="photo" alt='kerfus' />
                </>
              ) : null}
            </div>
          </div>
        </>
      );
    })}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <KerfExp />
    <Counter />
    <Sliders />
    <Destination />
  </React.StrictMode>
);