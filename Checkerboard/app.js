const checkerboard = document.querySelector('.checkerboard');

for(let i = 0; i < 64; i++) {
    const item = document.createElement("div");
    item.classList.add("item", `item-${i}`); //item class exists so that if you need to select all of the items at once you can

    checkerboard.appendChild(item);
}

