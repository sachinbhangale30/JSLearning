function interviewEligibility(gradScore,hscScore,sscScore,candidateName) {
    if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS Interview`);
        
    } else {
        console.log(`${candidateName},Unfortunately you are not eligible for Interview`);
    }
}
interviewEligibility(80,86,90,"Sachin Bhangale");
interviewEligibility(70,65,55,"Steve Jobs");
interviewEligibility(60,79,88,"Elon Musk");