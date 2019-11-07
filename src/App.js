import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddBudget from "./components/AddBudget";
import AddExpense from "./components/AddExpense";
import Listado from './components/Listado';
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [addBudget, guardarAddBudget] = useState(true);
  const [crearGasto, guardarCrearGasto] = useState(false);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);
  useEffect(()=>{
    if(crearGasto){
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);
      // restar el presupuesto
      const presupuestoRestante = restante - gasto.monto;
      guardarRestante(presupuestoRestante);
      guardarCrearGasto(false);

    }


  },[crearGasto, gastos, gasto, restante])
  return (
    <div className="container">
      <Header title="Budget App" />
      <div className="contenido contenido-principal">
      {(addBudget)
      ?
      <AddBudget
          guardarPresupuesto={guardarPresupuesto}
          guardarAddBudget={guardarAddBudget}
          guardarRestante={guardarRestante}
        />
        :
        (
          <div className="row">
        <div className="one-half column">
        <AddExpense
          guardarGasto={guardarGasto}
          guardarCrearGasto={guardarCrearGasto}
        />
        </div>
        <div className="one-half column">
          <Listado gastos={gastos} />
          <ControlPresupuesto
            restante= {restante}
            presupuesto={presupuesto} 
          />
        </div>
      </div>
        )
      }
      
      </div>
    </div>
  );
}

export default App;
