String.prototype.myIncludes = function (s,position = 0) {
  let inputStr = this;
  let searchLen = s.length;
  let inputLen = inputStr.length;

  if (searchLen === 0) return true; 
  if (position < 0) position = 0; 
  if (position + searchLen > inputLen) return false;

    for (let i = position; i <= inputLen - searchLen; i++) {
      if (inputStr.slice(i, i + searchLen) === s) {
        return true;
      }
    }
  
    return false;
};

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(
  `The word "${word}" ${
    sentence.myIncludes(word) ? "is" : "is not"
  } in the sentence`
);
