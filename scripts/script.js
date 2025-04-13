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
const listItems = document.querySelectorAll('.department-list li');

const donutChart = new Chart(donutCtx, {
type: 'doughnut',
data: {
labels: ['General Physician', 'ENT', 'Orthopedic', 'Dentist', 'Cardiology'],
datasets: [{
    data: [35, 15, 10, 25, 5],
    backgroundColor: ['#00A8B5', '#9446fa', '#74c7ce', '#f7912c', '#f9c700'],
    borderWidth: 2,
    borderColor: '#fff'
}]
},
options: {
cutout: '70%',
responsive: true,
maintainAspectRatio: false,
plugins: {
    legend: { display: false },
    tooltip: {
    enabled: false,
    external: function (context) {
        const tooltipModel = context.tooltip;
        let tooltipEl = document.getElementById('chartjs-tooltip');

        if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.className = 'chartjs-tooltip';
        document.body.appendChild(tooltipEl);
        }

        if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
        }

        const i = tooltipModel.dataPoints[0].dataIndex;
        const label = context.chart.data.labels[i];
        const value = context.chart.data.datasets[0].data[i];
        const color = context.chart.data.datasets[0].backgroundColor[i];
        const icons = [
        'images/generalPhysicianIcon.png',
        'images/entIcon.png',
        'images/orthopedicIcon.png',
        'images/dentistIcon.png',
        'images/cardiologyIcon.png'
        ];

        tooltipEl.innerHTML = `
        <div class="d-flex align-items-center gap-2 p-2 shadow-sm rounded" style="background:#fff; min-width: 140px;">
            <div class="d-flex justify-content-center align-items-center" style="width: 28px; height: 28px; background:${color}; border-radius:50%;">
            <img src="${icons[i]}" style="width: 16px;" />
            </div>
            <div>
            <div style="font-size: 13px; font-weight: 600;">${label}</div>
            <div style="font-size: 11px; color: #888;">${value}%</div>
            </div>
        </div>
        `;

        const pos = context.chart.canvas.getBoundingClientRect();
        tooltipEl.style.left = pos.left + window.pageXOffset + tooltipModel.caretX + 10 + 'px';
        tooltipEl.style.top = pos.top + window.pageYOffset + tooltipModel.caretY + 10 + 'px';
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.pointerEvents = 'none';
    }
    }
}
}
});

// Highlight effect
document.getElementById('donutChart').addEventListener('mousemove', function (evt) {
const points = donutChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
if (points.length) {
const index = points[0].index;
listItems.forEach((item, i) => {
    item.classList.toggle('highlighted', i === index);
    item.classList.toggle('dimmed', i !== index);
});
} else {
listItems.forEach(item => item.classList.remove('dimmed', 'highlighted'));
}
});

document.getElementById('donutChart').addEventListener('mouseleave', () => {
listItems.forEach(item => item.classList.remove('dimmed', 'highlighted'));
const tip = document.getElementById('chartjs-tooltip');
if (tip) tip.style.opacity = 0;
});



// Calendar

new Pikaday({
field: document.getElementById('calendar'),
bound: false,
container: document.getElementById('calendar-display'),
format: 'MMMM D, YYYY',
defaultDate: new Date(2024, 11, 8),
setDefaultDate: true,
firstDay: 6, // This ensures the calendar starts on Saturday
yearRange: [2024, 2025]
});



