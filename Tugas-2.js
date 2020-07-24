// Deklarasi variable nilai UN
const bhsIndonesia = 80;
const bhsInggris = 90;
const matematika = 70;
const ipa = 70;

// Function cek rata-rata nilai
let rata = () => {
  return (bhsIndonesia + bhsInggris + matematika + ipa) / 4;
}
console.log(`Rata-rata = ${rata()}`)

// Cek grade
// if statements
// if(rata() >= 90 && rata() <= 100) {
//   console.log('Grade A');
// } else if(rata() >= 80 && rata() <= 89){
//   console.log('Grade B');
// } else if(rata() >= 70 && rata() <= 79){
//   console.log('Grade C');
// } else if(rata() >= 60 && rata() <= 69){
//   console.log('Grade D');
// } else if(rata() >= 0 && rata() <= 59){
//   console.log('Grade E');
// } else {
//   console.log('Ada yang salah');
// }

// Ternary operator
rata() >= 90 && rata() <= 100
  ? console.log("Grade A")
  : rata() >= 80 && rata() <= 89
  ? console.log("Grade B")
  : rata() >= 70 && rata() <= 79
  ? console.log("Grade C")
  : rata() >= 60 && rata() <= 69
  ? console.log("Grade D")
  : rata() >= 0 && rata() <= 59
  ? console.log("Grade E")
  : console.log("Ada yang salah")
