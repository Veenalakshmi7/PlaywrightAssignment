function userProfile(name)
{
    console.log(`hello  ${name}`)
}
userProfile("veenalakshmi")

const  double = (a) =>
    {
        return 2*a
 
 }
 console.log (`${double(500)}`)

 let anynomouse =function()
 { 
    setTimeout( () =>
    {console.log (`the message delayed by 2 seconds`)}
 ,2000)
}
anynomouse()

function getUserData (userData)
{
console.log (`getting the user data`)
setTimeout (()=>
{
console.log(`getting the user data delayed by 3 seconds`)
userData()
},3000)
}
function callback()
{
console.log(`getting the get user data call back function`)
}
getUserData(callback)