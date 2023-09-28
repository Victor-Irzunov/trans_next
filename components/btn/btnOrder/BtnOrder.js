"use client"
import ModalComp from "@/components/modal/ModalComp";
import { Button } from "antd"
import { useState } from "react";

const BtnOrder = ({title}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};
	return (
		<div>
			<Button onClick={()=>showModal()}>
				Заказать
			</Button>

			<ModalComp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={title} />
		</div>
	)
}

export default BtnOrder