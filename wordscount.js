function wordcount(kalimat) {
    
    return kalimat.split(" ").length;
    
}

console.log(wordcount('I have a dream')); // 4
console.log(wordcount('Never eat shredded wheat or cake')); // 6
console.log(wordcount('A song to sing')); // 4
console.log(wordcount('I')); // 1
console.log(wordcount('I believe I can code')); // 5