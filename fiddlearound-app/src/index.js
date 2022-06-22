import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let books = [
    {
        title: "To Kill a Mockingbird",
        author: {
            firstName: "Harper",
            lastName: "Lee"
        }
    },
    {
        title: "The Catcher in the Rye",
        author: {
            firstName: "J. D",
            lastName: "Salinger"
        }
    },
    {
        title: "The Great Gatsby",
        author: {
            firstName: "Scott",
            lastName: "Fitzgerald"
        }
    },
    {
        title: "Pride and Prejudice",
        author: {
            firstName: "Jane",
            lastName: "Austen"
        }
    },
    {
        title: "The Lord of the Rings",
        author: {
            firstName: "J. R. R.",
            lastName: "Tolkien"
        }
    }
]

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function playerCard(props) {
    return (
        <p>{props.data[0].name}</p>
    )
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            name: '',
            ppg: 0,
            player: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

        fetch(`https://www.balldontlie.io/api/v1/players?search=` + this.state.value, {method: 'GET'}).then(resp => resp.json()).then(data => {

            let playerId = data.data[0].id
            console.log(playerId)
            fetch(`https://www.balldontlie.io/api/v1/stats?player_ids[]=` + playerId, {method: 'GET'}).then(resp => resp.json()).then(data => {
                console.log(data.data[0])
                this.setState({player: data.data[0]})
                this.setState({name: data.data[0].player.first_name + " " + data.data[0].player.last_name})
                this.setState({ppg: data.data[0].pts})
            })
        })

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    NBA player Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <div>{this.state.name}</div>
                <div>{this.state.ppg}</div>
            </form>

        );
    }
}

function Welcome(props) {
    return <h1 className={'heading'}>Welcome to {props.name}'s Book library!</h1>
}

function BookCard(props) {
    return (
        <div key={props.title}>
            <h1>{props.title}</h1>
            <p>{props.author.firstName} {props.author.lastName}</p>
        </div>
    )
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        )
    }
}

    const element = (
        <div className={'heading'}>
            <Welcome name="William" />
            <Welcome name="Hailey " />
            <Toggle />
            <Clock />
            <NameForm />
            {books.map(book => BookCard(book))}
        </div>


    );
    root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




