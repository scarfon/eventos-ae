import Image from "next/image";
import { Card } from "./components/cardevento";

async function carregarDados() {
	const url = `https://api.seatgeek.com/2/events/?client_id=${process.env.NEXT_PUBLIC_ID}&client_secret=${process.env.NEXT_PUBLIC_SECRET}`;
	console.log(url);
	const resposta = await fetch(url);
	const dados = await resposta.json();
	return dados.events;
}
let evento = {
	title: "Evento 1",
	imageSrc:
		"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F530262349%2F268399181129%2F1%2Foriginal.20230606-143800?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=22717efd92cc4325ada9b8b3c5cd012f",
	boldText: "Sábado, 2 de setembro",
	normalText: "Peter Pan",
	buttonText: "Learn More",
	buttonIcon: "arrow-right",
	id: 1,
};

export default async function Home() {
	const eventos = await carregarDados();
	return (
		//JSX
		<>
			<nav className="bg-[#c70039] p-4 flex flex-row gap-10">
				<h1 className="text-3xl font-bold">EVENTOS AE</h1>
				<ul className="flex space-x-4 self-center"> novidades</ul>
				<ul className="flex space-x-4 self-center"> favoritos</ul>
				<ul className="flex space-x-4 self-center"> carrinho</ul>
			</nav>

			<section className="flex flex-wrap gap-2">
				{eventos.map((evento) => (
					<Card evento={evento} />
				))}
			</section>
		</>
	);
}
