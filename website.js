
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