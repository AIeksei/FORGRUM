import "../Css/Recolor.css";

function showColor() {
    let items = document.getElementsByClassName("colour");
    Array.from(items).forEach(item => {
        if (item.classList.contains("invisible")) {
            item.classList.add("visible");
            item.classList.remove("invisible");
        } else {
            item.classList.remove("visible");
            item.classList.add("invisible");
        }
    })
}
function changeColor(newColor){
    let item = document.getElementById("UserName");
    console.log( item.classList.item(0));
    item.classList.replace( item.classList.item(0),newColor);
   
}

function Colours() {
    return (
        <div className="colours">
            <input type="color" className="colour invisible" name=""
                value="#ff0000" onClick={(e) => {
                     e.preventDefault(); 
                     changeColor('red');
                     }}></input>
            <input type="color" className="colour invisible" name=""
                value="#00ff00" onClick={(e) => { e.preventDefault();
                    changeColor('green');
                     }}></input>
            <input type="color" className="colour invisible" name=""
                value="#0000ff" onClick={(e) => { e.preventDefault() 
                    changeColor('blue');
                    }}></input>
                     <input type="color" className="colour invisible" name=""
                value="#000000" onClick={(e) => { e.preventDefault() 
                    changeColor('black');
                    }}></input>
        </div>

    );
}


export { showColor, Colours };