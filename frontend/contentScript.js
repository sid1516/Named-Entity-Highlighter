bodyText = $('body').text();
requestObject = {
    "payload": bodyText
}
var xhr = new XMLHttpRequest()
xhr.open('POST', "http://localhost:8000/getNamedEntities", true)

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = function() {
    if(this.status == 200) {
        namedEntities = JSON.parse(this.responseText);
            for(entity in namedEntities) {
                $("body").mark(entity, {
                    "accuracy": {
                        "value": "exactly",
                        "limiters": [",", ".", "?"]
                    },
                    "separateWordSearch": false
                });
            }
        }
    }
xhr.send(JSON.stringify(requestObject));