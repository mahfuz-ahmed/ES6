const ages = [20, 23, 24];
const age2 = [27, 21, 23];
const age3 = [12, 15, 16];
const allAges = ages.concat(age2).concat([9]).concat(age3);
const allAges2 = [...ages, ...age2, 5, ...age3];
// console.log(allAges);
console.log(allAges2);

const business = 700;
const engineer = 1000;
const doctor = 900;
const member = [400, 200, 150, 600];

const maximum = Math.max(business, engineer, doctor);
const maximum2 = Math.max(...member);

console.log(maximum);
console.log(maximum2);
