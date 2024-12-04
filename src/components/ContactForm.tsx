import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { FormData } from '../types/form';
import { PersonalInfoSection } from './form/PersonalInfoSection';
import { EventDetailsSection } from './form/EventDetailsSection';
import { ServicesSection } from './form/ServicesSection';
import axios from 'axios';

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre_solicitante: '',
    cargo: '',
    gestion_entidad: '',
    direccion: '',
    telefono_ext: '',
    nombre_evento: '',
    numero_participantes: 0,
    fecha_evento: '',
    horario_inicio: '',
    horario_fin: '',
    genera_ingresos: false,
    espacio_solicitado: 'Auditorio',
    servicios_basicos: {
      agua: 0,
      tinto: 0,
      refrigerio: 0,
      almuerzo: 0
    },
    servicios_ceremoniales: {
      banderas: 0,
      himnos: 0,
      flores: 0,
      vasos_sagrados: 0,
      sillas: 0
    },
    servicios_tecnicos: {
      pantallas: 0,
      computadores: 0,
      video_beams: 0,
      papelografos: 0,
      grabadoras: 0,
      microfonos: 0
    },
    otros_servicios: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
      return;
    }

    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof formData],
          [field]: type === 'number' ? Number(value) : value
        }
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Mapear claves a los nombres de columna correctos
  const flatData = {
    nombre_solicitante: formData.nombre_solicitante,
    cargo: formData.cargo,
    gestion_entidad: formData.gestion_entidad,
    direccion: formData.direccion,
    telefono_ext: formData.telefono_ext,
    numero_participantes: formData.numero_participantes,
    nombre_evento: formData.nombre_evento,
    fecha_evento: formData.fecha_evento,
    horario_inicio: formData.horario_inicio,
    horario_fin: formData.horario_fin,
    genera_ingresos: formData.genera_ingresos,
    espacio_solicitado: formData.espacio_solicitado,
    cantidad_agua: formData.servicios_basicos.agua,
    cantidad_tinto: formData.servicios_basicos.tinto,
    cantidad_refrigerio: formData.servicios_basicos.refrigerio,
    cantidad_almuerzo: formData.servicios_basicos.almuerzo,
    cantidad_banderas: formData.servicios_ceremoniales.banderas,
    cantidad_himnos: formData.servicios_ceremoniales.himnos,
    cantidad_flores: formData.servicios_ceremoniales.flores,
    cantidad_vasos_sagrados: formData.servicios_ceremoniales.vasos_sagrados,
    cantidad_sillas: formData.servicios_ceremoniales.sillas,
    otros_servicios: formData.otros_servicios,
    cantidad_pantallas: formData.servicios_tecnicos.pantallas,
    cantidad_computadores: formData.servicios_tecnicos.computadores,
    cantidad_video_beams: formData.servicios_tecnicos.video_beams,
    cantidad_papelografos: formData.servicios_tecnicos.papelografos,
    cantidad_grabadoras: formData.servicios_tecnicos.grabadoras,
    cantidad_microfonos: formData.servicios_tecnicos.microfonos,
  };

  console.log('Submitting flat data:', flatData);

  try {
    const response = await axios.post('http://localhost:5005/solicitudes/create', flatData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Form submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  

  return (
    <div id="contact-form" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Solicitud de Espacios
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <PersonalInfoSection formData={formData} onChange={handleChange} />
              <hr className="border-gray-200" />
              <EventDetailsSection formData={formData} onChange={handleChange} />
              <hr className="border-gray-200" />
              <ServicesSection formData={formData} onChange={handleChange} />
              
              <div className="pt-5">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Enviar Solicitud
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}