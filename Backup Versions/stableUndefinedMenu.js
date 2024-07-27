// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

// Name and purpose of menu app for customer orders for a tack shop business

// Class for items ordered in what quantity
class Order {
  constructor(item, quantity) {
    this.item = item;
    this.quantity = quantity;
  }
}

// Menu class, to create a menu
class Menu {
  constructor() {
    this.items = [];
    this.selectedItem = null; // select one item at a time
    this.quantities = [];
  }

  start() {
    // entry point to application
    let selection = this.showItemMenuOptions();
    while (selection != 0) {
      // switch to allow user to choose, view, or delete an item
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
      // accepting argument from user prompt
      selection = this.showItemMenuOptions();
    }
    alert("Thank you for shopping with us!");
  }

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
    //declare variable for display
    let itemString = "";
    // for loop to cycle though array
    for (let i = 0; i < this.items.length; i++) {
      // populate variable to concatenate array elements for display
      itemString +=
        i + ") " + this.items[i].item + " " + this.items[i].quantity + "\n";
    }
    // alert to display array (shopping cart items)
    alert(itemString);
  }
  // method to add item to array using push method(cart)
  addItem() {
    // declare variable for prompt for item desired customer input
    let itemName = prompt("Add a new item to the cart: ");
    // declare variable for prompt for quntity of item customer input
    //using literal to add item name to prompt
    let itemQuantity = prompt(`Add number of ${itemName} to the cart: `);
    // push method to add new array element (cart item) to end of string
    this.items.push(new Order(itemName));
    this.quantities.push(new Order(itemQuantity));
  }

  // method to delete item from array (cart)
  deleteItem() {
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
