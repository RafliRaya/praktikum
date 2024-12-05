// Atribut container1 dan container2
const bgColor = document.querySelectorAll("#container1, #container2");
for (let i = 0; i < bgColor.length; i++) {
  bgColor[i].style.backgroundColor = "#00FFFF";
}

// Atribut container3
const lisCont3 = document.getElementsByTagName("li");
for (let i = 0; i < lisCont3.length; i++) {
  lisCont3[i].style.backgroundColor = "grey";
  lisCont3[i].textContent = `List Baru ${i + 1}`; // Menggunakan template literal
  lisCont3[i].style.fontFamily = "Comic Sans MS"; // Menambahkan spasi pada nama font
}
