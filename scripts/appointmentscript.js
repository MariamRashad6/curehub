// Tables
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
              <img src="images/checkIcon.png" class="status-icon" height=25/>
              <img src="images/crossIcon.png" class="status-icon ms-3" height=25/>
              <img src="images/dotsIcon.png" class="status-icon ms-2" height=18/>
            </td>
          </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
      });
    };
  
    const renderListTable = () => {
      const tbody = document.querySelector('#AppointmentData tbody');
      AppointmentData.forEach(item => {
        const badgeClass = item.status === 'Completed' ? 'confirm' :'canceled' ;

        const row = `
          <tr>
            <td>${item.name}</td>
            <td>${item.gender}</td>
            <td>${item.dept}</td>
            <td>${item.doctor}</td>
            <td>${item.time}</td>
            <td>${item.date}</td>
            <td><span class="badge ${badgeClass}">${item.status}</span>
            <i class="fa-solid fa-ellipsis-vertical text-secondary ms-2"></i></td>
          </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
      });
    };
  

  
    // Initialize
    renderRequestTable();
    renderListTable();

  });
  

  // Calendar
  const calendarTrigger = document.getElementById("calendarTrigger");
  const calendarInput = document.getElementById("calendarInput");
  const scheduleSection = document.querySelector(".schedule-section");
  
  const calendar = flatpickr(calendarInput, {
    mode: "range",
    dateFormat: "d M Y",
    allowInput: false,
    defaultDate: ["2024-11-01", "2024-11-07"],
    onOpen: () => {
      scheduleSection.classList.add("faded");
    },
    onClose: () => {
      scheduleSection.classList.remove("faded");
    },
    onChange: function (selectedDates) {
      if (selectedDates.length === 2) {
        const monthName = selectedDates[0].toLocaleString("default", { month: "long" });
        calendarTrigger.innerHTML = `<i class="fa-regular fa-calendar me-2"></i> ${monthName}`;
        calendar.close();
      }
    }
  });
  
  // Open calendar on button click
  calendarTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    calendar.open();
  });
  
  // Close calendar if clicked outside
  document.addEventListener("click", (e) => {
    const flatpickrPopup = document.querySelector(".flatpickr-calendar");
  
    if (
      flatpickrPopup &&
      !flatpickrPopup.contains(e.target) &&
      !calendarTrigger.contains(e.target)
    ) {
      calendar.close();
    }
  });
  

  // Reposition on window resize
  window.addEventListener("resize", () => {
    if (!calendarContainer.classList.contains("d-none")) {
      const rect = trigger.getBoundingClientRect();
      calendarContainer.style.top = `${rect.bottom + window.scrollY + 8}px`;
      calendarContainer.style.left = `${rect.left + window.scrollX}px`;
    }
  });




