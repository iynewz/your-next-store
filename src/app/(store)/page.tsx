import { publicUrl } from "@/env.mjs";
import AccessoriesImage from "@/images/accessories.jpg";
import ApparelImage from "@/images/apparel.jpg";
import ImgSrc from "@/images/hero/image.png";
import { CategoryBox } from "@/ui/category-box";
import { ProductList } from "@/ui/products/product-list";
import { YnsLink } from "@/ui/yns-link";
import * as Commerce from "commerce-kit";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const products = await Commerce.productBrowse({ first: 6 });
	const t = await getTranslations("/");

	return (
		<main>
			<section className="rounded h-screen">
				<div className="mx-auto items-center justify-items-center px-8 sm:px-16 ">
					{/* hero */}
					<div className="absolute bg-red-200 w-screen h-screen top-0 left-0 ">
						<Image src={ImgSrc} fill alt="" />

						<div className="w-full space-y-4 align-middle absolute top-1/2 flex justify-center">
							<div className="max-w-2xl flex flex-col space-y-4 align-middle items-center">
								<h2 className="text-balance text-2xl font-bold tracking-tight md:text-4xl text-white text-center">
									{t("hero.title")}
								</h2>
								<p className="text-pretty text-white text-center">{t("hero.description")}</p>
								<YnsLink
									className="inline-flex h-10 items-center justify-center rounded-full text-neutral-900 px-6 font-medium bg-neutral-50 transition-colors hover:text-neutral-900/90 focus:outline-none focus:ring-1 focus:ring-neutral-950"
									href={t("hero.link")}
								>
									{t("hero.action")}
								</YnsLink>
							</div>
						</div>
					</div>
					{/* <div className="max-w-md space-y-4">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              {t("hero.title")}
            </h2>
            <p className="text-pretty text-neutral-600">
              {t("hero.description")}
            </p>
            <YnsLink
              className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-900 px-6 font-medium text-neutral-50 transition-colors hover:bg-neutral-900/90 focus:outline-none focus:ring-1 focus:ring-neutral-950"
              href={t("hero.link")}
            >
              {t("hero.action")}
            </YnsLink>
          </div> */}
					{/* <Image
						alt="Cup of Coffee"
						loading="eager"
						priority={true}
						className="rounded"
						height={450}
						width={450}
						src="https://files.stripe.com/links/MDB8YWNjdF8xT3BaeG5GSmNWbVh6bURsfGZsX3Rlc3RfaDVvWXowdU9ZbWlobUIyaHpNc1hCeDM200NBzvUjqP"
						style={{
							objectFit: "cover",
						}}
						sizes="(max-width: 640px) 70vw, 450px"
					/> */}
				</div>
			</section>

			<section className="w-full py-8">
				<div className="grid gap-8 lg:grid-cols-2">
					{[
						{ categorySlug: "customized", src: AccessoriesImage },
						{ categorySlug: "apparel", src: ApparelImage },
					].map(({ categorySlug, src }) => (
						<CategoryBox key={categorySlug} categorySlug={categorySlug} src={src} />
					))}
				</div>
			</section>

			<ProductList products={products} />
		</main>
	);
}
