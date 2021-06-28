import config from 'config';

const dummyData =[
    {id: 1, amount: 3000, pin: 1234},
    {id: 2, amount: 2000, pin: 1230},
    {id: 3, amount: 1000, pin: 1224}
]

export const depositMoneyService = {
    deposit,
    verifyPin,
    verifyCard
};

function deposit(amount) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount })
    };
    return dummyData;
    // return fetch(`${config.apiUrl}/deposit-money`, requestOptions)
    //     .then(response => response.json())
    //     .then(data =>  dummyData)
    //     .catch(error => error);
}

function verifyPin(pin) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin })
    };

    return true;
    // return fetch(`${config.apiUrl}/verify-pin`, requestOptions)
    //     .then(response => response.json())
    //     .then(data =>  true)
    //     .catch(error => error);
}

function verifyCard({cardNo, expDate, cvc}) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({cardNo, expDate, cvc})
    };

    return true;
    // return fetch(`${config.apiUrl}/verify-card`, requestOptions)
    //     .then(response => response.json())
    //     .then(data =>  true)
    //     .catch(error => error);
}
