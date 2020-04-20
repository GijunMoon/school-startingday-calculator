import React from 'react';
import './css/title.scss';

function Title(){
    return(
    <section class="container">
        <h1>
            <span class="title">지나온</span>
            <span class="title">개학일</span>
            <span class="title">계산기</span>
        </h1>
        <div class="button">restart</div>
    </section>
    );
}


export default Title;