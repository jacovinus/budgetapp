import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
const AddExpense = props => {
  const { guardarGasto, guardarCrearGasto } = props;
  const [nombreGasto, guardarNombreGasto] = useState("");
  const [monto, guardarMonto] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGastos = e => {
    e.preventDefault();
    if (monto < 1 || isNaN(monto) || nombreGasto === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    const gasto = {
      id: shortid.generate(),
      monto,
      nombreGasto
    };
    guardarGasto(gasto);
    guardarCrearGasto(true);
    guardarMonto("");
    guardarNombreGasto("");
  };
  return (
    <form onSubmit={agregarGastos}>
      <h2>Agrega tus gastos Aqui</h2>
      {error ? <Error error="Añada monto y nombre de gasto" /> : null}
      <div className="campo">
        <label htmlFor="nombregasto">Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          onChange={e => guardarNombreGasto(e.target.value)}
          value={nombreGasto}
        />
      </div>
      <div className="campo">
        <label htmlFor="cantgasto">Monto</label>
        <input
          type="number"
          className="u-full-width"
          onChange={e => guardarMonto(parseFloat(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};
export default AddExpense;
