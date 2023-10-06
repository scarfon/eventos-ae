"use client";
import { serverLogout } from "@/actions/auth";
import { useRouter } from "next/navigation";

export default function Nav() {
	const { push } = useRouter();

	function logout() {
		serverLogout();
		push("/login");
	}
	return (
		<nav className="bg-teal-900 p-4 flex justify-between items-center">
			<h1 className="text-4xl font-bold text-white">Eventos AE</h1>
			<div className="flex items-center justify-center">
				<a href="/" className="text-white font-bold mr-4">
					Home
				</a>
				<button onClick={logout} className="text-white font-bold">
					LogOut
				</button>
			</div>
		</nav>
	);
}
