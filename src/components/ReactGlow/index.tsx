import { Glow, GlowCapture } from "@codaworks/react-glow";
import { useState } from "react";

export const ReactGlowComponent = () => {
	return (
		<>
			<p className="mb-4">
				This experiment uses the{" "}
				<a
					href="https://github.com/codaworks/react-glow"
					className="font-mono"
				>
					react-glow
				</a>{" "}
				library
			</p>
			<GlowCapture>
				<div className="flex justify-between">
					<div className="border p-4 border-black rounded-lg">
						<p>This won't glow</p>
					</div>
					<Glow color="purple">
						<div className="border p-4 border-black rounded-lg text-black glow:text-glow/50 glow:bg-red-100">
							This will glow purple when the mouse is passed over
						</div>
					</Glow>
				</div>
			</GlowCapture>
		</>
	);
};
