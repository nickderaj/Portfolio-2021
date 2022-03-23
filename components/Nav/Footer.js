import SocialLinks from '../Reusable/SocialLinks';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer">
      <SocialLinks />
      <div className="copyright">© {year} | Nick De Raj</div>
    </footer>
  );
}
