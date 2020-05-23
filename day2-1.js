/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function vowelsAndConsonants(s) {
    for (var a in s){
        if(s[a] === 'a' || s[a] === 'e' || s[a] === 'i' || s[a] === 'o' || s[a] === 'u'){
            console.log(s[a]);
        }       
    }
    for(var a in s){
        if(s[a] === 'a' || s[a] === 'e' || s[a] === 'i' || s[a] === 'o' || s[a] === 'u'){
            continue
        }
        console.log(s[a]); 
    }
    return
}
