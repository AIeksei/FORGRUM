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
    item.classList.replace( item.classList.item(0),newColor);
}

function Colours() {
    return (
        <div className="colours">
            <input type="color" className="colour invisible" name=""
                value="#ff0000" onClick={(e) => {
                     e.preventDefault(); 
                     changeColor('RED');
                     }}></input>
            <input type="color" className="colour invisible" name=""
                value="#00ff00" onClick={(e) => { e.preventDefault();
                    changeColor('GREEN');
                     }}></input>
            <input type="color" className="colour invisible" name=""
                value="#0000ff" onClick={(e) => { e.preventDefault() 
                    changeColor('BLUE');
                    }}></input>
                     <input type="color" className="colour invisible" name=""
                value="#000000" onClick={(e) => { e.preventDefault() 
                    changeColor('BLACK');
                    }}></input>
                   <input type="color" className="colour invisible" name=""
                value="#FFD700" onClick={(e) => { e.preventDefault() 
                    changeColor('GOLD');
                    }}></input>
                     <input type="color" className="colour invisible" name=""
                value="#FF1493" onClick={(e) => { e.preventDefault() 
                    changeColor('PINK');
                    }}></input>
        </div>

    );
}


export { showColor, Colours };