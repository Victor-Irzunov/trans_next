import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="mt-auto relative bg-stone-800 py-6">
			<div className="container mx-auto">
				<div className='flex justify-between items-start text-white flex-wrap'>

					<div className='font-light text-base xs:mb-4'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid text-lg'>
							Информация
						</p>
						<ul className='no-underline list-none pl-0'>
							<li className='no-underline list-none'>
								<Link href='/kontakty'>
									Контакты
								</Link>
							</li>
							<li className='no-underline list-none'>
								<Link href='/o-kompanii'>
									О компании
								</Link>
							</li>
						</ul>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0 xz:mt-2 ss:mt-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid text-lg'>
							Контакты
						</p>
						<p>
							<PhoneOutlined className='mr-3 rotate-90 text-lg' />
							<a href='tel:80447009000' className='text-white'>
								+375 44 700-90-00
							</a>
						</p>
						<p>
							<MailOutlined className='mr-3 text-lg' />
							...@gmail.com
						</p>
					</div>

					<address className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid font-light text-lg'>
							Юр. адрес
						</p>
						<p>
							220015, г. Минск, ул. Одоевского, 000
						</p>
					</address>
					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid font-light text-lg'>
							График работы
						</p>
						<p>
							Пн-Пт - 08:00 - 18:00
						</p>
						<p>
							Сб-Вс - выходной
						</p>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid font-light text-lg'>
							Мы в соц. сетях
						</p>
						<div className='flex justify-evenly items-center pt-3'>
							<a href='https://www.instagram.com/eo' target='_blank' >
								<Image src='/social-icon/instagram.svg' width={25} height={25} alt='иконка инстаграма' />
							</a>
							<a href={`${'https://t.me/@O'}`} target='_blank' >
								<Image src='/social-icon/telegram.svg' width={25}  height={25} alt='иконка телеграма' />
							</a>
							<a href='viber://chat?number=%2B375' target='_blank' >
								<Image src='/social-icon/viber.svg' width={25} height={25}  alt='иконка вайбера' />
							</a>
						</div>
					</div>
				</div>
				<div
					className='mt-6 border-t pt-2'
				>
					<p className='text-black xs:text-xs xz:text-[10px]' >Copyright © 2018-2023 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-100 no-underline'> VI:TECH</a>
					</p>
				</div>
			</div>
		</footer>
	)
}


export default Footer
