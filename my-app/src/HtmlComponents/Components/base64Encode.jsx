import {decode as base64_decode, encode as base64_encode} from 'base-64';

function encode(){

    let text = document.getElementById("test").value
    let encoded = base64_encode(text);
    console.log(encoded)
}
  export {encode};
