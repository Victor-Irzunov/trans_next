import { dataPrices } from "@/Constants/priceDataPages/DataPricePages"
import BtnOrder from "@/components/btn/btnOrder/BtnOrder"
import DescriptionsComp from "@/components/descriptionsComp/DescriptionsComp"
import Image from "next/image"

export const metadata = {
	title: 'Перевозка мебели в Минске | Транспортная компания Trans-gruz.by',
	description: 'Недорогая и профессиональная перевозка мебели в Минске от компании Trans-gruz.by. Экономьте время и средства, заказывая перевозку мебели у опытных грузчиков и водителей. Гарантированная безопасность и надежность доставки.',
};


const page = () => {
	return (
		<main className="py-28">
			<div className="container mx-auto">
				<section className="">

					<div className="mb-10 sd:text-center xz:text-left">
						<h1 className='xz:text-4xl sd:text-6xl uppercase tracking-wider'>
							Перевозка мебели в Минске
						</h1>
						<h2 className='uppercase text-xl mt-6 font-semibold'>
							опытные грузчики
						</h2>
					</div>

					<div className="mt-8">
						<Image
							src='/uslugi/perevozka-mebeli/main.webp'
							alt="Перевозка мебели в Минске"
							className="object-cover w-full h-full mx-auto mt-12"
							style={{ width: 'auto', height: 'auto' }}
							width={612} height={480} loading="eager" />
					</div>

					<div className="mt-16">
						<h2 className="font-bold text-xl mb-6">
							Тариф на перевозку мебели в Минске
						</h2>
						<DescriptionsComp data={dataPrices.mebel} title="Заказать перевозку мебели в Минске" />

						<div className="mt-6 flex justify-end">
							<BtnOrder title={`Заказать перевозку мебели`} />
						</div>

						<p className="mt-8 font-light text-justify pl-2">
							Наша компания, специализирующаяся на перевозке мебели и ценных вещей в Минске, предлагает выгодные тарифы, которые помогут вам значительно сэкономить при перемещении ваших ценных грузов. Наши опытные водители обеспечивают безопасность и надежность доставки, а также гарантируют точную и оперативную подачу машины. Мы понимаем, как важно оперативно и аккуратно доставить вашу мебель и вещи, поэтому наша команда всегда готова удовлетворить ваши потребности в перевозке мебели в самые кратчайшие сроки.
						</p>
						<div className="my-7 text-center">
							<p className="mb-4 font-semibold">
								Заказать перевозку вещей в Минске можно по телефону:
							</p>
							<a href="tel:80447009000" className="text-3xl font-bold">
								8 (044) 700-90-00
							</a>
						</div>
					</div>


					<article className="mt-20">
						<h3 className="font-bold text-2xl uppercase mb-4">
							Что важно учитывать при перевозки мебели
						</h3>
						<p className="text-justify">
							Перевозка мебели может быть задачей, требующей особого внимания и организации. Независимо от того, вы переезжаете в новый дом или офис, приобретаете новую мебель или просто решаете перенести существующую, важно учитывать несколько ключевых моментов, чтобы обеспечить безопасность и надежность перевозки.
						</p>

						<ul className='mt-4'>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Подготовьте мебель:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Прежде чем начать перевозку мебели, убедитесь, что она готова к транспортировке. Разберите более крупные предметы, если это возможно, чтобы уменьшить объем и облегчить их перевозку. Также зафиксируйте все движущиеся части, чтобы избежать повреждений.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Выберите правильное транспортное средство:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Определите, какой тип транспортного средства подходит для вашей мебели. Это может быть грузовик, фургон или специализированный автомобиль для перевозки мебели. Подберите размер транспорта, который соответствует вашему грузу.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Подготовьте материалы для упаковки:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Вложите время и средства в качественные материалы для упаковки мебели. Используйте пузырчатую пленку, пленку-стрейч, плотные картонные коробки и уголки для защиты углов и краев мебели. Это поможет предотвратить повреждения в процессе перевозки.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Зафиксируйте мебель в транспорте:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Обязательно правильно закрепите мебель внутри транспорта. Используйте ремни и страховочные устройства, чтобы предотвратить смещение и повреждения во время движения.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Закажите профессиональные услуги:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Перевозка мебели может быть сложной задачей, и профессиональные услуги могут сэкономить вам много времени и беспокойства. Опытные грузчики и водители знают, как перевозить мебель безопасно и эффективно.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Планируйте маршрут и время:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Подумайте о маршруте и времени перевозки. Учтите движение на дорогах и выберите оптимальное время для перемещения мебели, чтобы избежать пробок и неудобств.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Проверьте мебель после доставки:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									После того как мебель доставлена, обязательно проведите проверку на наличие повреждений. Если обнаружены повреждения, сфотографируйте их и свяжитесь с транспортной компанией или страховой компанией для решения вопроса об ущербе.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Экономьте на перевозке:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Сравните тарифы различных транспортных компаний и выберите наиболее выгодное предложение. Но не забывайте о надежности и репутации компании.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Закажите заранее:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Планируйте перевозку заранее, особенно если у вас есть жесткие сроки. Заказывая заранее, вы сможете выбрать удобное время и добраться за профессиональной помощью, чтобы избежать суеты и ненужных стрессов.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Экономия пространства:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Опытные грузчики знают, как компактно и эффективно упаковать мебель, чтобы она занимала минимальное пространство в транспортном средстве. Это может сэкономить вам деньги, так как вам не потребуется заказывать дополнительные машины из-за неэффективной загрузки.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Безопасность первым делом:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									При перевозке мебели всегда ставьте безопасность на первое место. Не пытайтесь поднимать тяжелые предметы самостоятельно, особенно если у вас нет опыта и подходящего оборудования. Лучше доверьтесь профессионалам, чтобы избежать травм и повреждений мебели.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Учтите особенности мебели:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Разные предметы мебели требуют разного подхода к перевозке. Например, зеркала и стеклянные поверхности нужно дополнительно защитить от ударов и вибрации. Также обратите внимание на особенности демонтажа и сборки мебели.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Поддерживайте коммуникацию:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Если вы нанимаете транспортную компанию, поддерживайте коммуникацию с водителями и грузчиками. Это поможет координировать процесс и решать любые вопросы в реальном времени.
								</p>
							</li>
						</ul>
						<p className="mt-5 text-justify font-semibold">
							Заказывая перевозку мебели у профессионалов, вы экономите не только время, нервы, но и средства, так как риски повреждений мебели снижаются. Не забывайте о правильной подготовке и планировании, чтобы ваша мебель достигла нового места в идеальном состоянии. Поэтому, если у вас есть перевозка мебели в планах, обращайтесь к нам, и мы с удовольствием поможем вам сэкономить и обеспечить безопасную доставку ваших ценных вещей.
						</p>
					</article>

					<p className="mt-20 font-bold text-center text-xl">
						Не упустите шанс сэкономить время и нервы при перевозке мебели! Закажите профессиональные услуги по перевозке мебели прямо сейчас, и наши опытные грузчики и водители сделают все возможное, чтобы ваш переезд был максимально комфортным и безопасным. Нажмите на кнопку "Заказать перевозку" или позвоните нам по номеру [ваш номер телефона], и мы ответим на все ваши вопросы и организуем перевозку вашей мебели в Минске на самом высоком уровне. Доверьтесь профессионалам, и ваша мебель дойдет до нового дома в идеальном состоянии!
					</p>
				</section>
			</div>
		</main>
	)
}

export default page