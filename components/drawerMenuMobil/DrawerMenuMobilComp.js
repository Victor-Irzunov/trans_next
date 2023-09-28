import { Divider, Drawer } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import link from '../../public/link.svg'
import { dataService } from '@/Constants/data/DataService';


export const DrawerMenuMobilComp = ({ isOpen, setIsOpen, onClose }) => {
	const onClose2 = () => {
		setIsOpen(false)
		
	};
	const onClose3 = () => {
		onClose()
		setIsOpen(false)
	};

	return (
		<Drawer
			title={<p className='text-xl'>Услуги</p>}
			placement='right'
			onClose={onClose2}
			open={isOpen}
			key='011'
			width='320px'
		>
			<ul className=''>
				{
					dataService.map((el, idx) => {
						return (
							<div className='mb-2' key={el.id}>
								<Divider className={`${idx === 0 && 'hidden'}`} />
								<p className='font-semibold text-base mb-1 uppercase'>
									{el.title}
								</p>
								<ul className='h-full text-sm mt-3 cursor-pointer flex flex-col justify-between items-start'>
									{
										el.children && el.children.map(elem => {
											return (
												<li className='underline mb-3 flex w-full justify-start items-end' key={elem.id}>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/${elem.link}`}
														className="cursor-pointer hover:text-blue-700"
														onClick={onClose3}
													>
														{elem.title2}
													</Link>
													<Image src={link} width={15} alt={elem.title2} className='ml-2' />
												</li>
											)
										})
									}
								</ul>
							</div>
						)
					})
				}
			</ul>
		</Drawer>
	)
}
