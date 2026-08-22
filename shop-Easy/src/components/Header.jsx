import './Header.css';
function Header(){
    return (
        <>
        <header className="header">
            <div>🛒 ShopEasy</div>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Categoires</a>
                <a href="#">Cart</a>
            </nav>
        </header>
        </>
    );
}
export default Header;