// Deklarasikan variabel
let printSegitiga = 5;

// Lakukan pengkondisian
if (typeof printSegitiga === "number") {
  // variabel baru untuk menampung string
  let str = "";
  // lakukan perulangan bersarang
  for (let i = printSegitiga; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
} else {
  console.log("Data harus number");
}
