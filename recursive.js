// ? ======================================
// ?              RECURSION
// ? ======================================

//* Kendi kendi cagiran fonksiyona recursive fonksiyon denilir.
//* Özellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştırmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.

console.log(" *** RECURSION *** ");

//* ÖRNEK: Girilen sayınin faktoriyelini hesaplayan programi
//* recursive fonksiyonlar yardımıyla kodlayiniz.
//? FIBONACCI terimleri: n! = n * (n-1)!
//? Fakto(5) => 5.4.3.2

const fakto = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * fakto(n - 1);
  }
};

const number = +prompt("n:");

number < 0
  ? alert("Number should be bigger than zero")
  : console.log(`Fakto(${number})= ${fakto(number)}`);
