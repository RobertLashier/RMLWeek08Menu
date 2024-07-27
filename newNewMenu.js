// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

// Name and purpose of menu app for customer orders for a tack shop business

// Class for items ordered and in what quantity
class Order {
  //constructor to instantiate object with parameters
  constructor(item, quantity) {
    //variable to accept argument (value) for parameter
    this.item = item;
    this.quantity = quantity;
  }
}

// Menu class, to create a menu
class Menu {
  constructor() {
    this.items = [];
    this.selectedItem = null; // select one item at a time
  }

  start() {
    // *******entry point to application
    let selection = this.showItemMenuOptions();
    while (selection != 0) {
      // switch to accept user choice to create, view, or delete an item
      //chosen by case instance
      switch (selection) {
        case "1":
          this.addItem();
          break;
        case "2":
          this.viewShoppingCart();
          break;
        case "3":
          this.deleteItem();
          break;
        // dropthrough to exit menu
        default:
          selection = 0;
      }
      // accepting argument from user prompt, passing to switch
      selection = this.showItemMenuOptions();
    }
    alert("Thank you for shopping with us!");
  }

  // prompt menu generated for user to see choices
  // and return choice to switch
  showItemMenuOptions() {
    return prompt(`
    0) exit
    1) Add item to Shopping Cart
    2) View Shopping Cart
    3) Delete an item from Cart
    `);
  }

  // view method to see all items in the array (shopping cart)
  viewShoppingCart() {
    console.log(this.items);
    //declare variable for display
    let itemString = "";
    // for loop to cycle though array
    for (let i = 0; i < this.items.length; i++) {
      // populate variable to concatenate array elements for display
      // off units ordered and product type
      itemString +=
        i +
        ") " +
        this.items[i].quantity +
        " units of " +
        this.items[i].item +
        `\n`;
    }
    // alert to display array (shopping cart items)
    alert(itemString);
  }
  // method to add item to array using push method(cart)
  addItem() {
    // declare variable for prompt for item desired customer input
    let itemName = prompt("Add a new item to the cart: ");
    // declare variable for prompt for quntity of item customer input
    //I was especially happy to use literal to generate the item name in the prompt
    let itemQuantity = prompt(`Add number of ${itemName} to the cart: `);
    // push method to add new array element (cart item) to end of string
    this.items.push(new Order(itemName, itemQuantity));
    //this.quantities.push(new Order(itemQuantity));
  }

  // method to delete item from array (cart)
  deleteItem() {
    //asking user for number of selection to be deleted (index of array)
    let index = prompt(
      "Enter the order number of the item that you wish to delete: "
    );
    // if statement to set conditions for removing array element by index
    if (index > -1 && index < this.items.length) {
      // using splice method
      this.items.splice(index, 1);
    }
  }
}
// declaring a new instance of the Menu class to add the start method
//    and begin the program
let menu = new Menu();
menu.start();
