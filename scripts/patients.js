const upcomingAppointments = [
    { date: '23.12.2020', type: 'Examine', specialist: 'John Albert', status: 'Confirmed' },
    { date: '19.12.2020', type: 'Follow-Up', specialist: 'John Albert', status: 'Canceled' },
    { date: '19.12.2020', type: 'Follow-Up', specialist: 'John Albert', status: 'Pending' },
    { date: '25.12.2020', type: 'Examine', specialist: 'John Albert', status: 'Confirmed' }
  ];

  const pastAppointments = [
    { date: '10.11.2020', type: 'Consultation', specialist: 'Jane Doe', status: 'Completed' },
    { date: '22.10.2020', type: 'Check-Up', specialist: 'Adam Smith', status: 'Completed' }
  ];

  const prescriptions = [
    { date: '26.10.2020', diagnosis: 'Dyspepsia', department: 'GIT' },
    { date: '12.10.2020', diagnosis: 'Symptoms', department: 'GIT' }
  ];

  function renderAppointments(list, containerId) {
    let html = '';
    list.forEach(item => {
      let badgeClass = {
        'Confirmed': 'success',
        'Canceled': 'danger',
        'Pending': 'warning',
        'Completed': 'secondary'
      }[item.status] || 'secondary';

      html += `<div class="d-flex justify-content-between border-bottom py-2">
          <div>
            <strong>${item.date}</strong><br>${item.type} - ${item.specialist}
          </div>
          <span class="badge bg-${badgeClass}">${item.status}</span>
        </div>`;
    });
    document.getElementById(containerId).innerHTML = html;
  }

  function renderPrescriptions() {
    let html = '';
    prescriptions.forEach(item => {
      html += `<div class="d-flex justify-content-between border-bottom py-2">
        <div>
          <strong>${item.date}</strong><br>${item.diagnosis}
        </div>
        <span>${item.department}</span>
      </div>`;
    });
    document.getElementById('prescriptions').innerHTML = html;
  }

  renderAppointments(upcomingAppointments, 'upcomingAppointments');
  renderAppointments(pastAppointments, 'pastAppointments');
  renderPrescriptions();