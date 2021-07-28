function sortRows() {
    let rows, switching, i, x, y, shouldSwitch
    switching = true
    while (switching) {
      switching = false;
      rows = document.querySelectorAll('.progress-bar__cover')

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
      }
    }
  }

function checkScreenWidth () {

  const pageContent = document.querySelector('.page-content')
  const customNavs = document.querySelector('.navs-custom')

  const timeLine = document.querySelectorAll('.date-expiring')
  const markLine = document.querySelectorAll('.mark-line')

  if (window.screen.width < 993) {
    pageContent.classList.remove('align-items-start')
    pageContent.classList.add('align-items-center', 'flex-column')

    customNavs.classList.remove('flex-column')

    for (const line of timeLine) {
      line.classList.remove('col-8')
      line.classList.add('col-7')
    }

    for (const line of markLine) {
      line.classList.remove('col-2')
      line.classList.add('col-5')
    }
  }
}

checkScreenWidth()
sortRows()