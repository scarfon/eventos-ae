import Image from "next/image";
import { Card } from "../components/cardevento";
import Nav from "@/components/nav";

async function carregarDados() {
	const url = `https://api.seatgeek.com/2/events/?client_id=${process.env.NEXT_PUBLIC_ID}&client_secret=${process.env.NEXT_PUBLIC_SECRET}`;
	console.log(url);
	const resposta = await fetch(url);
	const dados = await resposta.json();
	return dados.events;
}

export default async function Home() {
	const eventos = await carregarDados();
	return (
		//JSX
		<>
			<Nav />
			{/* <nav className="bg-[#c70039] p-4 flex flex-row gap-10">
				<h1 className="text-3xl font-bold">EVENTOS AE</h1>
				<ul className="flex space-x-4 self-center"> novidades</ul>
				<ul className="flex space-x-4 self-center"> favoritos</ul>
				<ul className="flex space-x-4 self-center"> carrinho</ul>
			</nav> */}

			<section className="flex flex-wrap gap-2 justify-center">
				{eventos.map((evento) => (
					<Card evento={evento} />
				))}
			</section>
		</>
	);
}
