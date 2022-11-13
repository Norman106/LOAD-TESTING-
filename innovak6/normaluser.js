import http from 'k6/http';
export default function () {
    const url = 'https://localhost:5006/api/v1/NormalUsers';



    const payload = JSON.stringify({
        "username": "string",
        "active": true,
        "alternateEmail": "string",
        "alternatePhoneNumber": "string",
        "designation": "string",
        "email": "string",
        "fullName": "string",
        "notes": "string",
        "phoneNumber": "string",
        "physicalAddress": "string",
        "postalAddress": "string",
        "systemUser": 0
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': 'IMS-ighiICbZX21lCip8Zz104ENo1EDLxUFl',
        },
    };
    http.post(url, payload, params);
}