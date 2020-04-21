import React from 'react';
import WalkInfo from './info/WalkschoolInfo';
import SoccerInfo from './info/SoccerInfo';
import SchoolmealInfo from './info/SchoolmealInfo';
import MoriningcheckInfo from './info/MoriningCheckInfo';
import StartingDayInfo from './info/StartingdayInfo';

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
    <body class="body">
    <section class="container">
      {isLoading ? (
        <div class="loader"> {/*6초 로딩화면*/}
          <span class="infotext">Loading...</span> 
        </div>
        ) : (
          <div class="container wrapper">
            <textarea id="text" type="text" maxlength="50"></textarea>
            <h1>
              <span class="segment innertext">개학일로부터 지나온 시간 </span>
              <span data-text="!">|</span>
            </h1>
            <StartingDayInfo />
            <br></br>
            <WalkInfo />
            <br></br>
            <MoriningcheckInfo />
            <br></br>
            <SchoolmealInfo />
            <br></br>
            <SoccerInfo />
          </div>
        )
      }
    </section>
    </body>
    );
  }
}



export default App;
