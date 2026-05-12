import Card from './component/card';
import Button from './component/Button';
import Input from './component/input';


import './App.css';

function App() {
  return (
   <div className="App">
    <h1>Weather ForeCast</h1>
    <Input/>
    
    <Button value="search"/>
    <Card / >
    <Button  value="Refresh"/ >

   </div>
  );
}

export default App;
