import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {signInAction} from "./reducks/users/actions";

function App() {

  const dispatch =useDispatch()

  // この書き方をすると現在のstateのstoreが丸っと入ってくる
  const selector =useSelector((state => state))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>dispatch(signInAction({uid:"00001",username:"nekomamushi"}))}>
          Sign In
        </button>

      </header>
    </div>
  );
}

export default App;
