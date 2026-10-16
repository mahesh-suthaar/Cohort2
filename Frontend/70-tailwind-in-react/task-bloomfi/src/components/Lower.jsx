import React from 'react'
import Card from './Card'

const Lower = () => {
  return (
    <div className='lower w-full h-50 my-5 gap-4 grid grid-cols-2 '>
      <Card head={'Use Cases'} para={<> USD bloom offers a variety of use cases for<br/> developers, businesses and treasuries seeking<br/> secure and profitable stablecoin intergrations </>} />
      <Card head={'Business'} para={<> Boost user engagement by offering USD bloom , a secure<br/> flat-backed stablecoin with high yields, allowing your<br/> customers to earn effortlesssly on your platform </>} />
    </div>
  )
}

export default Lower
