import { MinusOutlined } from '@ant-design/icons'
import { PlusOutlined } from '@ant-design/icons'
import { Collapse } from 'antd';
import Testimonial from '../component/testimonial';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const tex = `yes it is,if you have a membership with us.otherwise it is charged as per the menu.some limit do apply as to how much items can be included in your luch
This limit is enough for any one person nd merely exists to discourage abusal of this system. `

const labe = `Do u have a 2 Bedroom suites`
const lab = `Are wifi included in the price`
const la = `Where can i reach u for support`
const l = `Is lunch provided free of cost  ?`

const Pricing = () => {

  const items = [

    {

      key: '1',
      label: <div className='text-secondary fs-5'>{l}</div>,
      children: <div className='text-secondary'>{tex}</div>,


    },
    {
      key: '2',
      label: <div className='text-secondary fs-5'>{labe}</div>,
      children: <div className='text-secondary'>{text}</div>,

    },

    {
      key: '3',
      label: <div className='text-secondary fs-5'>{lab}</div>,
      children: <div className='text-secondary'>{tex}</div>,

    },
    {
      key: '4',
      label: <div className='text-secondary fs-5'>{la}</div>,
      children: <div className='text-secondary'>{text}</div>,

    },
  ];


  return (


    <div className=''>
      <div className='container'>
        <Testimonial/>
      </div>
      <div className="container">
        <div className='row do' style={{ marginTop: "7rem" }}>
          <div className='col-sm-12 col-md-6 col-lg-6 '>

            <img src="image/18.png" alt="" width={'100%'} height={'80%'} />
          </div>

          <div className='col-sm-12 col-md-6 col-lg-6 mt-4'>

            <div className='text-center'>
              <h3 className='text-secondary fs-1'>Questions</h3>
              <h6 className='mb-4 mt-4'>Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.

              </h6>
            </div>

            <Collapse accordion defaultActiveKey={['6']} className='p-1' ghost items={items}
              expandIconPosition='right'
              expandIcon={({ isActive }) => isActive ? <MinusOutlined style={{ background: 'purple', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} /> : <PlusOutlined style={{ background: 'purple', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} />}
            />
          </div>

        </div>
      </div>

    </div>


  )
}
export default Pricing;

