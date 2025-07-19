class Item {
  constructor(id, name, category, stock, unit, price) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.stock = stock;
    this.unit = unit;
    this.price = price;
  }
}

import { Storage } from './storage.js';

let items = Storage.getItems();

function addItems(newItem) {
  items.push(newItem);
  Storage.saveItems(items);
}

function removeItem(itemId) {
  items = items.filter(item => item.id !== itemId);
  Storage.saveItems(items);
}
