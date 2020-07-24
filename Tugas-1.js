// deklarasikan object biodata
let biodata = {
  name: "M. Rinaldi",
  age: 23,
  hobbies: ["nonton", "ngoding", "tidur"],
  isMarried: false,
  schoolList: [
    {
      name: "SD Kemala Bhayangkari Medan",
      yearIn: 2003,
      yearOut: 2009,
      major: null,
    },

    {
      name: "SMP Harapan 1 Medan",
      yearIn: 2009,
      yearOut: 2012,
      major: null,
    },
    {
      name: "SMA Harapan 1 Medan",
      yearIn: 2012,
      yearOut: 2015,
      major: "IPA",
    },
    {
      name: "Universitas Prima Indonesia",
      yearIn: 2015,
      yearOut: 2019,
      major: "Teknik Informatika",
    },
  ],
  skills: [
    {
      skillName: 'HTML5',
      level: 'Advanced'
    },
    {
      skillName: 'CSS3',
      level: 'Advanced'
    },
    {
      skillName: 'Javascript',
      level: 'Advanced'
    },
    {
      skillName: 'PHP',
      level: 'Beginner'
    },
    {
      skillName: 'NodeJS',
      level: 'Beginner'
    },
    {
      skillName: 'Laravel',
      level: 'Beginner'
    },
    {
      skillName: 'Bootstrap4',
      level: 'Advanced'
    },
    {
      skillName: 'ExpressJS',
      level: 'Beginner'
    },
    {
      skillName: 'VueJS',
      level: 'Beginner'
    },
    {
      skillName: 'ReactJS',
      level: 'Beginner'
    },
    {
      skillName: 'MySQL',
      level: 'Beginner'
    },
    {
      skillName: 'NoSQL',
      level: 'Beginner'
    }
  ],
  interestInCoding: true
};

// Output
console.log(`Nama = ${biodata.name}`)
console.log(`Umur = ${biodata.age}`)
console.table(biodata.hobbies);
console.log(`Sudah menikah = ${biodata.isMarried}`);
console.table(biodata.schoolList);
console.table(biodata.skills)
console.log(`Suka ngoding = ${biodata.interestInCoding}`);