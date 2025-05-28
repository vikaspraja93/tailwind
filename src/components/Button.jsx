import React from 'react' ;

const Button = ({styles}) => {
  return (
    <button type='button' className={`px-5 py-4 bg-blue-gradient font-poppins font-medium text-[17px] text-primary outline-none ${styles} rounded-2xl `}>
     Get Started
    </button>
  )
}

export default Button
