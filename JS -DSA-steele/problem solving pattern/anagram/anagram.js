function validAnagram(str1,str2){
  // add whatever parameters you deem necessary - good luck!
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  if (sortedStr1 === sortedStr2)
  return true 
  else 
  return false
  }

console.log(validAnagram("aaz","azz"))
console.log(validAnagram("cat","tac"))
