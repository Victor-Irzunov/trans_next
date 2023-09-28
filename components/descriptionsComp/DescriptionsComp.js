"use client"
import { Descriptions } from 'antd';

const DescriptionsComp = ({ data }) => {
  return (
    <div className=''>
      <Descriptions
        title=""
        bordered
        column={3}
        layout='vertical'
      >
        {
          data.mass &&
          <Descriptions.Item label="Вес и объём">
            {`до ${data.mass} тонн и ${data.mass2}м`}<sup><small>3</small></sup>
          </Descriptions.Item>
        }
        {
          data.price &&
          <Descriptions.Item label="1 час (руб.)">{`${data.price}`}</Descriptions.Item>
        }

        {
          data.km &&
          <Descriptions.Item label="руб/км">{`${data.km}`}</Descriptions.Item>
        }

        <Descriptions.Item label="Грузчики (руб./час)">{`${data.gruz}`}</Descriptions.Item>
        <Descriptions.Item label="Время">{`${data.time}`}</Descriptions.Item>
      </Descriptions>

    </div>
  );
};

export default DescriptionsComp;
