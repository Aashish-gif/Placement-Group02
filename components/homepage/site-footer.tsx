import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from "lucide-react"

const serviceLinks = [
  { label: "Find Job", href: "https://placements.group/FindWork" },
  { label: "Blog", href: "https://placements.group/Blog" },
  { label: "Courses", href: "https://placements.group/Courses" },
  { label: "Resume Writing", href: "https://placements.group/ResumeServices" },
  { label: "LinkedIn Optimization", href: "https://placements.group/LinkedInServices" },
  { label: "Career Coaching", href: "https://placements.group/CareerCoaching" },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <a className="brand-lockup footer-brand" href="#home" aria-label="Placement Group home">
            <span className="brand-mark" aria-hidden="true"><Sparkles size={21} strokeWidth={2.4} /></span>
            <span className="brand-copy"><strong>Placement Group</strong><span>Professional Development</span></span>
          </a>
          <p>Empowering careers through comprehensive courses, professional resume crafting, and LinkedIn optimization services.</p>
          <div className="footer-contact-line"><Phone size={15} /><a href="tel:+18888033546">+1 (888) 803-3546</a></div>
          <div className="footer-contact-line"><Mail size={15} /><a href="mailto:info@placements.group">info@placements.group</a></div>
        </div>
        <div className="footer-office-column">
          <h3>Visit us</h3>
          <div className="footer-office"><MapPin size={16} /><div><strong>USA Office</strong><span>111 NE 1st St, Miami, FL 33132</span></div></div>
          <div className="footer-office"><MapPin size={16} /><div><strong>Canada Office</strong><span>138 Gardenvale Crescent, London, ON N6J 4B9, Canada</span></div></div>
        </div>
        <div className="footer-links-column">
          <h3>Services</h3>
          <ul>{serviceLinks.map((link) => <li key={link.label}><a href={link.href}>{link.label}<ArrowUpRight size={13} /></a></li>)}</ul>
        </div>
        <div className="footer-links-column">
          <h3>Company</h3>
          <ul>
            <li><a href="https://placements.group/Contact">Contact us<ArrowUpRight size={13} /></a></li>
            <li><a href="https://placements.group/About">About<ArrowUpRight size={13} /></a></li>
            <li><a href="https://placements.group/PrivacyPolicy">Privacy policy<ArrowUpRight size={13} /></a></li>
          </ul>
          <div className="everify-badge"><span className="everify-check">✓</span><span><strong>E-Verify</strong><small>Employment authorized</small></span></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2024 Placement Group. All rights reserved.</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></div>
    </footer>
  )
}
