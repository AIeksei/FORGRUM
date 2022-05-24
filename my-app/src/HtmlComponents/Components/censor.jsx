function censor(){
    let censorArr = ["ВОЙНА", "УКРАИНА", "БАЙДЕН", "ДАУН"]
    let text = document.getElementById("test").value.toUpperCase()
    for (let i = 0; i < censorArr.length;i++ ){
        let flag = true;
        while (flag){
        if (text.indexOf(censorArr[i]) > -1) {
           text = text.replace(censorArr[i], "***")
           flag = true;
         } else {flag = false}
        }
    }
}
  export {censor};
  