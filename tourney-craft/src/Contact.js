import React from 'react'

const Contact = () => {
  return (
    <div className='Contact' id='contact'>
        <div className='top'>
            <div className='moto'>
                <img src="/logo.png" alt="Logo" />
                <p>Quicker like Flicker!</p>
            </div>
            <div className="credits">
                <div className='row'>
                    <a href="">Pinterest</a>
                    <a href="">Canva</a>
                    <a href="">ILoveimg</a>
                    <a href="">ChatGPT</a>
                </div>
                <div className='row'>
                    <a href="">VS Code</a>
                    <a href="">Github</a>
                    <a href="">MDN</a>
                    <a href="">Bro Code</a>
                    
                </div>
                <div className='row'>
                    <a href="">GeekforGeeks</a>
                    <a href="">Stack Overflow</a>
                    <a href="">W3 Schools</a>
                </div>
            </div>
        </div>
            <hr className='toby'/>
        <div id="bottom">
            <a href="">E-mail</a>
            <a href="">Linked in</a>
            <a href="">Github</a>
        </div>





    </div>
  )
}

export default Contact