export const Storage = {
    saveItems: function(items) {
        localStorage.setItem('items', JSON.stringify(items));
    },
    getItems: function() {
        const items = localStorage.getItem('items');
        return items ? JSON.parse(items) : [];
    },
}