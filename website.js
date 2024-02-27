
/* dropdown buttons*/
window.onclick = function(event) {
  if (!event.target.matches('#privateButton')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
}

/*side Pannel */
function toggleSidePanel() {
  var sidePanel = document.getElementById('sidePanel');
  sidePanel.style.width = (sidePanel.style.width === '250px') ? '0' : '250px';
}

function closeSidePanel() {
  var sidePanel = document.getElementById('sidePanel');
  sidePanel.style.width = '0';
}





document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  function updateCalendar() {
      const calendarContainer = document.getElementById("calendar");
      calendarContainer.innerHTML = "";

      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
      const numberOfDays = lastDayOfMonth.getDate();

      document.getElementById("currentMonth").innerText = `${firstDayOfMonth.toLocaleString('default', { month: 'long' })} ${currentYear}`;

      for (let i = 1; i <= numberOfDays; i++) {
          const dayElement = document.createElement("div");
          dayElement.classList.add("day");
          dayElement.innerText = i;

          // Beispiel: Klicke auf einen Tag, um ein Ereignis hinzuzufügen
          dayElement.addEventListener("click", function () {
              const eventText = prompt("Ereignis eingeben:");
              if (eventText) {
                  const eventElement = document.createElement("div");
                  eventElement.classList.add("event");
                  eventElement.innerText = eventText;
                  dayElement.appendChild(eventElement);
              }
          });

          calendarContainer.appendChild(dayElement);
      }
  }

  document.getElementById("prevMonth").addEventListener("click", function () {
      if (currentMonth > 0) {
          currentMonth--;
      } else {
          currentMonth = 11;
          currentYear--;
      }
      updateCalendar();
  });

  document.getElementById("nextMonth").addEventListener("click", function () {
      if (currentMonth < 11) {
          currentMonth++;
      } else {
          currentMonth = 0;
          currentYear++;
      }
      updateCalendar();
  });

  updateCalendar();
});