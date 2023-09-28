import { dataPrices } from "@/Constants/priceDataPages/DataPricePages"
import BtnOrder from "@/components/btn/btnOrder/BtnOrder"
import DescriptionsComp from "@/components/descriptionsComp/DescriptionsComp"
import Image from "next/image"

export const metadata = {
	title: 'Вывоз строительного мусора в Минске | Компания Trans-gruz.by',
	description: 'Надежный и экологичный вывоз строительного мусора в Минске и области. Мы предлагаем профессиональные услуги по вывозу и утилизации строительных отходов. Закажите вывоз строительного мусора сейчас и обеспечьте чистоту на вашем объекте!',
};



const page = () => {
	return (
		<main className="py-28">
			<div className="container mx-auto">
				<section className="">

					<div className="mb-10 sd:text-center xz:text-left">
						<h1 className='xz:text-4xl sd:text-6xl uppercase tracking-wider'>
							Вывоз строительного мусора в Минске
						</h1>
						<h2 className='uppercase text-xl mt-6 font-semibold'>
							вывоз мусора с/без грузчиками
						</h2>
					</div>

					<div className="mt-8">
						<Image
							src='/uslugi/vyvoz-stroitelnogo-musora/musor.webp'
							alt="Грузоперевозки по Беларуси"
							className="object-cover w-full h-full mx-auto mt-12"
							style={{ width: 'auto', height: 'auto' }}
							width={612} height={480} loading="eager" />
					</div>

					<div className="mt-16">
						<h2 className="font-bold text-xl mb-6">
							Тариф на Вывоз строительного мусора в Минске
						</h2>
						<DescriptionsComp data={dataPrices.musor} />

						<div className="mt-6 flex justify-end">
							<BtnOrder title={`Заказать Вывоз мусора`} />
						</div>

						<p className="mt-8 font-light text-justify pl-2">
							Наша компания, специализирующаяся на вывозе строительного мусора в Минске, предлагает выгодные тарифы, которые помогут вам значительно сэкономить при утилизации отходов. Наши опытные водители обеспечивают безопасность и надежность доставки, а также гарантируют быструю подачу машины. Мы понимаем, как важно оперативно избавиться от строительных отходов, поэтому наша команда всегда готова удовлетворить ваши потребности в вывозе мусора в самые кратчайшие сроки.
						</p>
						<div className="my-7 text-center">
							<p className="mb-4 font-semibold">
								Заказать вывоз мусора в Минске можно по телефону:
							</p>
							<a href="tel:80447009000" className="text-3xl font-bold">
								8 (044) 700-90-00
							</a>
						</div>
					</div>


					<article className="mt-20">
						<h3 className="font-bold text-2xl uppercase mb-4">
							Как проходит процесс вывоза мусора при заказе грузчиков
						</h3>
						<p className="text-justify">
							При заказе вывоза строительного мусора в Минске у нас, вы получаете не только утилизацию отходов, но и высококвалифицированных грузчиков, которые делают этот процесс максимально удобным и эффективным.
						</p>

						<ul className='mt-4'>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Организация заказа.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Все начинается с вашего звонка или онлайн-заявки. Мы быстро реагируем на ваш запрос и организовываем вывоз мусора в удобное для вас время.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Подготовка к вывозу.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									При прибытии нашей команды грузчиков на место, они не только занимаются утилизацией мусора, но и предоставляют дополнительные услуги. Например, они убирают подъезды и лифты, чтобы предотвратить возможные повреждения. Это делает процесс вывоза безопасным и минимизирует риски.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Эффективная упаковка мусора.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Наши опытные грузчики знают, как компактно и удобно упаковать мусор, чтобы максимально экономить место в машине. Благодаря их опыту и навыкам, вам не придется заказывать дополнительные машины для утилизации большого объема мусора. Это позволяет вам сэкономить на затратах.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Скорость и чистота.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Наши грузчики работают быстро и профессионально. Они понимают, что ваше время ценно, и стараются закончить вывоз мусора как можно быстрее. После завершения работ убирают за собой, оставляя место в чистоте.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Экологичная утилизация.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Мы также следим за экологией и гарантируем, что мусор будет утилизирован в соответствии с экологическими стандартами.
								</p>
							</li>

						</ul>

						<p className="mt-5 text-justify font-semibold">
							Таким образом, заказывая вывоз строительного мусора у нас, вы получаете не только удобство и экономию, но и профессиональную команду, которая сделает этот процесс максимально приятным и эффективным.
						</p>

					</article>

					<article className="mt-16">
						<h5 className="uppercase font-bold">
							Процесс вывоза мусора без грузчиков
						</h5>

						<p className="mt-4">
							Когда речь идет о вывозе строительного мусора или других отходов, важно знать, что существует эффективная и удобная услуга, которая не требует наличия грузчиков. Этот процесс может быть надежным и простым, а мы расскажем, как он работает.
						</p>

						<ul className='mt-4'>
							<li className='mb-2'>
								<h6 className='font-semibold'>
									Заказ услуги.
								</h6>
								<p className='pl-4 text-justify mt-2'>
									Процесс начинается с вашего обращения к профессиональной компании, предоставляющей услуги по вывозу мусора. Вы можете заказать эту услугу онлайн или по телефону, выбрав удобное для вас время.
								</p>
							</li>
							<li className='mb-2'>
								<h6 className='font-semibold'>
									Подготовка мусора.
								</h6>
								<p className='pl-4 text-justify mt-2'>
									Перед приездом специалистов, вам потребуется подготовить мусор. Это означает, что вы должны убедиться, что мусор находится в удобном месте для погрузки. Вам не нужно поднимать или перетаскивать мусор сами, так как отсутствие грузчиков не означает отсутствие помощи. Однако, необходимо обеспечить доступ к месту, где находится мусор.
								</p>
							</li>
							<li className='mb-2'>
								<h6 className='font-semibold'>
									Погрузка мусора.
								</h6>
								<p className='pl-4 text-justify mt-2'>
									После прибытия специалистов, они займутся погрузкой мусора в транспортное средство. Это может быть грузовик, контейнер или другая машина, в зависимости от объема мусора. Вы можете быть уверены, что опытные водители обеспечат эффективную погрузку.
								</p>
							</li>
							<li className='mb-2'>
								<h6 className='font-semibold'>
									Утилизация мусора.
								</h6>
								<p className='pl-4 text-justify mt-2'>
									После того как мусор загружен, его утилизация становится задачей специалистов. Они гарантируют, что мусор будет утилизирован в соответствии с экологическими стандартами и законами.
								</p>
							</li>
							<li className='mb-2'>
								<h6 className='font-semibold'>
									Завершение заказа.
								</h6>
								<p className='pl-4 text-justify mt-2'>
									По завершении процесса вывоза мусора, специалисты уберут за собой и оставят место в чистоте. Вам не придется беспокоиться о дополнительных работах.
								</p>
							</li>
						</ul>

						<p className="text-justify font-semibold mt-8">
							Таким образом, процесс вывоза мусора без грузчиков является удобным и эффективным способом избавиться от отходов. Вы можете заказать эту услугу и быть уверенными в том, что профессионалы справятся с задачей качественно и без лишних хлопот.
						</p>
					</article>

					<p className="mt-20 font-bold text-center text-xl">
						Не откладывайте заботу о вывозе мусора на потом. Оптимизируйте процесс и сэкономьте свое время и усилия, заказав вывоз мусора прямо сейчас! Наши профессионалы готовы обеспечить надежную и безопасную утилизацию вашего мусора. Сделайте свой заказ уже сегодня и наслаждайтесь чистотой и порядком без лишних хлопот.
					</p>
				</section>
			</div>
		</main>
	)
}

export default page