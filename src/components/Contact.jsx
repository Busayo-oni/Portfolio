import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto sm:py-10 p-5' id='work'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
      </div>

      <div className='max-w-[800px] mx-auto '>
        <div className='mt-6 bg-[#161616] rounded-xl '>
          <div className='p-10'>
            <form action="https://getform.io/f/azyyvjrb" method='POST'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                <div>
                  <div className='mt-2.5 relative'>
                    <input type="text" name='name' id='name' placeholder='Your Name' className='bg-[#161616] w-full px-4 py-4 text-gray-400 border placeholder-gray-400 border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />
                  </div>
                </div>
                <div>
                  <div className='mt-2.5'>
                    <input type="email" name='email' id='email' placeholder='Your Email' className='bg-[#161616] w-full px-4 py-4 text-gray-400 border placeholder-gray-400 border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='mt-2.5'>
                    <textarea name="message" id="message" placeholder='Your Message' className='bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:border-pink-600' rows="4"></textarea>
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <button type='submit' className='text-xl text-white font-semibold bg-primary-color w-full p-4 mt-2 rounded-md hover:bg-pink-700'>Send</button>
                </div>
              </div>
            </form>

          </div>

        </div>

      </div> 
      
      
    </div>
  )
}

export default Contact