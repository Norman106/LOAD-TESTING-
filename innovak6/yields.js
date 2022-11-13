import http from 'k6/http';
export default function () {
    const url = 'https://localhost:5006/api/v1/Yields';



    const payload = JSON.stringify({
        "countryCode": "string",
        "marketDate": "2022-11-01T09:00:41.026Z",
        "tenor": 0,
        "value": 0
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': 'IMS-ighiICbZX21lCip8Zz104ENo1EDLxUFl',
        },
    };
    http.post(url, payload, params);
}