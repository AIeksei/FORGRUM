
function FindingBranches(input, finder) {
    let ul = document.getElementById("ul");
    let li = ul.children;
    input.addEventListener('keyup', function () {
        let filter = input.value.toUpperCase();
        let word;
        for (let i = 0; i < li.length; i++) {
            word = finder[i];
            if (word.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    })
    ul.addEventListener('click', function () {
        ul.before(input);
    });
}
export { FindingBranches }