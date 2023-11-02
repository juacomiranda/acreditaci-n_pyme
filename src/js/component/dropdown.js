import React from "react";

export function Dropdown() {
  return (
    <div className="dropdown-center text-center">
      <button
        className="btn btn-success dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Venta Nueva
      </button>
      <div className="dropdown-menu p-4 text-body-secondary">
        <p>Carpeta Tributaria</p>
        <p className="mb-0">2 o 3 IVAS, declarados y pagados</p>
        <p className="mb-0">Sin acreditación (máximo 3 líneas)</p>
      </div>
    </div>

     
  );
}
