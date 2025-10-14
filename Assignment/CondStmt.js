let browserName='Chrome'
let dataType="Sanity"
if (browserName='Chrome')
{console.log('Launching chrome browser')}
else
{console.log('launching default browser')}
switch(dataType)
{
    case "smoke":
    console.log("Running smoke tests")
    break;
    case "sanity":
        console.log("Running sanity tests")
        break;
        case "Regression":
            console.log("Running regression tests")
            break;
            default:
                console.log("Running default smoke tests")
}

