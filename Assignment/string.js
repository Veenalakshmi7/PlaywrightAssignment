let originalWord="MADAM"
let convert = originalWord.split("") // [ 'M', 'A', 'D', 'A', 'M' ]
let length = originalWord.length // 5
let v =""
for (let i=length-1;i>=0;i--)
    {
      v = v + convert[i]
        }
       //console.log(v)
if (v==originalWord)
{console.log(`${v} is a palindrome`)}
else {console.log(`${v} is not a palindrome`)}
