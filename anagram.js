function isAnagram(s1,s2)
{
    let trimS1 = s1.trim().toLowerCase()
    let trimS2 = s2.trim().toLowerCase()
    console.log(`${trimS1} \n ${trimS2}`)
    let sortS1 = trimS1.split("").sort().join("")
    let sortS2 = trimS2.split("").sort().join("")
    console.log(`${sortS1} \n ${sortS2}`)
    if (sortS1===sortS2)
    {console.log ("string is an Anagram = TRUE")}
    else
        {console.log("string is an Anagram = FALSE")}

}
isAnagram('listen', 'silent')

function anagram(s1,s2)
{
    let trimS1 = s1.trim().toLowerCase()
    let trimS2 = s2.trim().toLowerCase()
    console.log(`${trimS1} \n ${trimS2}`)
    let sortS1 = trimS1.split("").sort().join("")
    let sortS2 = trimS2.split("").sort().join("")
    console.log (`${sortS1} \n ${sortS2}`)
    if (sortS1===sortS2)
    {
        console.log(`string is anagram TRUE`)

    }
        else
        {
            console.log(`String is anagram FALSE`)
        }

    }
anagram('hello','world')