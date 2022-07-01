import Logo from './Logo.svg';
import Menu from './Menu';
import Button from './Buttons'


function Header(){
    return (
        <div>
            <img src={Logo} className="App-logo" alt="logo" />
            <Menu></Menu>
            <Button></Button>
        </div>
    );
}

export default Header;