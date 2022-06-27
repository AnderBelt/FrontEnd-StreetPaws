import React, {useEffect, useState} from "react";
import "./App.css";
import Card from "./components/Card";
import image1 from "./assets/1.jpg";



function App() {
  
  const url2= "https://apirest-streetpaws.herokuapp.com/api/users";
  const [todos, setTodos] = useState();

  const fetchApi = async () =>{
      const response = await fetch(url2)
      const responseJSON = await response.json()
      setTodos(responseJSON)
    }

  useEffect(() =>{
    fetchApi();
  }, [])
  
  return (
    <div class="App">
    <div class="title">
      <h1>Paseadores de Mascotas</h1>
    </div>
    <div className="cards-content">
      <div className="row">
        {!todos ? 'Cargando...' : todos.map((todo) => (
          <div className="col-md-4" key={todo._id}>
            <Card imageSource={image1} nameC={todo.name} url={'nop'} text={todo.puntaje}/>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
