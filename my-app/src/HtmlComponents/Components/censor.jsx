function censor(text){
    let censorArr = ["ВОЙНА", "УКРАИНА", "БАЙДЕН", "ДАУН"]
    text = text.toUpperCase()
    for (let i = 0; i < censorArr.length;i++ ){
        let flag = true;
        while (flag){
        if (text.indexOf(censorArr[i]) > -1) {
           text = text.replace(censorArr[i], "***")
           flag = true;
         } else {flag = false}
        }
    }
    return(text)
}
  export {censor};
