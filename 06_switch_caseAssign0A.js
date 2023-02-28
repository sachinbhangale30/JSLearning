function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`Month Number ${monthNumber} : January`);
            break;
            case 2:
            console.log(`Month Number ${monthNumber} : February`);
            break;
            case 3:
            console.log(`Month Number ${monthNumber} : March`);
            break;
            case 4:
            console.log(`Month Number ${monthNumber} : April`);
            break;
            case 5:
            console.log(`Month Number ${monthNumber} : May`);
            break;
            case 6:
            console.log(`Month Number ${monthNumber} : June`);
            break;
            case 7:
            console.log(`Month Number ${monthNumber} : July`);
            break;
            case 8:
            console.log(`Month Number ${monthNumber} : August`);
            break;
            case 9:
            console.log(`Month Number ${monthNumber} : September`);
            break;
            case 10:
            console.log(`Month Number ${monthNumber} :October`);
            break;
            case 11:
            console.log(`Month Number ${monthNumber} : November`);
            break;
            case 12:
            console.log(`Month Number ${monthNumber} : December`);
            break;
    
        default:
            console.log(`Invalid Month:${monthNumber}`);
            break;
    }
    
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);