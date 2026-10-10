import { Link } from 'react-router-dom';
import { company, contact } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logo-light.png`}
              alt={company.name}
              width="212"
              height="52"
              />
            <p>{company.blurb}</p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/about#founder">Our story</Link></li>
              <li><Link to="/about#approach">How we work</Link></li>
              <li><a href={company.profilePdf} target="_blank" rel="noopener noreferrer">Firm profile (PDF)</a></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#accounting">Accounting &amp; finance operations</Link></li>
              <li><Link to="/services#assurance">Assurance &amp; advisory</Link></li>
              <li><Link to="/services#sectors">Nine sectors</Link></li>
              <li><Link to="/services#engagement">Project-based or ongoing</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><a href={`mailto:${contact.founderEmail}`}>{contact.founderEmail}</a></li>
              <li><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></li>
              <li><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Clients served across {company.countries}</span>
        </div>
      </div>
    </footer>
  );
}
