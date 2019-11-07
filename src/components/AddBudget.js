import React, { useState } from "react";
import Error from "./Error";
export const AddBudget = props => {
  // Hooks
  const { guardarPresupuesto, guardarAddBudget, guardarRestante } = props;
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  // onSubmit => agregarPresupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    guardarAddBudget(false);
  };
  
  return (
    <div>
      <h2>Coloca tu presupuesto semanal</h2>
      {error ? <Error error="Ingrese su presupuesto semanal" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </div>
  );
};

export default AddBudget;
