
export default function Home() {
	return (
		<main className="h-svh bg-gray-800 flex items-center justify-center">
			<div className="w-[80%] h-[80%] p-10 bg-red-400 text-zinc-300 rounded-3xl flex flex-col items-center justify-center gap-14 shadow-xl">
				<h1 className="text-4xl font-extrabold">TEST DOCKER CA MARCHE OU PAS ?</h1>
				<h2 className="text-3xl">HOT RELOAD OU PAS ?</h2>
				<h3 className="text-2xl">ENV : {process.env.NEXT_PUBLIC_TEST}</h3>
			</div>			
		</main>
	);
}
