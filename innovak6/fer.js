import http from 'k6/http';
export default function () {
    const url = 'https://localhost:5006/api/v1/ForexExchangeRates';



    const payload = JSON.stringify({
        "baseCurrencyCode": "string",
        "buy": 0,
        "exchangeDate": "2022-11-01T08:34:47.566Z",
        "exchangeValue": 0,
        "sell": 0,
        "sourceCode": "string",
        "targetCurrencyCode": "string"
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': 'IMS-ighiICbZX21lCip8Zz104ENo1EDLxUFl',
        },
    };
    http.post(url, payload, params);
}