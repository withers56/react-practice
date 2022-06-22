import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>{displayHeader()}</div>
  );
}

function displayHeader() {
  const headerElement = {
    type: 'h1',
    props: {
      name: 'William'
    }
  };

  return (
      <h1 className={'heading'}>Welcome to {headerElement.props.name}'s Book library!</h1>
  )
}

export default App;
