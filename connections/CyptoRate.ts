
export const CyptoRate = async() => { 
    const request = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }, 
    });

    const json = await request.json();  
    localStorage.setItem('rate', json)
}