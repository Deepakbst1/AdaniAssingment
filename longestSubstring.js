function longestSubstringWithMaxTwoRepeats(s) {
    // Your code here
    let start=0;
    let end=0;
    let charFreq=new Map();
    let maxSubstring="";
    let maxLength=0;


    while(end<s.length) {
    let endChar=s[end];
    charFreq.set(endChar,(charFreq.get(endChar)||0)+1);

    while([...charFreq.values()].some(freq=>freq>2)){
        let Startchar=s[start];
        charFreq.set(Startchar,charFreq.get(Startchar)-1);

        if(charFreq.get(Startchar===0)){
            charFreq.delete(Startchar);
        }
        start++;
    }

    let currentLength=end-start+1;
    if(currentLength>maxLength){
        maxLength=currentLength;
        maxSubstring=s.slice(start,end+1);
    }
    end++;
    }
    return { maxSubstring, maxLength };
}

console.log(longestSubstringWithMaxTwoRepeats("aaabbccddeeffff"));