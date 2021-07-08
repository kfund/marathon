function sortRows() {
    let rows, switching, i, x, y, shouldSwitch
    switching = true
    while (switching) {
      switching = false;
      rows = document.querySelectorAll('.progress-bar__cover')

      console.log(rows)

      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].querySelector('.progress-bar').getAttribute("aria-valuenow");
        y = rows[i + 1].querySelector('.progress-bar').getAttribute("aria-valuenow");
        if (Number(x) < Number(y)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        console.log(x, y)
      }
    }
  }

sortRows()