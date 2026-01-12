import { globalState } from "./state/globalState.js"
import { controller } from "./core.js"

// captura os eventos do DOM
document
    .getElementById("optionArea1")
    .addEventListener('change', function(event){
        if(event.target.matches("select")){
            globalState.toConvert = event.target.value
            controller()
        }
    });
// captura o evento de input do campo de valor
document
    .getElementById("origin")
    .addEventListener('input', function(event){
        if(event.target.matches("input[type='number']")){
            globalState.amount = Number(event.target.value)
            controller()
        }
    });
// captura os eventos do DOM
document
    .getElementById("optionArea2")
    .addEventListener('change', function(event){
        if(event.target.matches("select")){
            globalState.converted = event.target.value
            controller()
        }
    });
 
