import {addItems, getItem} from './inventory.js';
import {renderItems} from './ui.js';

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const stock = parseInt(document.getElementById('stock').value, 10);
    const unit = document.getElementById('unit').value;
    const price = parseFloat(document.getElementById('price').value);

    if (id && name && category && stock >= 0 && unit && price >= 0) {
        const newItem = new Item(id, name, category, stock, unit, price);
        addItems(newItem);
        renderItems(getItem());
        this.reset(); // Reset form fields
    } else {
        alert('Please fill all fields correctly.');
    }
})

function handleEditClick(e) {
  const itemId = e.target.getAttribute("data-id");
  const item = getItems().find((i) => i.id == itemId);

  // Pre-fill form dengan data lama
  document.getElementById("name").value = item.name;
  document.getElementById("category").value = item.category;
  document.getElementById("stock").value = item.stock;
  document.getElementById("unit").value = item.unit;
  document.getElementById("price").value = item.price;

  // Simpan ID item yang sedang diedit
  document.getElementById("form").setAttribute("data-edit-id", itemId);
}
