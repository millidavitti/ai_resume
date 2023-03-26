import Link from "next/link";
import React from "react";

export default function ErrorPage() {
	return (
		<div className='app'>
			<h3>
				You've not provided your details. Kindly head back to the{" "}
				<Link href='/'>homepage</Link>.
			</h3>
		</div>
	);
}
