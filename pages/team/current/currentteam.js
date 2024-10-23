import React from 'react';
import Currentexecom from './currentexecom';
import Webcurrent from './webcurrent';
import Mediacurrent from './mediateam'
import Marketingcurrent from './marketingteam'
import Contentcurrent from './contentteam'
import Eventscurrent from './eventsteam'
import Outreachcurrent from './outreachteam';

const Current=()=>{
    return(
      <div>
        <Currentexecom/>
        <Mediacurrent/>
        <Contentcurrent/>
        <Eventscurrent/>
        <Marketingcurrent/>
        <Webcurrent/>
      </div>
      
    );
}

export default Current;