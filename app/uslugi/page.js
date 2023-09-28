import CardUslugiComp from "@/components/uslugiCard/CardUslugiComp"


const page = () => {
	return (
		<main className="py-28">
			<div className="container mx-auto">
				<section className="">

					<div className="">
						<h1 className="uppercase xz:text-2xl sd:text-5xl">
							Услуги по грузоперевозкам в Минске
						</h1>

						<p className="mt-6 font-light text-justify">
							Наши услуги по грузоперевозкам в Минске — это надежное и профессиональное решение для перевозки грузов любого типа и объема. Мы предлагаем широкий спектр услуг, включая грузоперевозки внутри города и по всей Беларуси. Наш опыт и внимание к деталям гарантируют безопасность и своевременную доставку вашего груза.
						</p>
					</div>

					<div className="mt-16 text-center">
						<h2 className="uppercase font-semibold text-xl">
							Услуги грузоперевозок
						</h2>
						<CardUslugiComp />
					</div>

				</section>
			</div>
		</main>
	)
}

export default page