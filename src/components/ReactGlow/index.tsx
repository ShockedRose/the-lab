import { Glow, GlowCapture } from "@codaworks/react-glow";

export const ReactGlowComponent = () => {
	return (
		<>
			<section className="w-[80%] mx-auto">
				<GlowCapture>
					<div className="flex justify-between flex-1">
						<div className="border content-center font-bold p-4 border-black rounded-lg h-40">
							<p>This won't glow</p>
						</div>
						<Glow color="blue" className="max-w-50 flex-1">
							<div className="border content-center h-40 font-bold p-4 border-black rounded-lg text-black glow:text-glow/50 glow:bg-blue-100">
								This glows blue
							</div>
						</Glow>
						<Glow color="red" className="max-w-50 flex-1">
							<div className="border content-center h-40 font-bold p-4 border-black rounded-lg text-black glow:text-glow/50 glow:bg-red-100">
								This glows red
							</div>
						</Glow>
					</div>
				</GlowCapture>
			</section>
		</>
	);
};
