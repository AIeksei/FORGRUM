function SortListTitle(e,title) {
    let  i, switching, shouldSwitch;
    switching = true;
    let li = e.children;
    while (switching) {
      switching = false;
      
      for (i = 0; i < (li.length - 1); i++) {
        shouldSwitch = false;
        if (title[i].innerHTML.toLowerCase() > title[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        li[i].parentNode.insertBefore(li[i + 1], li[i]);
        switching = true;
      }
    }
  }
export{SortListTitle}
  