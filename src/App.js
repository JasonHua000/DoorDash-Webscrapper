import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
  
  const [orderNumber, setOrderNumber] = useState("");
  const [date, setDate] = useState("");
  const [dasher, setDasher] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const object = { orderNumber, date, dasher, cost };

    axios
      .post(
        "https://sheet.best/api/sheets/037e1c53-fec8-46ef-a0ec-4366dd541f00",
        object
      )
      .then((response) => {
        console.log(response);
      });
  };


  function test(){
    /* eslint-disable no-undef */
    chrome.tabs.query({active: true, currentWindow:true}, tabs=>{
      const activeTabId = tabs[0].id;
      
      chrome.scripting.executeScript(
        {
          target: {tabId: activeTabId},
          function: ()=>{
           
            var tab= document.getElementsByClassName("styles__BodyRow-sc-4myuz0-3 cnRgPY");
            var list=[];
           
            for(var i=0;i<tab.length;i++){
              if(tab[i].children[7].innerText!="$0.00"){
                tab[i].style['background-color']="red";
                

              }
            }
            
           
          }
          
        }
      )
    })
  }

  return (
    <div className="App">
      <button onClick={test}>Search</button>
      <button onClick={handleSubmit}>Paste</button>

    </div>
  );
}

export default App;
