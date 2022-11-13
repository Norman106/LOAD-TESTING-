import http from 'k6/http';
export default function () {
    const url = 'https://localhost:5006/api/v1/Countries';



    const payload = JSON.stringify({
        "alpha2Code": "string",
        "alpha3Code": "string",
        "code": "string",
        "name": "string",
        "numericCode": "string"
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': 'IMS-ighiICbZX21lCip8Zz104ENo1EDLxUFl',
        },
    };
    http.post(url, payload, params);
}