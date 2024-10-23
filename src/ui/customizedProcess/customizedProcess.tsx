import { getTranslations } from "next-intl/server";
import React from "react";

export async function CustomizedProcess() {
	const t = await getTranslations("/category.orderProcess");
	const email = "wendy@feltwith.love";
	const orderSteps = [t("photo"), t("beforeShipping"), t("timeline"), t("special"), t("gift")];

	return (
		<>
			<h2 className="text-3xl font-bold leading-none tracking-tight text-foreground mt-12">{t("title")}</h2>

			<div className="mt-8 p-0">
				<ul className="text-gray-700 text-base">
					<li className="mb-5 text-lg leading-relaxed first-letter:text-4xl ">
						📧 Email me directly! You can send me your pet's photos and any requests to{" "}
						<a href={`mailto:${email}`} className="text-blue-700">
							{email}
						</a>
						. If you have any questions, don’t hesitate to email me. I guarantee a response within 24 hours.
					</li>
					{orderSteps.map((v, index) => (
						<li key={index} className="mb-5 text-lg leading-relaxed first-letter:text-4xl ">
							{v}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
