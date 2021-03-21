
$(document).on("click", ({ target }) => {
    if ($(target).hasClass("submit")) {
      var time = new Date();
      var stri = document.getElementById("messageToSend").value;
      const messageContainer = $("#messageContainer");
      template = document.importNode(document.getElementById("messagePart").content, true);
      $("#textPart", template).text(`${stri}`);
      $("#timePart", template).text(`${time.getTime()}`);
      // console.log(template);
      messageContainer.append(template);
      let bit = {stri, time}
      console.log(bit);
    }
  })
  
import { createRequire } from 'module';
const fs = require('fs');
let obj = {
    table: []
};
var messagejs = "./chatHistory/chat.json"
fs.exists(messagejs, function(exists) {

    if (exists) {

        console.log("yes file exists");

        fs.readFile(messagejs, function readFileCallback(err, data) {

            if (err) {
                console.log(err);
            } else {
                obj = JSON.parse(data);

                for (i = 0; i < 5; i++) {
                    obj.table.push({
                        id: i,
                        square: i * i
                    });
                }

                let json = JSON.stringify(obj);
                fs.writeFile(messagejs, json);
            }
        });
    } else {

        console.log("file not exists");

        for (i = 0; i < 5; i++) {
            obj.table.push({
                id: i,
                square: i * i
            });
        }

        let json = JSON.stringify(obj);
        fs.writeFile(messagejs, json);
    }
});
