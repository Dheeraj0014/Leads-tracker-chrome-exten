// function savelead(){
//     console.log("button clicked")
// }
// diff betn let and const is that const cant be reassign
//chrome://extensions 

// myLeads = JSON.parse(myLeads) // to push the element
// myLeads.push("www.ghariJa.com")
// myLeads = JSON.stringify(myLeads) // declearing array as a string 
// console.log(typeof myLeads)

let myLeads = []
const inputEl = document.getElementById("input-el")
const boxBtn =  document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))
const tabBtn = document.getElementById("tab-btn")
 
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
   chrome.tabs.query({active: true , currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myLeads))
        render(myLeads)
    })
 
})

function render(leads){
    let listItems = ""
for(i = 0; i < leads.length; i ++){
   //listItems += "<li><a target = '_blank' href = '"+ myLeads[i] +"'>" + myLeads[i] + "</a></li>"

   listItems +=`
    <li>
        <a target = '_blank' href = ${ leads[i]}>
        ${ leads[i]}                       
        </a>
    </li>`
}
ulEl.innerHTML = listItems
}
  
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []++
    render(myLeads)
})

boxBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads",JSON.stringify(myLeads))
    render(myLeads) 
})

inputEl.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("input-btn").click();
      }
    });

//truthy
//falsy 

//falsy values
//false
//0
//""
//null -> how u as a developer signalize emptiness
//undefined -> how javascript signalize emptiness
//NaN

// dynamic function
//                     parameters
// function greetUser (greeting,name,emoji){ 
//     welcomeEl.textContet = `${greeting} , ${name} ${emoji} `
// }                          
//           arguments                        
// greetUser("hello","Dheeraj","🤪")


 