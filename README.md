# DoorDash-Webscrapper
2022 HSE Software Development III Project


This code is a React functional component that displays two buttons. One button is labeled "Find it" and the other is labeled "Write to Sheets." When the "Find it" button is clicked, the code uses the chrome.scripting.executeScript() function to execute a script in the active tab of the current window that webscrapes the information off of DoorDash. The script accesses the DOM of the active page and gets the elements with the class "styles__BodyRow-sc-4myuz0-3 cnRgPY". For each of these elements, if the element's 7th child element (i.e. tab[i].children[7]) which is the column for error charge has a text content that is not equal to "$0.00", the script changes the element's background color to red and sets the values of the React state variables OrderID, Date, DasherName, and Cost to the text content of the element's children at indices 0, 1, 2, and 3, respectively. When the "Paste" button is clicked, the code uses the axios library to make a POST request to the URL using the state variables. 


"https://sheet.best/api/sheets/037e1c53-fec8-46ef-a0ec-4366dd541f00" serves as  an object as the request body. This API is crucial for allowing the backend to transfer information between Google Sheet's API and my React Code. The object has four properties: OrderID, Date, DasherName, and Cost, whose values are taken from the current values of the corresponding React state variables. The information should be posted on the google sheets after clicking the "Paste" button.


