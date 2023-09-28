import { dataPrices } from "@/Constants/priceDataPages/DataPricePages"
import DescriptionsComp from "@/components/descriptionsComp/DescriptionsComp"
import Image from "next/image"


const page = () => {
	return (
		<main className="py-28">
			<div className="container mx-auto">
				<section className="">

					<div className="mb-10 sd:text-center xz:text-left">
						<h1 className='xz:text-4xl sd:text-6xl uppercase tracking-wider'>
							Грузоперевозки по Беларуси
						</h1>
						<p className='uppercase text-xl mt-4 font-semibold'>
							Опытные Грузчики
						</p>
					</div>

					<div className="mt-8">
						<Image
							src='/uslugi/gruzoperevozki-po-belarusi/main.webp'
							alt="Грузоперевозки по Беларуси"
							className="object-cover w-full h-full mx-auto mt-12"
							style={{ width: 'auto', height: 'auto' }}
							width={612} height={480} loading="eager" />
					</div>

					<div className="mt-16">
						<h2 className="font-bold text-xl mb-6">
							Тариф на Грузоперевозки
						</h2>
						<DescriptionsComp data={dataPrices.belarus} />
					</div>

				</section>
			</div>
		</main>
	)
}

export default page