import http from 'k6/http';
export default function () {
    const url = 'https://localhost:5006/api/v1/ListedEquityPrices';



    const payload = JSON.stringify({

        "ask": 0,
        "bid": 0,
        "fiftyTwoWeekLow": 0,
        "fiftyTwoWeekHigh": 0,
        "high": 0,
        "listedEquityCode": "string",
        "low": 0,
        "marketDate": "2022-11-01T08:54:19.539Z",
        "marketPrice": 0,
        "previousPrice": 0,
        "sharesTraded": 0,
        "vwap": 0
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': 'IMS-ighiICbZX21lCip8Zz104ENo1EDLxUFl',
        },
    };
    http.post(url, payload, params);
}