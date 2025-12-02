import logoImg from '../src/assets/images/logo-white.png';

function Footer() {
  return (
    <>
      <footer className="flex w-full items-center justify-center bg-black py-14">
        <a href="#hero">
          <img
            src={logoImg}
            alt="Footer Logo"
            className=""
          />
        </a>
      </footer>
    </>
  );
}

export default Footer;
