import React from 'react';
import './css/infotext.css';

function SchoolmealInfo(exception_weekendDay){
    exception_weekendDay = calcDate();
    return(
        <div className="mealinfo">
            <span class="infotext">급식을 {exception_weekendDay}번 먹을 수 있었겠죠</span>
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

export default SchoolmealInfo;
