import { Button } from "./button";

export function Card  ({ title, imageSrc, boldText, normalText, buttonText })  {
  return (
    <div className="m-3 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6" style={{width: "250px"}}>
      <div className="w-full h-40 rounded-tl-lg rounded-br-lg overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-tl-lg rounded-br-lg" />
      </div>
      <h2 className="text-lg font-bold mt-4 text-black">{title}</h2>
      <p className="font-bold mt-2 text-black">{boldText}</p>
      <p className="mt-2 text-black">{normalText}</p>
      <Button text={buttonText}/>
    </div>
  );
};
