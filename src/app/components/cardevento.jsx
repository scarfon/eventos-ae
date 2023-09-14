"use client"

import { useState, useEffect } from "react";
import { Button } from "./button";
import { StarIcon } from "@heroicons/react/20/solid";

export function Card  ({ evento })  {

  const [estrelas, setEstrelas] = useState(0)

  useEffect(() => {
    let eventos = JSON.parse( localStorage.getItem("eventos") ) || []
    let estrela = eventos.find( e => e.id === evento.id )
    setEstrelas(estrela?.estrelas || 0)
  })

  function numEstrelas(index){
    setEstrelas(index + 1)
    evento.estrelas = index + 1
    let eventos = JSON.parse( localStorage.getItem("eventos") ) || []
    let eventoIndex = eventos.findIndex(e => e.id === evento.id)
    if (eventoIndex !== -1) {
      eventos[eventoIndex] = evento
    } else {
      eventos.push(evento)
    }
    localStorage.setItem("eventos", JSON.stringify(eventos))
  }


  return (
    <div className="m-3 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6" style={{width: "250px"}}>
      <div className="w-full h-40 rounded-tl-lg rounded-br-lg overflow-hidden">
        <img src={evento.imageSrc} alt={evento.title} className="w-full h-full object-cover rounded-tl-lg rounded-br-lg" />
      </div>
      <h2 className="text-lg font-bold mt-4 text-black">{evento.title}</h2>
      <p className="font-bold mt-2 text-black">{evento.boldText}</p>
      <p className="mt-2 text-black">{evento.normalText}</p>
      <div className="flex items-center justify-center mt-4">
        {
          [1,2,3,4,5].map( (estrela, index) => (
            <StarIcon key={index} className={`h-6 w-6 ${index < estrelas ? "text-yellow-500" : "text-gray-400"}`} 
              onClick={() => numEstrelas(index)}/>
          ))
        }
      </div>
      <Button text={evento.buttonText}/>
    </div>
  );
};
