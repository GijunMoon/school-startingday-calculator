import React from 'react';
import './css/neumorphDes.scss';

function WalkschoolInfo(walkday){
    walkday = Number(calcDate());
    //1.28km
    var walkkm = walkday * 1.28;
    return(
        <div class="row">
              <div class="card-w col-md-4">
              <div class="card active">
              <div class="card__icon">
   
              </div>
              <div class="card__text">
                  <div className="walkinfo">
                      <span className="infotext">지금까지 최소 </span> 
                      <span className="infonumtext">{walkkm}km </span> 
                      <span className="infotext">만큼은 걷거나 차를 탈 수 있습니다.</span>
                  </div>
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

export default WalkschoolInfo;