// Problem 1:

function calculateMoney(totalTicket) {
    const ticketPrice = 120 ;
    const gurdManCost = 500;
    const stafCharge = 8 * 50;

    const totalIncome = totalTicket * ticketPrice ;
    const totalCost = gurdManCost + stafCharge;

    const income = totalIncome - totalCost;
    return income;

}

// Problem 2:

function checkName(name){
    const getVowel = "aeiouyw";
    const vowel = getVowel.split('');
    console.log(vowel);
    const lastletter = name.charAt(name.length - 1);
    const letter = lastletter.toLowerCase();
        if(letter === 'a'|| letter ===  'w' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'y'){
            return "Good Name";
        }
        else{
            return "Bad Name"
        }
    } 


// Problem 3:

function deleteInvalids(input){
    
    const a = [];
    for(let i = 0; i < input.length  ; i++){
        const inputType = input[i];
        if(typeof(inputType) === "number" ){
            a.push(inputType)
        }
    }
    return a;
}


// Problem 4: 

function password(input) {
    const name = input.name;
    const birthYear = input.birthYear;
    const siteNameFristLetter = input.siteName[0].toUpperCase();
    const siteName = input.siteName.charAt(0).toUpperCase() + input.siteName.slice(1) ;
    const structure = `${siteName}#${name}@${birthYear}`;
    return structure;
}

// problem: 5

function monthlySavings(payment, livingCost){

    const totalIncome = [];
    for (let i = 0; i < payment.length; i++) {
        const money = payment[i];
        const tax = (money * 20) / 100;
        if(money >= 3000){
            const income = money - tax;
            totalIncome.push(income)
        }
        else{
            totalIncome.push(money);
        }
    }

    let income = 0;
    for (let i = 0; i < totalIncome.length; i++) {
        const money = totalIncome[i];
        income = money + income;
    }
    const totalSaving = income - livingCost;
    if(totalSaving < 0 ){
        return "Earn More"
    }
    else{
        return totalSaving;
    }
}
