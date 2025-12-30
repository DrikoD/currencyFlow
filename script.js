//definição de estado global centralizado
const globalState = {
    toConvert: "",
    amount: 0,
    converted: "",
    convertedValue:0,

    rates: {

    USD: {
        USD: 1,
        BRL: 5.00,
        EUR: 0.92,
        GBP: 0.79
    },

    BRL: {
        USD: 0.20,
        BRL: 1,
        EUR: 0.18,
        GBP: 0.16
    },

    EUR: {
        USD: 1.09,
        BRL: 5.43,
        EUR: 1,
        GBP: 0.86
    },

    GBP: {
        USD: 1.27,
        BRL: 6.32,
        EUR: 1.16,
        GBP: 1
    }
}
}
// manter sistema rodando enquanto o princio strangler pattern é implementado
const rates = {

    USD: {
        USD: 1,
        BRL: 5.00,
        EUR: 0.92,
        GBP: 0.79
    },

    BRL: {
        USD: 0.20,
        BRL: 1,
        EUR: 0.18,
        GBP: 0.16
    },

    EUR: {
        USD: 1.09,
        BRL: 5.43,
        EUR: 1,
        GBP: 0.86
    },

    GBP: {
        USD: 1.27,
        BRL: 6.32,
        EUR: 1.16,
        GBP: 1
    }
}

//primeiro passo | capturar evento de mudança em select de origem
document
    .getElementById("optionArea1")
    .addEventListener('change', function(event){
        if(event.target.matches("select")){
            globalState.toConvert = event.target.value
            debugState()
        }
    });

//segundo passo | capturar evento de input em input number
document
    .getElementById("origin")
    .addEventListener('input', function(event){
        if(event.target.matches("input[type='number']")){
            globalState.amount = Number(event.target.value)
            debugState()
        }
    });

//terceiro passo | capturar evento de mudança em select de destino
document
    .getElementById("optionArea2")
    .addEventListener('change', function(event){
        if(event.target.matches("select")){
            globalState.converted = event.target.value
            debugState()
        }
    });
    
//função de validação de estado
    function validateState(){
        if(globalState.rates[globalState.toConvert]
         && globalState.rates[globalState.toConvert][globalState.converted] 
         && Number.isFinite(globalState.amount) && globalState.amount > 0){
            return true
        } else{
            return false
        }
    }

//função de conversão
    function conversion(amount, toConvert, converted){
        const rate = rates?.[toConvert]?.[converted]
        if(!rate) return null
       return amount * rate
    }
    
//função de debug do estado
function debugState(){
    if(!validateState()) return

            globalState.convertedValue = conversion(globalState.amount, globalState.toConvert, globalState.converted)
            document.getElementById("finalValue").value = globalState.convertedValue.toFixed(2)
}



    