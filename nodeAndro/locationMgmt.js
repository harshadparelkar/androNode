/**
 * http://usejsdoc.org/
 */
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var router = express.Router();

//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set port




app.get('/api', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
    
});

// create a bear (accessed at POST http://localhost:8080/location)
router.route('/location').post(function(req, res) {  

    
    var bear = new Bear();      // create a new instance of the Bear model
    bear.name = req.body.name;  // set the bears name (comes from the request)

    // save the bear and check for errors
    bear.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Bear created!' });
    });
    
});

//REGISTER OUR ROUTES -------------------------------



//all of our routes will be prefixed with /api
//app.use('/api', router);

app.listen(port);
console.log('Server is on port ' + port);