const months =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let today = new Date();
let inputget = document.getElementById("date-input");
inputget.setAttribute('max', `${today.getFullYear()}-${today.getMonth()<10?'0'+(today.getMonth()+1):(today.getMonth()+1)}-${today.getDate()<10?'0'+(today.getDate()-1):(today.getDate()-1)}`)



function agecalculator(){

 
    let inputdate = new Date(inputget.value);
    

    let birthmonth,birthdate, birthyear;

    let birthdetail ={
        date: inputdate.getDate(),
        month:inputdate.getMonth(),
        year:inputdate.getFullYear(),
        
    }

    let currentyear = today.getFullYear();
    let currentmonth = today.getMonth();
    let currentdate = today.getDate();

    leepcheck(currentyear);



    if (birthdetail.year > currentyear ||
        (birthdetail.month > currentmonth && birthdetail.year == currentyear )
        || (birthdetail.date > currentdate && birthdetail.month == currentmonth && birthdetail.year == currentyear)  ) {

            displayResult("-","-","-");
            alert("Not born yet");
            return ;
    }

    birthyear = currentyear-birthdetail.year;
    

    if( currentmonth >= birthdetail.month){
        birthmonth= currentmonth-birthdetail.month;
    }

    else{
        birthyear--;
        birthmonth = 12 + currentmonth- birthdetail.month;
    }

    if(currentdate>=birthdetail.date){
        birthdate = currentdate-birthdetail.date;
    }else{
        birthmonth--;
        let days = months[currentmonth -1];
        birthdate = days+currentdate -birthdetail.date;
        if(birthmonth<0 ){
            birthmonth=11;
            birthyear--;
        }
    }
    if(months>12){
        year++;
    }


    if(isNaN(birthdate) || isNaN(birthmonth) || isNaN(birthyear) ){
        displayResult("-","-","-");
        alert('Please fill corect date format')
    }
    else{
        displayResult(birthdate,birthmonth,birthyear);
    }
    
}
function leepcheck(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            months[1]=29;
        }
        else{
            months[1] = 28;
        }
    
}

function displayResult(bdate, bmonth,byear){
    document.getElementById("years").textContent= byear;
    document.getElementById("months").textContent= bmonth;
    document.getElementById("days").textContent= bdate;
}



