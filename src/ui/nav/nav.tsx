import LogoImage from "@/images/logo/logo.svg";
import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SearchNav } from "@/ui/nav/search-nav";
import { SeoH1 } from "@/ui/seo-h1";
import { YnsLink } from "@/ui/yns-link";
import Image from "next/image";

const links = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Customized",
		href: "/category/customized",
	},
	{
		label: "Ready-made pieces",
		href: "/category/ready-made",
	},
	{
		label: "About me",
		href: "/about",
	},
];

export const Nav = async () => {
	return (
		<header className="sticky top-0 z-40 border-b py-4 bg-white bg-opacity-80 shadow-sm">
			<div className="sm:items-centerm mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:px-6 md:flex-nowrap lg:px-8">
				<YnsLink href="/">
					<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold hidden">Felt with love</SeoH1>
					<Image src={LogoImage} alt="logo" width={10} height={10} className="w-20" />
				</YnsLink>

				<div className="sm:mr-auto">
					<NavMenu links={links} />
				</div>

				<div className="flex items-center justify-start gap-x-6">
					<SearchNav />
					<CartSummaryNav />
				</div>
			</div>
		</header>
	);
};
