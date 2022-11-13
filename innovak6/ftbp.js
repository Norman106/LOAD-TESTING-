import http from 'k6/http';
export default function () {
    const url = 'https://localhost:5006/api/v1/FixedTreasuryBondPrices';



    const payload = JSON.stringify({
        "accruedInterest": 0,
        "cleanPrice": 0,
        "createdByUsername": "string",
        "fixedTreasuryBondCode": "string",
        "fixedCouponRate": 0,
        "marketPrice": 0,
        "marketDate": "2022-11-01T08:42:14.720Z",
        "issueDate": "2022-11-01T08:42:14.720Z",
        "lastCouponPaymentDate": "2022-11-01T08:42:14.720Z",
        "nextCouponPaymentDate": "2022-11-01T08:42:14.720Z",
        "outstandingAmount": 0,
        "maturityDate": "2022-11-01T08:42:14.720Z",
        "tenorToMaturity": 0,
        "updatedByUsername": "string",
        "yieldToMaturity": 0
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': 'IMS-ighiICbZX21lCip8Zz104ENo1EDLxUFl',
        },
    };
    http.post(url, payload, params);
}