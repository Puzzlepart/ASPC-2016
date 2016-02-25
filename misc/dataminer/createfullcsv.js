var fs = require("fs");
var content;
fs.readFile('C:/code/ASPC-2016/misc/dataminer/test.json', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    var characters = JSON.parse(content);
    var headerRow = ['User Name', '','', 'Display Name'];
    var data = [[]]
    for (var i = 0; i < characters.length; i++) {
        var character = characters[i];
        var row = [];
        row.push('"' + character.id + "@aspc1602.onmicrosoft.com" + '"',
            '"' + character.thumbnail.path + "."+ character.thumbnail.extension +'"',
            '"' + character.name + '"',
            '"'+character.description + '"',
            '"'+character.urls[1].url);
        data.push(row);
    }
    var csvContent = [];
    var fileNumber = 0;

    data.forEach(function (infoArray, index) {
        var dataString = infoArray.join(",");
        if (index % 2000 === 0) {
            fileNumber++
            csvContent[fileNumber] = '';
        }
        csvContent[fileNumber] += index < data.length ? dataString + "\n" : dataString;

    });

    csvContent.forEach(function (content, index) {
        fs.writeFile("full" + index + ".csv", content, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }, this);


});
