// Select the element
const element = document.getElementById('item2');

// Add event listeners for mouseenter and mouseleave
element.addEventListener('mouseenter', () => {
    var items = document.getElementsByClassName("item-row-selected");
    items[0].classList.remove("item-row-selected");
    element.classList.add('item-row-selected');
});

element.addEventListener('mouseleave', () => {
    element.classList.remove('item-row-selected');
    document.getElementById("item1").classList.add("item-row-selected");
});
// Select the element
const element2 = document.getElementById('item3');

// Add event listeners for mouseenter and mouseleave
element2.addEventListener('mouseenter', () => {
    var items = document.getElementsByClassName("item-row-selected");
    items[0].classList.remove("item-row-selected");
    element2.classList.add('item-row-selected');
});

element2.addEventListener('mouseleave', () => {
    element2.classList.remove('item-row-selected');
    document.getElementById("item1").classList.add("item-row-selected");
});