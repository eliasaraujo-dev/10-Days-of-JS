function getLetter(s){
    let letter;
    var firstletter = s[0];
    switch(true){
        case "aeiou".includes(firstletter):
            letter = 'A';
            break
        case "bcdfg".includes(firstletter):
            letter = 'B';
            break;
        case "hjklm".includes(firstletter):
            letter = 'C';
            break;
        case "npqrstvwxyz".includes(firstletter):
            letter = 'D';
            break;    
    }
    return letter;
}
