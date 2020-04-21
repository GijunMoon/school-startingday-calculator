import React from 'react';

function MoriningCheck(exception_weekendDay){
    exception_weekendDay = Number(calcDate());
    var f_exception_weekendDay = exception_weekendDay*2
    return(
    <div class="row">
        <div class="card-w col-md-4">
        <div class="card active">
        <div class="card__icon">

        </div>
        <div className="schoolcheckinfo">
            <span className="infotext">조례 및 종례를 </span>
            <span className="infonumtext">{f_exception_weekendDay}</span>
            <span className="infotext">번 할 수 있습니다.</span>
        </div>
        </div>
      </div>
    </div>
    );
}

function calcDate() {
    var date1 = new Date(2020, 3, 2); // 개학일
    var date2 = new Date(); // 현재 날짜

    var count = 0;
    
        while(true) {  
            var temp_date = date1;
        
            if(temp_date.getTime() > date2.getTime()) {
                console.log("count : " + count);
                break;
            } else {
                var tmp = temp_date.getDay();
                if(tmp === 0 || tmp === 6) {
                    // 주말
                    //console.log("주말");
            } else {
                // 평일
                //console.log("평일");
                count++;         
            }
            temp_date.setDate(date1.getDate() + 1); 
        }
    }

    return count;
}

export default MoriningCheck;