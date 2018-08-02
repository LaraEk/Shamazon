var mysql = require("mysql");
var inquirer= require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "", // (use an .env file!)  // ----------- remember to add password when running app! -------- //
    database: "shamazon_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    // shamazon();  
    displaystore();
});

// function shamazon() {
//     console.log("it's working!");
// }

function displaystore() {
    console.log("DISPLAY STORE");
    connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("-------------------------------------- ♨(⋆‿⋆)♨ --------------------------------------");
    console.log("Welcome to Shamazon: A Database of Products Which Is Definitely Not Ripping Off Amazon");
    console.log("-------------------------------------- ♨(⋆‿⋆)♨ --------------------------------------");
    for (var i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].item_id + " | Product: " + res[i].product_name + " | Price: " + res[i].price);
    }
//    console.log(res);
    console.log("-------------------------------------- ♨(⋆‿⋆)♨ --------------------------------------");
    console.log("are you happy now?");
    });
// 5. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
    whatwouldyouliketobuy();
}

var customerwantsthis = 0;
var howmanyofthis = 0;

function whatwouldyouliketobuy() {
//    console.log("A CUSTOMER!!! Wait! What's your rush, what's your hurry? You gave me such I fright! I thought you was a ghost!");
    inquirer
    .prompt ([{
        type: "input",
        name: "userbuy",
        message: "Now, please type the ID number of the object you would like to buy!"
    },
    {
        type: "input",
        name: "howmany",
        message: "How many would you like to buy?"
    },
    {
        type: "confirm",
        message: "Confirm order:",
        name: "confirm",
        default: true
    }
    ]).then(function(inquireresponse){        
        if (inquireresponse.confirm) {
            console.log("you want " + inquireresponse.howmany + " of Item # " + inquireresponse.userbuy + "!")
            customerwantsthis = inquireresponse.userbuy;
            howmanyofthis = inquireresponse.howmany;
            console.log(customerwantsthis);
            console.log(howmanyofthis);
        }
    });
//-- 6. The app should then prompt users with two messages.
//--    * The first should ask them the ID of the product they would like to buy.
//--    * The second message should ask how many units of the product they would like to buy.
    checkproduct();
}

function checkproduct() {

    // 7. Once the customer has placed the order, your application should check 
//      if your store has enough of the product to meet the customer's request.
//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.

}






