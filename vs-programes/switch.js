const day = parseInt(prompt("enter the day"));//in the prompt we have to take numbers as numbers we parseInt,parseFloat...
switch (day) {

    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tueday");
        break;

    case 3:
        console.log("wed day");
        break;

    case 4:
        console.log("thuday")
        break;

    case 5:
        console.log("friday")
        break;

    case 6:
        console.log("satday")
        break;

    case 7:
        console.log("sunday")
        break;

    default:
        console.log("this day not considered")
        break;
}