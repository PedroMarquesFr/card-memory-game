const DEFAULT_BLOCK_SIZE = 4;
for (let i = 0; i < DEFAULT_BLOCK_SIZE; i += 1) {
  const row = document.createElement("div");
  row.classList.add("row");
  document.querySelector(".wrap").appendChild(row);
  blocks(row);
}

let arr = [0, 0, 0, 0, 0, 0, 0];

function defineIcon(remainingIcons) {
  arr[Math.ceil(Math.random() * 8)];
}

function blocks(row) {
  for (let u = 0; u < DEFAULT_BLOCK_SIZE; u += 1) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.innerHTML = `<img src="svgs/${Math.ceil(
      Math.random() * 8
    )}.svg" alt="" />`;
    row.append(block);
  }
}

//document.querySelector(".row").innerHTML = '<div class="block"></div>';
