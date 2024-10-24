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
        <Webcurrent/>
        <Mediacurrent/>
        <Contentcurrent/>
        <Eventscurrent/>
        <Marketingcurrent/>
      </div>
      
    );
}

export default Current;