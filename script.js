// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
type: 'bar',
data: {
labels: ['Sat.', 'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Friday'],
datasets: [
    {
        label: 'Men 33%',
        backgroundColor: '#00A8B580',
        data: [600, 650, 610, 650, 710, 910, 1000],
        barThickness: 10,
        borderRadius: 28,
        },
    {
    label: 'Women 67%',
    backgroundColor: '#FFA246',
    data: [800, 590, 710, 610, 900, 720, 980],
    barThickness: 10,
    borderRadius: 28,
    }
    
],
},
options: {
responsive: true,
plugins: {
    legend: {
    display: false 
    },
},
scales: {
    y: {
    beginAtZero: false,
    ticks: {
        stepSize: 100,
    },
    max: 1000,
    grid: {
        color: '#f0f0f0'
    }
    },
    x: {
    grid: {
        display: false
    },
    ticks:{
        color:'#000000',
        font: {
            weight: 'bold', // Optional: makes day labels bold
        }
    }
    }
}
}
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
