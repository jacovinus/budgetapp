import React from 'react';
const Gasto = ({gasto}) => {
  
return(
    <li className="gastos">

        <p>
        {gasto.nombreGasto}
            <span className="gasto">$ {gasto.monto}</span>
        </p>
       
    </li>
)
} 
export default Gasto;