import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroBG from '../media/img/Hero-Background.jpg';

export function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto flex items-center">
        <div className="relative z-10 w-1/2 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block">Solicitudes De Espacios</span>
                <span className="block text-red-600">Colegio Salesiano San Pedro Claver</span>
              </h1>
              <p className="mt-3 text-base text-gray-900 font-light font-semibold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Completa el formulario para solicitar un espacio en el colegio Salesiano San Pedro Claver.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#contact-form" className="w-full flex items-center bg-red-600 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-900 md:py-4 md:text-lg md:px-10">
                    Completar formulario
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="w-1/2">
          <img src={HeroBG} alt="Hero Background" className="object-cover rounded-lg shadow-xl w-full h-full" />
        </div>
      </div>
    </div>
  );
}