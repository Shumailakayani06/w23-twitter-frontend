import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
    return (
      <header>
        <div>
          <nav className="nav">
            <img src="twitter.png" />

            <ul className="nav-ul">
              <li>
                <RxHamburgerMenu />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}
 
export default Header;