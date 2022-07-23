import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-center title'>Take the first step in your healing</h1>

      <div className='flex'>
        <img className='p-5' src='https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' alt='hands coming together'></img>
        <p className='text-justify p-5 text-3xl'>
          <b className='text-4xl'>TherapyReady</b> is here to provide you with an easygoing, interactive experience in the first step of changing your life. Choosing a therapist and deciding on a clinic can seem daunting and worrisome, but it doesn't have to be.
        </p>


      </div>

      <div className='flex py-5 justify-between'>
        <p className='text-justify p-5 text-3xl'>
          We provide you with many options to choose from all within your area, or a virtual visit away. We let you know how much they cost, areas they specialize in, what insurances they accept,and more! All so you don't have to do most of the leg work and can spend more time getting the aid you deserve and need!
        </p>
        <img className='p-5' src='https://images.unsplash.com/photo-1604881991664-593b31b88488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRoZXJhcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=80' alt='people chatting with one another'></img>
      </div>
      <div className='flex py-5'>
        <img className='p-5' src='https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvdW5zZWxpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="sign that says, this is the sign you've been looking for"></img>
        <div>
          <p className='text-justify p-5 text-3xl'>Check it out today! Find the right clinic you feel comfortable walking into. Discover the counselor you're ok with talking to.
          </p>
          <p className='text-justify p-5 text-3xl'>
            "Nothing will work unless you do"
          </p>
          <p className='text-center p-5 text-3xl'>
            -Maya Angelou
          </p>
        </div>
      </div>
    </div>
  )
}

export default About