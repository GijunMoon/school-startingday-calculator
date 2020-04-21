import React from 'react';
import './css/neumorphDes.scss';

function StartingDayInfo({currentDay}){
    var a = '2020-03-02';
    currentDay = dateDiff(a, new Date());
    return(
        <div className="startingday segment innertext">
            <h2>우리는 3월 2일로 부터 {currentDay}일 만큼 지나왔습니다. </h2>
            <br></br>
            <h3>이정도 시간을 아래처럼 사용했다면...</h3>
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

export default StartingDayInfo;