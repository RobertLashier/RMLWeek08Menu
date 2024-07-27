// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

// Name and purpose of menu app Customers and their orders for a tack shop business

// Class for items ordered in what quantity
class Order {
  constructor(item, quantity) {
    this.item = item;
    this.quantity = quantity;
  }
  describe() {
    return `${this.quantity} units of ${this.item}`;
  }
}

//class for customer database and form to create orders
class Customer {
  constructor(customerName) {
    this.customerName = customerName;
    this.items = [];
  }

  addOrder(item) {
    if (item instanceof Order) {
      this.items.push(item);
    } else {
      throw new Error(`You can only add an item from our catalog. 
    Your entry is not an available item: ${item}`);
    }
  }

  describe() {
    return `${this.customerName} has ${this.items.length} items.`;
  }
}
class Menu {
  // what drives the application and our choices
  constructor() {
    this.customers = [];
    this.selectedCustomer = null; // select one customer at a time
  }

  start() {
    // entry point to application
    let selection = this.createCustomerRecord();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createCustomer();
          break;
        case "2":
          this.viewCustomer();
          break;
        case "3":
          this.deleteCustomer();
          break;
        default:
          selection = 0;
      }
      selection = this.createCustomerRecord();
    }
    alert("Thank you for shopping with us!");
  }

  createCustomerRecord() {
    return prompt(`
    0) exit
    1) create a new customer
    2) view a customer
    3) delete a customer
    `);
  }
}

let menu = new Menu();
menu.start();
