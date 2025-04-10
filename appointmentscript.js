document.addEventListener('DOMContentLoaded', () => {
    const requestData = [
      { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' },
      { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' },
      { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' },
      { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' },
      { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' },
      { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' },
      { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' },
      { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' },
      { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' },
      { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' }
    ];
  
    const AppointmentData = [
        { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024', status: 'Completed' },
        { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' , status: 'Canceled'},
        { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' , status: 'Completed'},
        { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024', status: 'Canceled' },
        { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024', status: 'Completed' },
        { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024', status: 'Canceled' },
        { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' , status: 'Completed'},
        { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' , status: 'Canceled'},
        { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' , status: 'Completed'},
        { name: 'Sarah Lawson', gender: 'Female', dept: 'GIT', doctor: 'John Albert', time: '1:00 PM', date: '20 Nov, 2024' , status: 'Canceled'}
     
    ];
  

  
    const renderRequestTable = () => {
      const tbody = document.querySelector('#requestTable tbody');
      requestData.forEach(item => {
        const row = `
          <tr>
            <td>${item.name}</td>
            <td>${item.gender}</td>
            <td>${item.dept}</td>
            <td>${item.doctor}</td>
            <td>${item.time}</td>
            <td>${item.date}</td>
            <td>
              <i class="bi bi-check-circle-fill text-success status-icon"></i>
              <i class="bi bi-x-circle-fill text-danger status-icon ms-2"></i>
              <i class="fa-solid fa-ellipsis-vertical text-secondary ms-2"></i>
            </td>
          </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
      });
    };
  
    const renderListTable = () => {
      const tbody = document.querySelector('#AppointmentData tbody');
      AppointmentData.forEach(item => {
        const badgeClass = item.status === 'Completed' ? 'bg-success' :'bg-warning text-dark' ;

        const row = `
          <tr>
            <td>${item.name}</td>
            <td>${item.gender}</td>
            <td>${item.dept}</td>
            <td>${item.doctor}</td>
            <td>${item.time}</td>
            <td>${item.date}</td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
          </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
      });
    };
  

  
    // Initialize
    renderRequestTable();
    renderListTable();

  });
  