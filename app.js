const XLSX = require('xlsx');

let items = {
    "operations": [
        {
            "id": 19,
            "createdat": "2020-11-16T14:03:35.999Z",
            "total": "100",
            "customer_id": 1,
            "customer_email": "outlet@amesud.com.ar",
            "customer_name": "LOCAL LACROZE",
            "customer_fantasyname": "LOCAL LACROZE",
            "customer_code": "11000",
            "state": "pendiente verificacion",
            "isdeleted": false,
            "isdeleteddate": null
        },
        {
            "id": 18,
            "createdat": "2020-11-13T20:41:49.008Z",
            "total": "2005",
            "customer_id": 1,
            "customer_email": "outlet@amesud.com.ar",
            "customer_name": "LOCAL LACROZE",
            "customer_fantasyname": "LOCAL LACROZE",
            "customer_code": "11000",
            "state": "aprobado contaduria",
            "isdeleted": false,
            "isdeleteddate": null
        },
        {
            "id": 17,
            "createdat": "2020-11-13T20:41:48.998Z",
            "total": "2005",
            "customer_id": 1,
            "customer_email": "outlet@amesud.com.ar",
            "customer_name": "LOCAL LACROZE",
            "customer_fantasyname": "LOCAL LACROZE",
            "customer_code": "11000",
            "state": "rechazado contaduria",
            "isdeleted": false,
            "isdeleteddate": null
        },
        {
            "id": 11,
            "createdat": "2020-11-06T20:53:45.238Z",
            "total": "2000",
            "customer_id": 1,
            "customer_email": "outlet@amesud.com.ar",
            "customer_name": "LOCAL LACROZE",
            "customer_fantasyname": "LOCAL LACROZE",
            "customer_code": "11000",
            "state": "pendiente verificacion",
            "isdeleted": false,
            "isdeleteddate": null
        }
    ],
    "payments": [
        {
            "operation_id": 19,
            "customer_id": 1,
            "customer_email": "outlet@amesud.com.ar",
            "customer_name": "LOCAL LACROZE",
            "customer_fantasyname": "LOCAL LACROZE",
            "customer_code": "11000",
            "payment_id": 13,
            "payment_date": "2020-11-16T19:07:19.042Z",
            "invoice": "00123135",
            "payment_code": "2011163135",
            "account_id": 4,
            "account_bankid": 5,
            "bank_name": "Banco de la Nacion Argentina",
            "account_cbu": "0110040220004000253963",
            "payment_amount": "250",
            "payment_img": "djakjdala",
            "state": "pendiente verificacion",
            "isdeleted": false,
            "isdeleteddate": null
        },
        {
            "operation_id": 19,
            "customer_id": 1,
            "customer_email": "outlet@amesud.com.ar",
            "customer_name": "LOCAL LACROZE",
            "customer_fantasyname": "LOCAL LACROZE",
            "customer_code": "11000",
            "payment_id": 14,
            "payment_date": "2020-11-16T19:07:45.902Z",
            "invoice": "5001231357",
            "payment_code": "2011161357",
            "account_id": 4,
            "account_bankid": 5,
            "bank_name": "Banco de la Nacion Argentina",
            "account_cbu": "0110040220004000253963",
            "payment_amount": "2504",
            "payment_img": "djasafdakjdala",
            "state": "pendiente verificacion",
            "isdeleted": false,
            "isdeleteddate": null
        }
    ],
    "echecks": [
        {
            "operation_id": 11,
            "customer_id": 1,
            "customer_email": "outlet@amesud.com.ar",
            "echeck_id": 6,
            "echeck_date": "2020-11-13T17:29:30.677Z",
            "echeck_number": "2231241",
            "echeck_code": "23141411",
            "bank_id": 4,
            "bank_name": "Banco ICBC",
            "echeck_amount": "20000",
            "echeck_img": "dadjalkdjaksjdl",
            "state": "pendiente verificacion",
            "isdeleted": false,
            "isdeleteddate": null
        },
        {
            "operation_id": 11,
            "customer_id": 1,
            "customer_email": "outlet@amesud.com.ar",
            "echeck_id": 7,
            "echeck_date": "2020-11-13T17:30:00.891Z",
            "echeck_number": "2231241222",
            "echeck_code": "241413141411",
            "bank_id": 4,
            "bank_name": "Banco ICBC",
            "echeck_amount": "320000",
            "echeck_img": "dadjalkdjcfsaksjdl",
            "state": "pendiente verificacion",
            "isdeleted": false,
            "isdeleteddate": null
        },
        {
            "operation_id": 11,
            "customer_id": 1,
            "customer_email": "outlet@amesud.com.ar",
            "echeck_id": 5,
            "echeck_date": "2020-11-04T03:00:00.000Z",
            "echeck_number": "21212",
            "echeck_code": "20201141212",
            "bank_id": 3,
            "bank_name": "Banco Santander Rio S.A.",
            "echeck_amount": "3000",
            "echeck_img": "https://cobranzasamesud.s3.amazonaws.com/6/11/2020_17:53:42 NC_00004_00000376.pdf",
            "state": "rechazado contaduria",
            "isdeleted": false,
            "isdeleteddate": null
        }
    ]
};

let operations = items.operations;
let wb = XLSX.utils.book_new();

let ws = XLSX.utils.json_to_sheet(operations, {header:["id","createdat","total","customer_id","customer_email","customer_name","customer_fantasyname", "customer_code", "state", "isdeleted", "isdeleteddate"]});

XLSX.utils.book_append_sheet(wb, ws, 'ws_name');

XLSX.writeFile(wb, 'out.xlsx');