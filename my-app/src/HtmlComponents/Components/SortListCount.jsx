function SortListCount(e,count) {
    let  i, switching, shouldSwitch;
    switching = true;
    let li = e.children;
    while (switching) {
      switching = false;
      for (i = 0; i < (li.length - 1); i++) {
        shouldSwitch = false;
        console.log(count[i].value);
        if (count[i] > count[i + 1]) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        li[i].parentNode.insertBefore(li[i + 1], li[i]);
        switching = true;
      }
      console.log(li)
    }
  }
export{SortListCount}
  