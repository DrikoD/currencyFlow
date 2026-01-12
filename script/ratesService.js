export async function upDateRatesService() {
    const response = await fetch('https://cdn.moneyconvert.net/api/latest.json')

    if (!response.ok) {
        return null
    }

    const data = await response.json()

    if (!data || typeof data !== 'object' || !data.rates) {
        return null
    }

    const rawRates = data.rates
    const currencies = Object.keys(rawRates)

    const normalizedRates = {}

    for (let from of currencies) {
        normalizedRates[from] = {}

        for (let to of currencies) {
            normalizedRates[from][to] = rawRates[to] / rawRates[from]
        }
    }

    return normalizedRates
}
