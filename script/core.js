import { upDateRatesService } from "./ratesService.js"
import { globalState } from "./state/globalState.js" 
import { rateState } from "./state/ratesState.js"
import "./domHandlers.js"

async function initRates() {
    rateState.status = 'loading'

    const rates = await upDateRatesService()

    if (!rates) {
        rateState.status = 'error'
        rateState.error = 'erro ao carregar taxas'
        return
    }

    rateState.rateReal = rates
    rateState.status = 'ready'
    rateState.lastUpdated = Date.now()

    console.log(rateState.rateReal)

}

initRates()

//função de validação de estado    
function validateState(){

    return Boolean(
        rateState.status === 'ready' &&
        rateState.rateReal?.[globalState.toConvert]?.[globalState.converted] 
         && Number.isFinite(globalState.amount) && globalState.amount > 0)
    }

//função de conversão
function conversion(amount,from,to,rates){
    const rate = rates?.[from]?.[to]
    if(!rate) return null
   return amount * rate
}
    
//função controladora do fluxo
export function controller(){

    if(!validateState()) return

        const result = conversion(
        globalState.amount, 
        globalState.toConvert, 
        globalState.converted, 
        rateState.rateReal)

        if(result === null) return
        globalState.convertedValue = result 

        const output = document.getElementById("finalValue")
        if(!output) return 

        output.value = globalState.convertedValue.toFixed(2) 
        
        
}





    