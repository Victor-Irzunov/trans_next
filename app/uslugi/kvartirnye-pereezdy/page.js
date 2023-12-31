import { dataPrices } from "@/Constants/priceDataPages/DataPricePages"
import BtnOrder from "@/components/btn/btnOrder/BtnOrder"
import DescriptionsComp from "@/components/descriptionsComp/DescriptionsComp"
import Image from "next/image"

export const metadata = {
	title: 'Квартирные переезды в Минске | Транспортная компания Trans-gruz',
	description: 'Профессиональные квартирные переезды в Минске от компании Trans-gruz.by. Недорогая и аккуратная доставка ваших вещей. Экономьте время и средства при переезде с нами. Закажите квартирный переезд с опытными грузчиками и водителями.',
};


const page = () => {
	return (
		<main className="py-28">
			<div className="container mx-auto">
				<section className="">

					<div className="mb-10 sd:text-center xz:text-left">
						<h1 className='xz:text-4xl sd:text-6xl uppercase tracking-wider'>
							Квартирный переезд в Минске
						</h1>
						<h2 className='uppercase text-xl mt-6 font-semibold'>
							опытные грузчики
						</h2>
					</div>

					<div className="mt-8">
						<Image
							src='/uslugi/kvartirnye-pereezdy/kvartirnye.webp'
							alt="Перевозка мебели в Минске"
							className="object-cover w-full h-full mx-auto mt-12"
							style={{ width: 'auto', height: 'auto' }}
							width={612} height={480} loading="eager" />
					</div>

					<div className="mt-16">
						<h2 className="font-bold text-xl mb-6">
							Тариф на квартирный переезд в Минске
						</h2>
						<DescriptionsComp data={dataPrices.mebel} title="Заказать квартирный переезд" kvartira />

						<p className="mt-8 font-light text-justify pl-2">
							Наша компания, специализирующаяся на квартирных переездах в Минске, готова предложить вам выгодные тарифы и высококачественные услуги, которые помогут вам сэкономить и обеспечить надежную доставку ваших ценных грузов. Наши опытные водители, сосредоточенные на безопасности и аккуратности, обеспечивают точную и оперативную подачу машины, что делает процесс переезда более комфортным и безопасным.
						</p>
						<p className="mt-3 font-light text-justify pl-2">
							Мы понимаем, что ваши мебель и ценные вещи имеют для вас особое значение, поэтому мы подходим к их перевозке с особым вниманием. Наши специалисты знают, как правильно упаковать и зафиксировать груз, чтобы предотвратить повреждения в процессе перемещения. Мы также обеспечиваем аккуратную загрузку и выгрузку вашей мебели, чтобы она прибыла к вам в идеальном состоянии.
						</p>
						<div className="my-7 text-center">
							<p className="mb-4 font-semibold">
								Заказать организацию квартирного переезда в Минске можно по телефону:
							</p>
							<a href="tel:80447009000" className="text-3xl font-bold">
								8 (044) 700-90-00
							</a>
						</div>
					</div>


					<article className="mt-20">
						<h3 className="font-bold text-2xl uppercase mb-4">
							Как подготовиться к квартирному переезду: полезные советы
						</h3>
						<p className="text-justify">
							Квартирный переезд – это важное событие в жизни каждого. Независимо от того, переезжаете вы в новую квартиру в том же городе или собираетесь начать жизнь в другом населенном пункте, хорошая подготовка играет ключевую роль в обеспечении безпроблемного и комфортного переезда. В этой статье мы предоставим вам полезные советы, как правильно подготовиться к квартирному переезду.
						</p>

						<ul className='mt-4'>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Планирование и расписание.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Начните подготовку заранее. Определите дату переезда и составьте подробное расписание действий. Это поможет вам структурировать процесс и избежать срывов сроков.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Выбор надежной транспортной компании.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Если вы решите доверить перевозку профессионалам, выбирайте транспортную компанию с хорошей репутацией. Отзывы и рекомендации других клиентов могут быть весьма полезными.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Сбор и упаковка вещей.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Начните сортировку и упаковку вещей заранее. Отберите ненужные вещи для продажи, передачи или утилизации. Закажите качественные упаковочные материалы.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Пометка коробок.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Не забудьте пометить коробки с содержимым и указать комнату, в которой они должны быть размещены. Это сэкономит вам время при распаковке.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Особенности мебели.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Если у вас есть крупная мебель, сделайте фотографии и снимите размеры. Это поможет вам и грузчикам правильно разместить мебель в новой квартире.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Ценные вещи и документы.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Ценные вещи, деньги и документы лучше перевозить самостоятельно. Создайте специальную коробку или сумку для таких предметов и не давайте их в руки грузчикам.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									План новой квартиры.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Предварительно определите, где будет размещена мебель в новой квартире. Это поможет ускорить процесс разгрузки и распаковки.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Контроль и коммуникация.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Держите связь с грузчиками и водителями транспортной компании во время переезда. Эффективная коммуникация помогает решать вопросы быстро.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Очистка и уборка.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									После выезда из старой квартиры уделите внимание уборке. Никто не хочет оставлять неприятные сюрпризы для новых жильцов.
								</p>
							</li>


						</ul>
						<p className="mt-5 text-justify font-semibold">
							Подготовка к квартирному переезду – это важный шаг, который позволяет сделать этот процесс более гладким и меньше стрессовым. Следуя этим советам и доверяя профессионалам, вы сможете насладиться новой жизнью в своей квартире без лишних хлопот и забот. Не забудьте своевременно заказать квартирный переезд и начать подготовку – успех ваших перемещений в ваших руках.
						</p>
					</article>

					<p className="mt-20 font-bold text-center text-xl">
						Готовы сделать свой квартирный переезд максимально комфортным и беззаботным? Не откладывайте подготовку на потом – начните прямо сейчас! Закажите профессиональные услуги квартирного переезда у нас, и мы сделаем все возможное, чтобы ваш переезд стал приятным и безстрессовым событием. Позвоните нам или заполните форму заказа на сайте – мы всегда готовы помочь вам освободиться от хлопот и забот, связанных с переездом, и гарантировать, что вы насладитесь вашей новой квартирой с первого дня!
					</p>
				</section>
			</div>
		</main>
	)
}

export default page