import { useRouter } from "next/navigation";

export function Button({ text, redirect }) {
	const router = useRouter();
	return (
		<button
			onClick={() => {
				router.push(redirect);
			}}
			className="flex items-center justify-center bg-[#C1EDCC] text-black rounded-md px-4 py-2 mt-4"
		>
			<span className="mr-2">{text}</span>
		</button>
	);
}
