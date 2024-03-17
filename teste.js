function vowelsAndConsonants(s){
    let vowels = 'aeiou';
    var consonants = '';
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            console.log(s[i])
        }
        else{
            consonants += s[i] + '\n';
        }
    }
    console.log(consonants.trim());
}
vowelsAndConsonants()