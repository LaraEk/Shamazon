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

    options();
});

function options() {
    inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
            "1. View Products for Sale", 
            "2. View Low Inventory", 
            "3. Add to Inventory", 
            "4. Add New Product"],
        name: "menuoptions"
      },
    ])
    .then(function(inquirerResponse) {
        switch(inquirerResponse.menuoptions){
            case "1. View Products for Sale": viewproducts();
            break;
            case "2. View Low Inventory": viewlowinv();
            break;
            case "3. Add to Inventory": addinv();
            break;
            case "4. Add New Product": addproduct();
            break;
            default: console.log("this the default");
        }
    });
}

function viewproducts() {
    console.log("VIEW ALL PRODUCTS");
    connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(" ");
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    for (var i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].item_id + " | Product: " + res[i].product_name + " | Price: " + res[i].price + " | Quantity: " + res[i].stock_quantity);
    }
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    console.log(" ");
    console.log("Please press the down-arrow to continue.");
    });
    // * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
    options();
}

function viewlowinv() {
    console.log("VIEW LOW INVENTORY");
    connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(" ");
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    for (var i = 0; i < res.length; i++) {
        if (res[i].stock_quantity < 5) {
        console.log("ID: " + res[i].item_id + " | Product: " + res[i].product_name + " | Price: " + res[i].price + " | Quantity: " + res[i].stock_quantity);
        }
    }
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    console.log(" ");
    console.log("Please press the down-arrow to continue.");
    });
    options();
// * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.
}

function addinv() {
    console.log("ADD TO INVENTORY");
    inquirer
      .prompt([
        {
        type: "input",
        message: "What product would you like to add to?",
        name: "addinventory"
        },
        {
        type: "input",
        message: "How many would you like to add?",
        name: "howmanyadd"
        },
        {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
        }
    ]).then(function(addinvresponse) {
        console.log("you added " + addinvresponse.howmanyadd + addinvresponse.addinventory + "s!");
        var addinvquery = connection.query("UPDATE products SET ? WHERE ?",[
            {
                product_name: addinvresponse.addinventory
            },
            {
                stock_quantity: addinvresponse.howmanyadd
            }
        ]  , function(err, res) {
            console.log("you definitely added " + addinvresponse.howmanyadd + addinvresponse.addinventory + "s!");
        }
       
      );
    console.log(addinvquery.sql);
    options();
    // * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
});
}


function addproduct() {
    console.log("ADD NEW PRODUCTS");
        inquirer
          .prompt([
            {
            type: "input",
            message: "What product would you like to add?",
            name: "addinventory"
            },
            {
            type: "input",
            message: "How many would you like to add?",
            name: "howmanyadd"
            },
            {
            type: "input",
            message: "Which department does this fall under?",
            name: "whatdepartment"
            },
            {
            type: "input",
            message: "How much should it cost?",
            name: "newproductcost"
            },
            {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
            }
        ]).then(function(addinvresponse) {
            console.log(" ------- adding new product... ------- ")
            connection.query("INSERT INTO products SET ?", addinvresponse.input, function (err, res) {
                if (err) throw err;
                console.log("you definitely added " + addinvresponse.howmanyadd + addinvresponse.addinventory + "s!");
            connection.end();
            }); 
        });
    }
            // connection.query("INSERT INTO products SET ?", function (err, res) 
            //     {
            //         product_name: addinvresponse.addinventory
            //     },
            //     {
            //         stock_quantity: addinvresponse.howmanyadd
            //     },
            //     {
            //         department_name: addinvresponse.whatdepartment
            //     },
            //     {
            //         price: addinvresponse.newproductcost
            //     },
            // ]  , function(err, res) {
            //     console.log("you definitely added " + addinvresponse.howmanyadd + addinvresponse.addinventory + "s!");
            // }
           
        //   );
        // console.log(addinvquery.sql);
        // options();
        // * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
    // });
    // });        

//}
