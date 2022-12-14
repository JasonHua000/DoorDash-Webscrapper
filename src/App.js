import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
  
  // local storage for the variables
  
  const [orderNumber, setOrderNumber] = useState("");
  const [date, setDate] = useState("");
  const [dasher, setDasher] = useState("");
  const [cost, setCost] = useState("");

  // when button is clicked, post information to the sheet.best api
  
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
    chrome.tabs.query({active: true, currentWindow:true}, tabs=>{
      const activeTabId = tabs[0].id;
      
      chrome.scripting.executeScript(
        {
          target: {tabId: activeTabId},
          function: ()=>{
           
            // get into the class that stores the all information about each order
            
            var tab= document.getElementsByClassName("styles__BodyRow-sc-4myuz0-3 cnRgPY");
            var list=[];
           
            // for loop to find the "error charge" column for each class 
            
            for(var i=0;i<tab.length;i++){
              if(tab[i].children[7].innerText!="$0.00"){
                // highlights the class red
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
    // buttons that can be pressed
      <button onClick={test}>Search</button>
      <button onClick={handleSubmit}>Paste</button>

    </div>
  );
}

export default App;
