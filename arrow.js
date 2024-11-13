// ? =====================
// ?         FUNCTIONS
// ? =====================

console.log(" *** ARROW *** ");

//* ORNEK: 3 sayinin en buyugunu bulan fonks.
// ************************************************* /

//? Arrow

const kareAl = (num) => num * num;
const topla = (s1, s2) => s1 + s2;
const ciktiVer = () => console.log("Merhaba");

console.log("KARE:", kareAl(4));
console.log("TOPLA:", topla(4, 5));
ciktiVer();

//* ORNEK: 3 sayinin en buyugunu bulan fonks.
// ***************************************** /
//! Süslü parantez kullanıldığıda otomatik returning ozelligi kaybolur
const findBiggest = (n1, n2, n3) => {
  let biggest = n1;

  if (n2 >= biggest) {
    biggest = n2;
  }
  if (n3 >= biggest) {
    biggest = n3;
  }
  return biggest;
};

console.log("BIGGEST:", findBiggest(1, 3, 2));

//? Alternatif olarak
const findBiggestShort = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log("BIGGEST:", findBiggestShort(1, 3, 2));
