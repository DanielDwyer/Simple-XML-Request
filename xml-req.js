var payload = "token=hashy&jump=high";
var serverAddress = "http://0.0.0.0:3333/token-exchange"
var xhr = new XMLHttpRequest();
xhr.open('POST', serverAddress);//*POST
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log("xml transmitted with a response code of 200", xhr.responseText);
        fn(xhr.responseText)
    } else if (xhr.status !== 200) {
        console.log("xml transmitted without receiving a response code of 200", xhr.status);
        fn(0)
    }
};
xhr.send(payload)
