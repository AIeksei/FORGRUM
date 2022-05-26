function SortListCount(flag) {
    let ul = document.getElementById("ul");
    let count = document.getElementsByClassName("count");
    let i, switching, shouldSwitch;
    switching = true;
    let li = ul.children;
    while (switching) {
        switching = false;
        for (i = 0; i < (li.length - 1); i++) {
            shouldSwitch = false;
            let a = parseInt(count[i].textContent)
            let b = parseInt(count[i + 1].textContent)
            if (flag) {
                if (a < b) {
                    shouldSwitch = true;
                    break;
                }
            } else if (a > b) {
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
export { SortListCount }
