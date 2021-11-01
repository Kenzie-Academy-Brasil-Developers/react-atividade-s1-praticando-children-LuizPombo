import CenteredCard from "./components/CenteredCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <CenteredCard>
          <h1>1</h1>
        </CenteredCard>
        <CenteredCard>
          <h1>2</h1>
        </CenteredCard>
        <CenteredCard>
          <h1>3</h1>
        </CenteredCard>
        <CenteredCard>
          <h1>4</h1>
        </CenteredCard>
      </div>
    </div>
  );
}

export default App;
