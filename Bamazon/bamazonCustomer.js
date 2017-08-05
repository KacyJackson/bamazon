var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

//require('console.table');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'thenumber1',
  database: 'Bamazon_database'
});

var inventory = [];
var item = "";
var itemIndex = "";
var stock = 0;
var idContainer = [];
var chosenItemId = false;

//Connect to mySQL database.
connection.connect(); 

//connect to the mysql database and pull the information from the Products database to display to the user
connection.query('SELECT ItemID, ProductName, Price FROM toyproducts', function(err, result){
     if(err) console.log(err);

       var table = new Table({
          head: ['Item Id', 'Item Name', 'Price'],
          colWidths: [50, 50, 50]
        });


      for (var i = 0; i < result.length; i++) {
          table.push(
              [result[i].ItemId, result[i].ProductName, result[i].Price]
          );
      }
      console.log(table.toString());

      //purchase();

});





connection.end();
