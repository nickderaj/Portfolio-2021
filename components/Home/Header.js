import Image from 'next/image';
import ThemeToggle from '../Reusable/ThemeToggle';

export default function Header({ setTheme }) {
  return (
    <section id="header">
      <div className="title">
        <div className="title-image">
          <Image
            src="/images/Nick.png"
            alt="Nick"
            width="1"
            height="1"
            layout="responsive"
            priority
          />
        </div>
        <h1>Nick De Raj</h1>
        <h3>FULL-STACK DEVELOPER</h3>
      </div>
      <ThemeToggle toggle={setTheme} />
    </section>
  );
}
