
import './App.css';
import {useEffect} from 'react'

function App() {

  let baseURL=process.env.REACT_APP_API_URL

  useEffect(() => {
   
    fetch(`${baseURL}/users`)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
  
   
  }, [])
  


  return (
    <div className="App">
      <h1>Welcome to My App</h1>
    </div>
  );
}

export default App;
