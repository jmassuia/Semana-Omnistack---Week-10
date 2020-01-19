import React, {useState, useEffect} from 'react';
import api from'./services/api'

import  './global.css'
import  './App.css'
import './Main.css'

import DevForm from './components/DevForm/index';
import DevItem from './components/DevItem/Index';

//Componentes: Bloco isolado de codigo que interfere no restante da aplicação (Um componente por arquivo)
//Propriedade: Informações que o componente PAI passa para o componente filho
//Estado: informações mantidas pelo componente (lembrar: imutabilidade/criação de uma copia)


function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() =>{
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []);

 async function handleAddDev(data){
       
    const response = await api.post('devs', data);

    setDevs([...devs, response.data]);
 } 

  return(
    <div id="app">
      <aside>
        <strong>Sign Up</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map( dev =>(
            <DevItem key={dev._id} dev={ dev }/>
          ))}
        </ul>
      </main>
    </div>
  );
}
export default App;
