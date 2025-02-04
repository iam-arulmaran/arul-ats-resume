import "./Header.scss";
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Header() {
  return (
    <section className="header-container">
      <h1>Arulmaran Gunasekaran</h1>
      <span className="desgination">
        Full Stack Developer | Senior Technical Lead
      </span>
      <div className="contact-list">
        <a href="">
          <MailIcon />
          iam.arulmaran@gmail.com
        </a>
        <a href="">
          <SmartphoneIcon />
          +91 9821070180
        </a>
        <a href="">
          <LocationOnIcon />
          Karaikal
        </a>
        <a href="">
          <LinkedInIcon />
          in/arulmaran
        </a>
      </div>
    </section>
  );
}
