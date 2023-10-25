// 'use strict';
// //challenge 1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);

// const avgDolphins2 = calcAverage(85, 54,41);
// const avgKoalas2 = calcAverage(23, 34, 27);

// function checkWinner (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//     } else {
//         return 'no winner';
//     }
// }

// console.log(checkWinner(avgDolphins1, avgKoalas1));
// console.log(checkWinner(avgDolphins2, avgKoalas2));


// challenge 2
// function calcTip(bill){
//     var tip;
//     if(bill >= 50 && bill <= 300){
//         tip = bill * 0.15;
//     } else {
//         tip = bill * 0.2;
//     }
//     return tip;
// }
// calcTip(100);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [];
// for(let i = 0; i < bills.length; i++) {
//     totals.push(bills[i] + tips[i])
// }
// console.log(totals)
