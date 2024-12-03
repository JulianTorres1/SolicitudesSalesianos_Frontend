export interface FormData {
  // Personal Information
  nombre_solicitante: string;
  cargo: string;
  gestion_entidad: string;
  direccion: string;
  telefono_ext: string;
  
  // Event Details
  nombre_evento: string;
  numero_participantes: number;
  fecha_evento: string;
  horario_inicio: string;
  horario_fin: string;
  genera_ingresos: boolean;
  espacio_solicitado: Space;
  
  // Services
  servicios_basicos: {
    agua: number;
    tinto: number;
    refrigerio: number;
    almuerzo: number;
  };
  
  servicios_ceremoniales: {
    banderas: number;
    himnos: number;
    flores: number;
    vasos_sagrados: number;
    sillas: number;
  };
  
  servicios_tecnicos: {
    pantallas: number;
    computadores: number;
    video_beams: number;
    papelografos: number;
    grabadoras: number;
    microfonos: number;
  };
  
  otros_servicios: string;
}

export type Space = 'Auditorio' | 'Salón ERE' | 'Coliseo' | 'Aulas de Clase' | 
                   'Patio Central' | 'Patio Alto' | 'Capilla' | 'Sala Profesores' | 
                   'Biblioteca';