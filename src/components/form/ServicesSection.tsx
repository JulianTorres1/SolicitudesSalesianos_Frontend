import React from 'react';
import { FormData } from '../../types/form';

interface Props {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function ServicesSection({ formData, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Servicios Básicos</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(formData.servicios_basicos).map(([key, value]) => (
            <div key={key}>
              <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">
                {key.replace('_', ' ')}
              </label>
              <input
                type="number"
                name={`servicios_basicos.${key}`}
                id={key}
                value={value}
                onChange={onChange}
                min="0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Servicios Ceremoniales</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(formData.servicios_ceremoniales).map(([key, value]) => (
            <div key={key}>
              <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">
                {key.replace('_', ' ')}
              </label>
              <input
                type="number"
                name={`servicios_ceremoniales.${key}`}
                id={key}
                value={value}
                onChange={onChange}
                min="0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Servicios Técnicos</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(formData.servicios_tecnicos).map(([key, value]) => (
            <div key={key}>
              <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">
                {key.replace('_', ' ')}
              </label>
              <input
                type="number"
                name={`servicios_tecnicos.${key}`}
                id={key}
                value={value}
                onChange={onChange}
                min="0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="otros_servicios" className="block text-sm font-medium text-gray-700">
          Otros Servicios
        </label>
        <textarea
          name="otros_servicios"
          id="otros_servicios"
          rows={3}
          value={formData.otros_servicios}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}