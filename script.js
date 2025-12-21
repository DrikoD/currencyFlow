//definição de variáveis de estado
let toConvert = ""
let amount = 0
let converted = ""
let convertedValue = 0

//definição de tabela de taxas de câmbio
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
            toConvert = event.target.value
            debugState()
        }
    });

//segundo passo | capturar evento de input em input number
document
    .getElementById("origin")
    .addEventListener('input', function(event){
        if(event.target.matches("input[type='number']")){
            amount = Number(event.target.value)
            debugState()
        }
    });

//terceiro passo | capturar evento de mudança em select de destino
document
    .getElementById("optionArea2")
    .addEventListener('change', function(event){
        if(event.target.matches("select")){
            converted = event.target.value
            debugState()
        }
    });
    
//função de validação de estado
    function validateState(){
        if(rates[toConvert] && rates[toConvert][converted] && Number.isFinite(amount) && amount > 0){
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

            convertedValue = conversion(amount, toConvert, converted)
            document.getElementById("finalValue").value = convertedValue.toFixed(2)
}



    