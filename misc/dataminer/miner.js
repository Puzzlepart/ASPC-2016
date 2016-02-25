
// http://gateway.marvel.com/v1/public/characters?ts=1&apikey=326b9124ce39cf26bf0c3746d03d5e73&hash=9921fd504791b84506e01303bb73edbe&limit=100&offset=300
var request = require("request");
var fs = require("fs");
var characters = [];
for (var i = 0; i <= 1485; i += 100) {
    request.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=326b9124ce39cf26bf0c3746d03d5e73&hash=9921fd504791b84506e01303bb73edbe&limit=100&offset=" + i, function (err, res, body) {
        if (!err) {
            var resultsObj = JSON.parse(body);
            characters.push.apply(characters, resultsObj.data.results);
            //console.log(resultsObj.data.results);
            if (i > 1485) {
                var str = JSON.stringify(characters);

                fs.writeFile("characters_all.json", str, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");
                });
            }
        }
    });
}

