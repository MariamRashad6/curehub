// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
type: 'bar',
data: {
labels: ['Sat.', 'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Friday'],
datasets: [
    {
    label: 'Women 67%',
    backgroundColor: '#f39c12',
    data: [500, 600, 700, 800, 900, 700, 950],
    },
    {
    label: 'Men 33%',
    backgroundColor: '#1abc9c',
    data: [400, 450, 500, 600, 750, 600, 700],
    },
],
},
options: {
responsive: true,
plugins: { legend: { position: 'top' } },
scales: {
    y: {
    beginAtZero: true,
    ticks: { stepSize: 100 },
    },
},
},
});

// Donut Chart
const donutCtx = document.getElementById('donutChart').getContext('2d');
new Chart(donutCtx, {
type: 'doughnut',
data: {
labels: ['General Physician', 'ENT', 'Orthopedic', 'Dentist', 'Cardiology'],
datasets: [{
    data: [35, 15, 10, 25, 5],
    backgroundColor: ['#17a2b8', '#8e44ad', '#e67e22', '#ffc107', '#f1c40f'],
    borderWidth: 2,
}],
},
options: {
cutout: '70%',
plugins: {
    legend: { display: false },
},
},
});


// Inline Calendar using Pikaday
new Pikaday({
field: document.getElementById('calendar'), 
bound: false,
container: document.getElementById('calendar-display'),
format: 'MMMM D, YYYY',
defaultDate: new Date(2024, 11, 8), 
setDefaultDate: true,
firstDay: 6, 
yearRange: [2024, 2025]
});
