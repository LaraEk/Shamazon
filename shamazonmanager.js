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
    options();
});

// function shamazon() {
//     console.log("it's working!");
// }

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
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    for (var i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].item_id + " | Product: " + res[i].product_name + " | Price: " + res[i].price + " | Quantity: " + res[i].stock_quantity);
    }
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    console.log("Please press the down-arrow to continue.");
    });
    // * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
    options();
}

function viewlowinv() {
    console.log("VIEW LOW INVENTORY");
    connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    for (var i = 0; i < res.length; i++) {
        if (res[i].stock_quantity < 5) {
        console.log("ID: " + res[i].item_id + " | Product: " + res[i].product_name + " | Price: " + res[i].price + " | Quantity: " + res[i].stock_quantity);
        }
    }
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    console.log("Please press the down-arrow to continue.");
    });
    options();
// * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.
}

function addinv() {
    console.log("ADD TO INVENTORY");
    connection.query("UPDATE products SET ? WHERE ?", 
    [
        {
            product_name: ""
        },
        {
            stock_quantity: ""
        }
    ]
    
    function (err, res) {
    if (err) throw err;
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    for (var i = 0; i < res.length; i++) {
        if (res[i].stock_quantity < 5) {
        console.log("ID: " + res[i].item_id + " | Product: " + res[i].product_name + " | Price: " + res[i].price + " | Quantity: " + res[i].stock_quantity);
        }
    }
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    console.log("Please press the down-arrow to continue.");
    });
    options();
    // * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
}

function addproduct() {
    console.log("add new products");
    console.log("ADD NEW PRODUCTS");
    connection.query("ALTER TABLE shamazon_db.products ADD ?", function (err, res) {
    if (err) throw err;
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    for (var i = 0; i < res.length; i++) {
        if (res[i].stock_quantity < 5) {
        console.log("ID: " + res[i].item_id + " | Product: " + res[i].product_name + " | Price: " + res[i].price + " | Quantity: " + res[i].stock_quantity);
        }
    }
    console.log("------------------------------ ƪ(`▿▿▿▿´ƪ) ------------------------------");
    console.log("Please press the down-arrow to continue.");
    });
    options();

    // * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
}


