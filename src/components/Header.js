import Logo from '../elements/Logo.svg'

function Header(){
    return(
        <div className="header-container">
            <img src={Logo} className="img" alt="Logo do site"></img> 
            <ul className='Menu'>
                <a href='.'>Home</a>
                <a href='.'>Resources</a>
                <a href='.'>FAQs</a>
                <a href='.'>Blog</a>
            </ul>
            <button className='Login'>Log in</button>
            <button className='Joinnow'>Join now</button>
        </div>
    );
}

export default Header;