import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import Practice from './Components/Page/Practice';

const App = () => {
  const [clear, setClear] = useState(false);

  function clearCanvas(){
    setClear(true);
    setTimeout(() => {
      setClear(false);
    }, 0);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Practice clearCanvas={clearCanvas} clear={clear}/>
    </SafeAreaView>
  );
};

export default App;