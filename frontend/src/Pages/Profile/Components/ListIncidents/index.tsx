import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from 'Redux-tools/Modules';
import { FiTrash2 } from 'react-icons/fi';
import { DeleteIncident } from 'Redux-tools/Modules/Incidents';
import Loading from 'Components/Loading';

function ListIncidents() {
  const { incidents, indexIsLoading, storeIsLoading } = useSelector(
    ({ incidents }: IApplicationState) => incidents,
  );
  const dispatch = useDispatch();

  const deleteIncident = useCallback(
    (idToDelete: number) => {
      dispatch(DeleteIncident(idToDelete));
    },
    [dispatch],
  );

  if (indexIsLoading || storeIsLoading) return <Loading dark />;

  return (
    <ul>
      {incidents.map(({
        id, title, description, formatted_value,
      }) => (
        <li key={id}>
          <strong>Caso:</strong>
          <p>{title}</p>
          <strong>Descrição:</strong>
          <p>{description}</p>
          <strong>Valor:</strong>
          <p>{formatted_value}</p>

          <button type="button" onClick={() => deleteIncident(id)}>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default memo(ListIncidents);
