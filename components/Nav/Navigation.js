import Link from 'next/link';
import SocialLinks from '../Reusable/SocialLinks';

export default function Navigation() {
  let nav = {
    checked: false,
  };
  if (process.browser) {
    nav = document.getElementById('navi-toggle');
  }

  const handleClick = (e) => {
    nav.checked = false;
  };

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list" onClick={handleClick}>
          <li className="navigation__item">
            <Link href="#header">
              <a className="navigation__header">Nick De Raj</a>
            </Link>
          </li>
          <div style={{ padding: '2rem 0' }} />
          <li className="navigation__item">
            <Link href="#about">
              <a className="navigation__link">About</a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="#projects">
              <a className="navigation__link">Projects</a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="#skills">
              <a className="navigation__link">Skills</a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="#experience">
              <a className="navigation__link">Work Experience</a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="#contact">
              <a className="navigation__link">Contact</a>
            </Link>
          </li>
          <div style={{ padding: '2rem 0' }} />
        </ul>
        <SocialLinks />
      </nav>
    </div>
  );
}
