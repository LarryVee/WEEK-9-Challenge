// challenge 1

// Arrow Function for Averages
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Calculate Averages for Both Teams
const hideeAvg = calcAverage(44, 23, 71);
const silasAvg = calcAverage(65, 54, 49);

// 3. Determine the Winner
const checkWinner = (avgHidee, avgSilas) => {
  if (avgHidee >= 2 * avgSilas) {
    console.log(`Hidee wins (${avgHidee} vs ${avgSilas})`);
  } else if (avgSilas >= 2 * avgHidee) {
    console.log(`Silas wins (${avgSilas} vs ${avgHidee})`);
  } else {
    console.log("No team wins");
  }
};

// 4. Test the Function
checkWinner(hideeAvg, silasAvg); // Silas wins (56 vs 46)
const hideeAvg2 = calcAverage(85, 54, 41);
const silasAvg2 = calcAverage(23, 34, 27);
checkWinner(hideeAvg2, silasAvg2); // Hidee wins (60 vs 28)

// challenge 2

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

/* 
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/LarryVee/WEEK-9-Challenge.git
git push -u origin main
*/
console.log(calcTip(100)); // output: 15
// Use Arrays:

const bills = [125, 555, 44];
const tips = bills.map((bill) => calcTip(bill));
const total = bills.map((bill, index) => bill + tips[index]);

console.log(tips); // output: [18.75, 111, 8.8]
console.log(total); // output: [143.75, 666, 52.8]

// Challenge 3

// creating objects for Yinka Biobaku and Moyo Oladapo
let yinka = {
  fullName: "Yinka Biobaku",
  mass: 78,
  height: 1.69,

  // method to calculate BMI
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

let moyo = {
  fullName: "Moyo Oladapo",
  mass: 92,
  height: 1.95,

  // method to calculate BMI
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// calling calcBMI method to calculate BMI and storing the BMI as a property
yinka.calcBMI();
moyo.calcBMI();

// comparing BMIs and logging the person with the higher BMI
if (yinka.bmi > moyo.bmi) {
  console.log(
    `${yinka.fullName}'s BMI (${yinka.bmi}) is higher than ${moyo.fullName}'s (${moyo.bmi})`
  );
} else if (moyo.bmi > yinka.bmi) {
  console.log(
    `${moyo.fullName}'s BMI (${moyo.bmi}) is higher than ${yinka.fullName}'s (${yinka.bmi})`
  );
} else {
  console.log(
    `${yinka.fullName}'s BMI (${yinka.bmi}) and ${moyo.fullName}'s BMI (${moyo.bmi}) are the same!`
  );
}
