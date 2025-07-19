import {addItems} from './inventory.js';

function renderItems(items) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  items.forEach((item) => {
    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.stock}</td>
        <td>${item.unit}</td>
        <td>${item.price}</td>
        <td>
          <button class="edit-btn" data-id="${item.id}">✏️ Edit</button>
        </td>
      </tr>`;
    tableBody.innerHTML += row;
  });

  // Tambahkan event listener ke tombol edit setelah render
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", handleEditClick);
  });
}
