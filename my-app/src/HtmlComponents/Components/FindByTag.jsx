
    function MainFunc(e, input) {
        let li = e.children;
        input.addEventListener('keyup', function(){
         let filter = input.value.toUpperCase();
         let word;
         for (let i = 0; i < li.length; i++) {
            word = li[i];
            if (word.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            } else {
            li[i].style.display = "none";
            }
            }
        } )
        e.addEventListener('click',function(){
            e.before(input);
        });
        }
    export {MainFunc}