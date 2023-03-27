function addItem() {
    const inputLine = document.querySelector('#newItemText').value;
     const li = document.createElement('li');
    li.textContent = inputLine;
    const deleted = document.createElement('a');
    deleted.href = '#';
    deleted.textContent = '[Delete]';
    li.appendChild(deleted);
    deleted.addEventListener('click', () => li.remove());
   
    const list = document.getElementById('items');
    list.appendChild(li);
  
}