let labels1 = ['FEMMES', 'HOMMES', 'ENFANTS MINEURS'];
let data1 = [146, 27, 25];
let colors1 = ['#e7e1ef','#c994c7','#dd1c77'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['FEMMES', 'HOMMES', 'ENFANTS MINEURS'],
        datasets: [ {
            data: [146, 27, 25],
            backgroundColor: ['#dd1c77','#c994c7','#e7e1ef'],
            borderColor : ['#000000','#000000','#000000']
        }]
    },
    options: {
        title: {
            text: "LES VIOLENCES AU SEIN DU COUPLE EN 2019 :",
            labelscolor: ["#5EDC1F "],
            display: true
        }
    }
});

// let labels2 = ['American Airlines Group', 'Ryanair', 'China Southern Airlines', 'Lufthansa Group'];
// let data2 = [199.6, 130.3, 126.3, 130];
// let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

// let myChart2 = document.getElementById("myChart2").getContext('2d');

// let chart2 = new Chart(myChart2, {
//     type: 'bar',
//     data: {
//         labels: labels2,
//         datasets: [ {
//             data: data2,
//             backgroundColor: colors2
//         }]
//     },
//     options: {
//         title: {
//             text: "Number of passengers carried in 2017 (in mio.)",
//             display: true
//         },
//         legend: {
//           display: false
//         }
//     }
// });


let labels3 = ['victimes','Personne entourage','Porte plainte','Conjoint ou ex-conjoint' , ];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [
          {
            label: 'victimes de violences physiques et/ou sexuelles',
            fill: true,
            backgroundColor: "rgba(179, 181, 198, 0.2)",
            borderColor: "rgba(179, 181, 198, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179, 181, 198, 1)",
            data: [213000, 0, 38340,213000]
          },
          {
            label: 'victimes de viols et/ou de tentatives de viol',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [94000, 85540, 11280, 44180]
          }
        ]
    },
    options: {
        title: {
            text: "Femmes âgées de 18 à 75 ans",
            display: true
        }
    }
});

// let labels4 = ['Germany', 'France', 'UK', 'Italy', 'Spain', 'Others(23)'];
// let data4 = [83, 67, 66, 61, 47, 187];
// let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

// let myChart4 = document.getElementById("myChart4").getContext('2d');

// let chart4 = new Chart(myChart4, {
//     type: 'radar',
//     data: {
//         labels: labels4,
//         datasets: [ {
//             data: data4,
//             backgroundColor: colors4
//         }]
//     },
//     options: {
//         title: {
//             text: "Population of the European Union (in mio)",
//             display: true
//         }
//     }
// });