var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var people = [
    {
        "name":"shihyon"
    }
];

app.get('/', function(request, response) {
    response.send(people);
}); 

app.get('/hello', function(request, response) {
    response.send("Hello stranger!");
});

app.get('/hello/:nameArg', function(request, response) {
    var nameArg = request.params.nameArg;
    //var newname = request.body.name;
    var objectFound = false;
    for (var x = 0; x < people.length; x++) {
        var searchName = people[x];
        if (searchName.name === request.params.nameArg) {
            response.send("Hello " + nameArg +  "!");
            objectFound = true;
	    break;
        }

    }
    if (!objectFound) {
        response.status(500).send({error:"name not found"})
    }
});


app.post('/hello', function(request, response) {
   // response.send('please give me your name!');
    var newuser = request.body;
      if (!newuser || newuser.name === "") {
          response.status(500).send({error:  "Hello stranger!"})
      } else {
          people.push(newuser);
          response.status(200).send(people);
      }
});

app.listen(3000, function() {
    console.log("API running on port 3000")
}); 
