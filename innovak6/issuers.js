import http from 'k6/http';
export default function () {
    const url = 'https://localhost:5006/api/v1/Issuers';



    const payload = JSON.stringify({
        "code": "string",
        "countryCode": "60923199-8158-df11-b94c-00c09fc85dd6",
        "name": "string"
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': 'IMS-ighiICbZX21lCip8Zz104ENo1EDLxUFl',
        },
    };
    http.post(url, payload, params);
}