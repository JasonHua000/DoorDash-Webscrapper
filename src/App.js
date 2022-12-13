import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
  
  function returnFoo(i) {
    var g = i+6;
    return g
 }



  const [orderNumber, setOrderNumber] = useState("");
  const [date, setDate] = useState("");
  const [dasher, setDasher] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const object = { orderNumber, date, dasher, cost };

    axios
      .post(
        "https://sheet.best/api/sheets/b41c3153-84ed-4ed5-a308-0f02e47df9f2",
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
                console.log("found");
                tab[i].style['background-color']="red";
                
  
                const orderNumber = tab[i].children[0].innerText;
                
                
                handleSubmit()

              }
            }
            
           
          }
          
        }
      )
    })
  }

  return (
    <div className="App">
      <button onClick={test}>Find it</button>
      <button onClick={handleSubmit}>Write to Sheets</button>

    </div>
  );
}

export default App;
