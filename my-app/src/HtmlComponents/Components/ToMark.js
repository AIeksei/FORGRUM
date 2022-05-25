function toMark(){

}
function checkForMarks(text){

    let newText = text;
    let text2 = text;
    let word;
    for(let i = 0;i<text.length-1;i++){
        let indexDog = text2.indexOf("@"); 
        //text2 = @cloun, ты ебанат и мудак, а @pidor - ваще тупой
        //indexDog = 0

        console.log("Ищем собаку в тексте " + text2 );
        if(indexDog != -1){
            console.log("Нашли собаку. Индекс: "+ indexDog);
            text2 = text2.slice(indexDog+1);
            indexDog = 0;
            let indexSpace = Math.min(text2.indexOf(" "), text2.indexOf(",")); // 6
            console.log("Ищем конец слова "+ text2);
            console.log("Индекс конца слова "+ indexSpace);
            
            if(indexSpace != -1){
                word = text2.substring(indexDog,indexSpace); //@clown
                console.log("Нашли слово: "+ word);
                
            }
            else{
                word = text2.substring(indexDog);
                console.log("Нашли слово: "+ word);
            }
            newText = newText.replace(word,`<a href="http://localhost:3000/profile/null">`+word+`</a>`);
            console.log("Заменили "+ word);         
        }   
        else {
            console.log(" НЕ Нашли собаку( ");
            break;
        }
    }
    
    return{__html:newText};
}

export {checkForMarks,toMark};