const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
});

document.getElementById("cards").onmousemove = e => {
for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}
document.addEventListener('DOMContentLoaded', function() {
const menuItems = document.getElementById('menu-items');
const backgroundDivs = document.querySelectorAll('.menu-background-pattern div');

console.log('Menu items found:', menuItems);
console.log('Background divs found:', backgroundDivs);

menuItems.addEventListener('mouseenter', () => {
  console.log('Hover started!');
  backgroundDivs.forEach(div => {
    div.style.backgroundPosition = '-30vw 0vw !important';
    div.style.backgroundColor = 'red'; // Temporary to test
  });
});

menuItems.addEventListener('mouseleave', () => {
  console.log('Hover ended!');
  backgroundDivs.forEach(div => {
    div.style.backgroundPosition = '0vw 0vw';
    div.style.backgroundColor = ''; // Reset
  });
});

});s