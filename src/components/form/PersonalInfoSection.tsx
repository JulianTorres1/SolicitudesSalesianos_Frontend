import React from 'react';
import { FormData } from '../../types/form';

interface Props {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PersonalInfoSection({ formData, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Información Personal</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre_solicitante" className="block text-sm font-medium text-gray-700">
            Nombre del Solicitante *
          </label>
          <input
            type="text"
            name="nombre_solicitante"
            id="nombre_solicitante"
            value={formData.nombre_solicitante}
            onChange={onChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="cargo" className="block text-sm font-medium text-gray-700">
            Cargo
          </label>
          <input
            type="text"
            name="cargo"
            id="cargo"
            value={formData.cargo}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="gestion_entidad" className="block text-sm font-medium text-gray-700">
            Gestión/Entidad
          </label>
          <input
            type="text"
            name="gestion_entidad"
            id="gestion_entidad"
            value={formData.gestion_entidad}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="telefono_ext" className="block text-sm font-medium text-gray-700">
            Teléfono/Ext *
          </label>
          <input
            type="tel"
            name="telefono_ext"
            id="telefono_ext"
            value={formData.telefono_ext}
            onChange={onChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
            Dirección
          </label>
          <input
            type="text"
            name="direccion"
            id="direccion"
            value={formData.direccion}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}