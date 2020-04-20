import React from 'react';
import './App.css';
import Title from './title';
import StartingDayInfo from './info/StartingdayInfo';
import TimeTextInfo from './info/TimeTextInfo';
import SoccerInfo from './info/SoccerInfo';
import SchoolmealInfo from './info/SchoolmealInfo';
import SchoolCheckInfo from './info/MoriningCheckInfo';
import WalkInfo from './info/WalkschoolInfo';

class App extends React.Component{
  state = {
    isLoading: true
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 2000);
  }
  render(){
    const { isLoading } = this.state;
  return (
    <section class="container">
      {isLoading ? (
        <div class="loader"> {/*6초 로딩화면*/}
          <span class="loader__text">Loading...</span> 
        </div>
        ) : (
          <div class="calculator">{/*메인 시간 계산기 부분*/}
            <Title /> 
            <StartingDayInfo /> {/*지나온 시간 출력*/}
            <TimeTextInfo />
            <SoccerInfo />
            <SchoolmealInfo />
            <SchoolCheckInfo />
            <WalkInfo />
          </div>
        )
      }
    </section>
    );
  }
}

export default App;
