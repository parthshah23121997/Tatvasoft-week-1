import logo from './logo.svg';
import "./App.css";
import User from "./User";

export const App = () => {

  const userName = "Parth";
  const userId = "15";

  return (
    <div className="App">
    App Component
    <User  a={userName} userId={userId}/>
    
    </div>
  );
}; 
//export default App;
//export {App};
