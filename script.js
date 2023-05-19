

import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import {getDatabase,ref,push,onValue,remove} from  'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
    databaseURL: "https://playground-37649-default-rtdb.europe-west1.firebasedatabase.app/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDb = ref(database,"groceries")
    

const buttonEl = document.getElementById("btn")
const inputEl = document.getElementById("item")
const listOfProducts = document.getElementById("listofproducts")

function clearInputField(){
    inputEl.value =""
 }

function clearProductList(){
    listOfProducts.innerHTML = ""
} 

  function appendInputToShoppingList (item) {
        let groceryId = item[0]
        let groceryItem = item[1]


        const li = document.createElement("li")
        li.textContent = groceryItem
        listOfProducts.append(li)
        
        li.addEventListener("dblclick",function(){
        let locationOfClickedProduct = ref(database,`groceries/${groceryId}`)
         remove(locationOfClickedProduct)
        })
  } 
  
  onValue(shoppingListInDb,function(snapshot){
   
     clearProductList()
if (snapshot.exists()){
    let groceriesArray = Object.entries(snapshot.val())

    for(let grocery of groceriesArray){
        appendInputToShoppingList(grocery)
    }
} else{
    listOfProducts.textContent ="No items added yet"
}
    
  })

buttonEl.addEventListener("click", function(){

let inputValue = inputEl.value
 
 if(inputEl.value === "")return;
 
clearInputField()

 push(shoppingListInDb,inputValue)

})