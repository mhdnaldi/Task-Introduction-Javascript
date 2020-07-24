// input object
let data = {
  id: 1,
  name: 'Lianne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas light',
    suite: 'Apt. 556',
    city: 'Gweenborough',
    zipcode: '92998-3874'
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org'
}

// Soal A
// deklarasikan variabel baru dengan berisi object data user
let myData = {name: 'M.Rinaldi', email:'Mhd.naldi@yahoo.com', hobby: ['ngoding', 'nonton', 'tidur']}
// lakukan spread operator terhadap object data dengan memasukkan variabel baru untuk memasukkan newData kedalam data
data = {...data, ...myData};

// Soal B
// lakukan destructuring object terhadap object data.address
let {street, city} = data.address

// Output
console.log(data);
console.log(street);
console.log(city);