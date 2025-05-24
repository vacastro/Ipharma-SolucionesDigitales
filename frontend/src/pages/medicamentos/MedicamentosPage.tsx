import React, { useEffect, useState } from 'react';
import type { Medicamento } from '../../api/medicamento/medicamento.api.model';
import { getMedicamentos } from './medicamentos.service';

export const MedicamentosPage: React.FC = () => {
  const [data, setData] = useState<Medicamento[]>([]);

  useEffect(() => {
    getMedicamentos().then(setData);
  }, []);

  return (
    <div>
      <h1>Listado de Medicamentos</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MedicamentosPage;