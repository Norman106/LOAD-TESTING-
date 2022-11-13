import http from 'k6/http';
export default function () {
    const url = 'https://localhost:5006/api/v1/Sectors';



    const payload = JSON.stringify({
        "name": "Banking",
        "code": "Banking"
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': 'IMS-ighiICbZX21lCip8Zz104ENo1EDLxUFl',
        },
    };
    http.post(url, payload, params);
}