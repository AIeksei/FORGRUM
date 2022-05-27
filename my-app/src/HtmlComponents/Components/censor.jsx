function censor(text){
    let re =/(ВОЙН|УКРАИН|БАЙДЕН|ДАУН|НЕГР)/gi;
    text = text.replaceAll(re,"***");
    return(text);
}
  export {censor};
