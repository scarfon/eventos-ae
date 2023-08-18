import Image from "next/image";

export default function Home() {
	return (
		//JSX
		<>
			<nav className="bg-[#c70039] p-4 flex flex-row gap-10">
				<h1 className="text-3xl font-bold">EVENTOS AE</h1>
				<ul className="flex space-x-4 self-center"> novidades</ul>
				<ul className="flex space-x-4 self-center"> favoritos</ul>
				<ul className="flex space-x-4 self-center"> carrinho</ul>
			</nav>
		</>
	);
}
