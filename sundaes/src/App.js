import logo from './logo.svg';
import './App.css';
import Editor from "@monaco-editor/react";

function App() {
  return (
    <div className="App">
        <Editor
            height="90vh"
            defaultLanguage="html"
            defaultValue="// some comment"
        />
    </div>
  );
}

export default App;
