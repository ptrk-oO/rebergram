import logo from './logo.svg';
import './App.css';

  var StateMachine = require('javascript-state-machine');
  var visualize = require('javascript-state-machine/lib/visualize');
  var fsm = new StateMachine({
    init: 'closed',
    transitions: [
      { name: 'open',  from: 'closed', to: 'open',   dot: { color: 'blue', headport: 'n', tailport: 'n' } },
      { name: 'close', from: 'open',   to: 'closed', dot: { color: 'red',  headport: 's', tailport: 's' } }
    ]
  });

function App() {
  return (
	visualize(fsm)
  );
}

export default App;
