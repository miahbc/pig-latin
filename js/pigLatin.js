function pigLatin(str) {
    let vowels = ['a','e','i','o','u']
    let q = ['?','!','.',',']
    let lowerWord = str.toLowerCase()
    // return lowerWord
    let strArr = lowerWord.split(' ')
    // return strArr[0]
    let strArr1 = []
   for (let i=0; i<strArr.length; i++) {
       strArr1.push(strArr[i].split(''))
   }
    // return strArr1
    for (let j = 0; j<strArr1.length; j++) {
        let last = ((strArr1[j].length)-1)
        if (vowels.includes(strArr1[j][0])) {
            if (q.includes(strArr1[j][last])) {
                // console.log(last)

                strArr1[j].splice((last),0,'a','y')
                console.log(strArr1)
            }
            else {strArr1[j].push('a','y')}
            // strArr1[j].push('a','y')
            }
            else {
                strArr1[j].push(strArr1[j][0])
                strArr1[j].shift()
                strArr1[j].push('a','y')}
        console.log(strArr1)
        }
    }   



// console.log(pigLatin('HELLO'))
console.log(pigLatin('Hello Everyone'))
// console.log(pigLatin('Hello Everyone!'))