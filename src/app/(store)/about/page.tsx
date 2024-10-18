import AboutMeImage from "@/images/about/about-me.jpg";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const selfIntro =
	"Hi, i am Wendy Zhang, a full time needle felting artist. I live in Shanghai, China. \n\n Several years ago, I stumbled upon the art of needle felting and my life has been changed. At first, it was just a hobby. I would spend hours creating little felt animals and experimenting with different techniques. But soon, I found my daughter loves my work and even sleep with a felted sheep. And my friends and family started to take notice of my creations and began placing orders for their own custom pieces. \n\n It wasn't long before I realized that I could turn my newfound passion into a career. I started selling my needle felted creations at local craft fairs and online, and the response was overwhelming. People loved the unique and whimsical designs that I created, and I loved the satisfaction of bringing joy to others through my art. \n\n Now, five years later, I am proud to say that I am a full-time needle felting artist. I pour my heart and soul into every creation, carefully crafting each piece by hand with the utmost care and attention to detail. \n\n If you're looking for a truly one-of-a-kind gift or decoration for your home, I invite you to explore my collection of needle felted creations. From cute key-chains or framed portraits to cuddly whole body product, there's something for everyone in my shop. \n\n Thank you for considering supporting my art and allowing me to continue doing what I love every day. 💗";

export default async function AboutMe() {
	const t = await getTranslations("/about.page");

	return (
		<main className="pb-8">
			<h1 className="text-3xl font-bold leading-none tracking-tight text-foreground">{t("title")}</h1>
			<div className="pt-4 flex flex-col lg:flex-row">
				<p className="leading-16 mb-5 flex items-center whitespace-pre-line text-base text-body-color lg:w-1/2 lg:pr-8">
					{selfIntro}
				</p>
				<div
					className="h-full w-full wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
					data-wow-delay=".2s"
				>
					<Image src={AboutMeImage} alt="about-me" fill className="mx-auto max-w-full rounded-lg lg:mr-0" />
				</div>
			</div>
		</main>
	);
}
