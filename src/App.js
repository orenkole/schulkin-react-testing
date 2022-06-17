import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [buttonColor, setButtonColor] = useState('red')
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
    return (
        <div>
            <button
                style={{backgroundColor: buttonColor}}
                onClick={() => {setButtonColor(newButtonColor)}}
                disabled={buttonDisabled}
            >
                Change to {newButtonColor}
            </button>
            <input
                type="checkbox"
                onChange={(e) => {setButtonDisabled(e.target.checked)}}
            />
        </div>
    );
}

export default App;
