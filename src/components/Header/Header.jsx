import "./Header.scss";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "../../constants/data/profile.json";

export function Header() {
  const {
    email,
    fullName,
    jobDesignation,
    jobTitle,
    linkedIn,
    location,
    phone,
  } = profile;
  return (
    <section className="header-container">
      <h1>{fullName}</h1>
      <span className="desgination">
        {jobTitle} | {jobDesignation}
      </span>
      <div className="contact-list">
        <a href={`mailto:${email}`}>
          <MailIcon />
          {email}
        </a>
        <a href={`tel:${phone}`}>
          <SmartphoneIcon />
          {phone}
        </a>
        <a href="https://g.co/kgs/QaCPLhA" target="_blank">
          <LocationOnIcon />
          {location}
        </a>
        <a href={linkedIn.link} target="_blank">
          <LinkedInIcon />
          {linkedIn.name}
        </a>
      </div>
    </section>
  );
}
