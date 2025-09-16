var mysql = require('mysql');

///////////////////////////////////////////////////////////////////////////////////////////

// Setup MySQL connection
// timezone is very NB

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'teamsDB',
  timezone: 'utc+0'  
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database teamsDB`);
});

///////////////////////////////////////////////////////////////////////////////////////////

// GET /teams
exports.getTeams = function(req,res){

    connection.query(`SELECT * FROM teams`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	
}

// GET /team/ID
exports.getTeam = function(req,res){

    connection.query(`SELECT * FROM teams WHERE id=${req.params.id}`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	
}

// POST /team
exports.addTeam = function(req,res){

    var team = {id: req.body.id, name: req.body.name};
    connection.query(`INSERT INTO teams SET ?`, team, function(err, rows, fields) {
        if (err) throw err;

        res.status(201); 
        res.send(JSON.stringify(rows));
    });
}

// PUT /team/ID
exports.updateTeam = function(req,res){

    var team = {id: req.body.id, name: req.body.name};
    connection.query(`UPDATE teams SET ? WHERE id=${req.params.id}`, team, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);
        res.send(JSON.stringify(rows));
    });
}

// DELETE /team/ID
// delete a team by usuing the id
exports.deleteTeam = function(req,res){
    connection.query(`DELETE FROM teams WHERE id=${req.params.id}`, function(err, rows, fields) {
        if (err) throw err;
        res.status(200);
        res.send(JSON.stringify(rows));
    });
}