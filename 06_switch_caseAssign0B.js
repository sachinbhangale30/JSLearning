var leap = function check_leap_year(leap_year) {
    if(leap_year%4==0){
        console.log(`${leap_year} is a Leap Year`);
    }
    else if (typeof leap_year=="string" || leap_year==undefined || isNaN(leap_year)) {
console.log(`${leap_year} Invalid Year`);
    }
    else{
        console.log(`${leap_year} is not a Leap Year`);
    }
}
leap(2020);
leap(1999);
leap(1600);
leap(2022);
leap(1945);
leap("Twenty Twenty");
leap(undefined);
leap(NaN);
leap(1750);
