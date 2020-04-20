import React from 'react';

function SoccerInfo({soccerday}){
    var a = '2020-03-02';
    var t_soccerday = Number(dateDiff(a, new Date()));
    soccerday = t_soccerday*16; //하루 1440분을 축구 90분으로 나누어 계산한 결과 값이 16
    return(
        <div className="soccerinfo">
            <span className="soccerinfo__text">축구를 약 {soccerday}번 할 수 있었겠죠</span>
            <br></br>
            <span className="soccerinfo__infotext">하루 24간 종일 90분 축구를 한다는 가정하입니다. (말도 안되는 계산이긴 합니다..)</span>
        </div>
    );
}

function dateDiff(_date1, _date2) { /*날짜 간의 차이를 구하기 위한 함수*/
    var diffDate_1 = _date1 instanceof Date ? _date1 :new Date(_date1); 
    var diffDate_2 = _date2 instanceof Date ? _date2 :new Date(_date2);
 
    diffDate_1 =new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 =new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
 
    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24)); //밀리초 단위 변환
 
    return diff;
}

export default SoccerInfo;