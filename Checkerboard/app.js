const checkerboard = document.querySelector('.checkerboard');
let i = 0;

do {
    const item = document.createElement("div");
    item.classList.add("item", `item-${i}`); //item class exists so that if you need to select all of the items at once you can
    checkerboard.appendChild(item);
    i++;
}
while(i < 64);