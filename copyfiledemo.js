const fs = require("fs");

fs.copyFile("../day1demo/test.txt", "./sample.txt", function(err) {
    if (err) {
        console.error("error occured" + err);

    } else {
        console.log("File copied");
        fs.readFile("./sample.txt", function(err, data) {
            if (err) {
                console.error("error occured");
            } else {
                console.log(data.toString());
            }
        });
    }

})
