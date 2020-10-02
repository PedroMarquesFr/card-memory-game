const DEFAULT_BLOCK_SIZE = 4;
let arr = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [0, 7],
];

for (let i = 0; i < DEFAULT_BLOCK_SIZE; i += 1) {
  const row = document.createElement("div");
  row.classList.add("row");
  document.querySelector(".wrap").appendChild(row);
  blocks(row);
}

function defineIcon() {
  console.log("*");
  while (true) {
    console.log(arr);
    const choosen = Math.floor(Math.random() * arr.length);
    console.log(choosen);
    if (arr[choosen][0] >= 2) {
      arr.splice(choosen, 1);
    } else {
      arr[choosen][0] += 1;
      return arr[choosen][1];
    }
  }
}

function blocks(row) {
  for (let u = 0; u < DEFAULT_BLOCK_SIZE; u += 1) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.innerHTML = `<img src="svgs/${defineIcon()}.svg" alt="" />`;
    row.append(block);
  }
}

//document.querySelector(".row").innerHTML = '<div class="block"></div>';
