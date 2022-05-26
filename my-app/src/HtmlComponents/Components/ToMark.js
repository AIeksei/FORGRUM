function toMark(){

}
function checkForMarks(text){

    let newText = text;
    let text2 = text;
    let word;
    for(let i = 0;i<text.length-1;i++){
        let indexDog = text2.indexOf("@"); 

        if(indexDog != -1){
            text2 = text2.slice(indexDog+1);
            indexDog = 0;
            let indexSpace = Math.min(text2.indexOf(" "), text2.indexOf(",")); 
            
            if(indexSpace != -1){
                word = text2.substring(indexDog,indexSpace);
            }
            else{
                word = text2.substring(indexDog);
            }

            newText = newText.replace(word,`<a  href = "http://localhost:3000/profile/1">`+word+`</a>`);        
        }   
        else {
            break;
        }
    }
    
    return{__html:newText};
}

export {checkForMarks,toMark};