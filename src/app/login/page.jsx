"use client";

import { serverLogin } from "@/actions/auth";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { push } = useRouter();

	function login(e) {
		e.preventDefault();
		if (email === "eventos@eventosae.com" && password === "eventosae") {
			serverLogin();
			push("/");
		} else {
			console.log("Email ou senha incorretos");
			toast("Email ou senha incorretos", {
				position: "top-right",
				icon: "💀",
				style: {
					borderRadius: "10px",
					background: "#333",
					color: "#fff",
				},
			});
		}
	}

	return (
		<div
			className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
			style={{ backgroundImage: "url(fundo3.jpg)" }}
		>
			<Toaster />
			<div className="rounded-lg shadow-2xl p-6 bg-zinc-200 bg-opacity-80">
				<h1 className="text-4xl font-bold mt-4 text-zinc-900 text-center">
					Eventos AE
				</h1>

				<h2 className="text-lg font-bold mt-4 text-zinc-900 text-center">
					Login
				</h2>

				<form onSubmit={login}>
					<input
						type="email"
						placeholder="Email"
						className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full text-zinc-900"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Senha"
						className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full text-zinc-900"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="bg-[#C1EDCC] hover:bg-[#a3f0b6] text-zinc-900 font-bold px-4 py-2 mt-4 rounded-lg w-full">
						Entrar
					</button>
				</form>
			</div>
		</div>
	);
}
