import React from 'react';
import { FormData, Space } from '../../types/form';

interface Props {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const ESPACIOS: Space[] = [
  'Auditorio', 'Salón ERE', 'Coliseo', 'Aulas de Clase', 
  'Patio Central', 'Patio Alto', 'Capilla', 'Sala Profesores', 'Biblioteca'
];

export function EventDetailsSection({ formData, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Detalles del Evento</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nombre_evento" className="block text-sm font-medium text-gray-700">
            Nombre del Evento *
          </label>
          <input
            type="text"
            name="nombre_evento"
            id="nombre_evento"
            value={formData.nombre_evento}
            onChange={onChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="fecha_evento" className="block text-sm font-medium text-gray-700">
            Fecha del Evento *
          </label>
          <input
            type="date"
            name="fecha_evento"
            id="fecha_evento"
            value={formData.fecha_evento}
            onChange={onChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="numero_participantes" className="block text-sm font-medium text-gray-700">
            Número de Participantes *
          </label>
          <input
            type="number"
            name="numero_participantes"
            id="numero_participantes"
            value={formData.numero_participantes}
            onChange={onChange}
            required
            min="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="horario_inicio" className="block text-sm font-medium text-gray-700">
            Hora de Inicio *
          </label>
          <input
            type="time"
            name="horario_inicio"
            id="horario_inicio"
            value={formData.horario_inicio}
            onChange={onChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="horario_fin" className="block text-sm font-medium text-gray-700">
            Hora de Fin *
          </label>
          <input
            type="time"
            name="horario_fin"
            id="horario_fin"
            value={formData.horario_fin}
            onChange={onChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="espacio_solicitado" className="block text-sm font-medium text-gray-700">
            Espacio Solicitado *
          </label>
          <select
            name="espacio_solicitado"
            id="espacio_solicitado"
            value={formData.espacio_solicitado}
            onChange={onChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Seleccione un espacio</option>
            {ESPACIOS.map((espacio) => (
              <option key={espacio} value={espacio}>
                {espacio}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="genera_ingresos"
            id="genera_ingresos"
            checked={formData.genera_ingresos}
            onChange={onChange}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="genera_ingresos" className="ml-2 block text-sm text-gray-700">
            ¿Genera ingresos?
          </label>
        </div>
      </div>
    </div>
  );
}