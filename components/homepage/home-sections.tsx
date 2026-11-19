import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  ChartNoAxesCombined,
  Check,
  Clock3,
  Cloud,
  CodeXml,
  Database,
  FileText,
  HeartHandshake,
  MonitorCog,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  UsersRound,
  WalletCards,
  Workflow,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const partnerNames = ["Google", "Microsoft", "IBM", "Amazon", "Netflix", "Meta", "Uber", "Apple", "Tesla", "Salesforce", "Oracle", "Adobe", "Intel", "Cisco", "PayPal", "LinkedIn", "Spotify"]

export function CompanyStrip() {
  return (
    <section className="company-strip" aria-label="Companies our students work at">
      <div className="company-strip-heading">Our students work at top companies across the globe</div>
      <div className="company-marquee" aria-hidden="true">
        <div className="company-marquee-track">
          {[...partnerNames, ...partnerNames].map((name, index) => (
            <span className="company-wordmark" key={`${name}-${index}`}>{name}</span>
          ))}
        </div>
      </div>
      <p className="sr-only">Our students work at Google, Microsoft, IBM, Amazon, Netflix, Meta, Uber, Apple, Tesla, Salesforce, Oracle, Adobe, Intel, Cisco, PayPal, LinkedIn, and Spotify.</p>
    </section>
  )
}

const jobCategories: { title: string; icon: LucideIcon; roles: string[]; tone: string }[] = [
  { title: "Engineering", icon: CodeXml, tone: "coral", roles: ["Data Engineer", "Cloud Engineer", "DevOps Engineer", "Full Stack Developer"] },
  { title: "Business & Finance", icon: WalletCards, tone: "lavender", roles: ["Business Analyst", "Financial Analyst", "Accounts Manager", "Bookkeeper"] },
  { title: "Healthcare & Admin", icon: Stethoscope, tone: "mint", roles: ["Medical Coder", "Medical Biller", "Patient Care Coordinator", "HR Admin"] },
  { title: "IT & Cloud", icon: Cloud, tone: "yellow", roles: ["AWS Solutions Architect", "Azure Administrator", "Cybersecurity Analyst", "Database Administrator"] },
]

export function JobsSection() {
  return (
    <section className="section jobs-section" id="jobs">
      <div className="section-container">
        <div className="jobs-topline">
          <div>
            <span className="section-kicker"><span className="kicker-dot" /> Your next opportunity</span>
            <h2>Find a role that<br /><span>moves you forward.</span></h2>
            <p className="section-intro">Jobs aggregated from LinkedIn, Indeed, ZipRecruiter, Glassdoor, Google Jobs, Monster, Dice, and 20+ more platforms. Apply directly through Placement Group with your resume.</p>
          </div>
          <a className="text-link" href="https://placements.group/FindWork">Browse all jobs <ArrowUpRight size={17} /></a>
        </div>
        <div className="jobs-stats">
          <div><strong>5,000<span>+</span></strong><small>Active jobs</small></div>
          <div><strong>40<span>+</span></strong><small>Job roles</small></div>
          <div><strong>5</strong><small>Countries</small></div>
          <div className="jobs-status"><span className="status-pulse" /> New opportunities added daily</div>
        </div>
        <div className="job-categories">
          {jobCategories.map(({ title, icon: Icon, roles, tone }) => (
            <article className="job-card" key={title}>
              <div className={`job-card-icon ${tone}`}><Icon size={20} /></div>
              <h3>{title}</h3>
              <ul>
                {roles.map((role) => <li key={role}><span className="role-bullet" />{role}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="jobs-bottom-link"><a className="button button-dark" href="https://placements.group/FindWork">Find your next job <ArrowRight size={16} /></a></div>
      </div>
    </section>
  )
}

const programs: { title: string; category: string; detail: string; icon: LucideIcon; tone: string; number: string }[] = [
  { title: "Full Stack Web Development", category: "Software & engineering", detail: "Build practical skills and create a portfolio that gets noticed.", icon: CodeXml, tone: "program-coral", number: "01" },
  { title: "Data Analytics with Python", category: "Data & analytics", detail: "Turn real-world data into insights teams can act on.", icon: ChartNoAxesCombined, tone: "program-lavender", number: "02" },
  { title: "Cybersecurity Fundamentals", category: "IT & cloud", detail: "Learn the foundations behind safer, stronger systems.", icon: ShieldCheck, tone: "program-mint", number: "03" },
]

export function CoursesSection() {
  return (
    <section className="section courses-section" id="courses">
      <div className="section-container">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker"><span className="kicker-dot" /> Learn by doing</span>
            <h2>Small sprints.<br /><span>Big career moves.</span></h2>
            <p className="section-intro">Jumpstart your career with our most popular Fast Forward 15-Day courses.</p>
          </div>
          <a className="text-link" href="https://placements.group/Courses">View all courses <ArrowUpRight size={17} /></a>
        </div>
        <div className="program-grid">
          {programs.map(({ title, category, detail, icon: Icon, tone, number }) => (
            <article className={`program-card ${tone}`} key={title}>
              <div className="program-card-top"><span className="program-icon"><Icon size={23} /></span><span className="program-number">{number}</span></div>
              <p className="program-category">{category}</p>
              <h3>{title}</h3>
              <p className="program-detail">{detail}</p>
              <div className="program-footer"><span><ClockIcon /> 15 days</span><a href="https://placements.group/Courses" aria-label={`Explore ${title}`}><ArrowUpRight size={18} /></a></div>
            </article>
          ))}
        </div>
        <p className="course-footnote"><Sparkles size={15} /> 65+ expert courses. Real skills, real projects, real momentum.</p>
      </div>
    </section>
  )
}

function ClockIcon() {
  return <span className="clock-icon" aria-hidden="true">15</span>
}

const services: { title: string; description: string; benefits: string[]; icon: LucideIcon; tone: string; href: string }[] = [
  { title: "Resume Writing", description: "Get a professionally written resume optimized according to market needs and ATS compliant.", benefits: ["ATS-optimized format", "Market-focused content", "Professional writing"], icon: FileText, tone: "service-coral", href: "https://placements.group/ResumeServices" },
  { title: "LinkedIn Grooming", description: "Optimize your LinkedIn profile according to job market needs to get noticed by recruiters.", benefits: ["Profile optimization", "Keyword strategy", "Recruiter visibility"], icon: Workflow, tone: "service-blue", href: "https://placements.group/LinkedInServices" },
  { title: "Career Coaching", description: "Get personalized career guidance and mentorship to accelerate your professional growth.", benefits: ["Career planning", "Interview preparation", "Skill development"], icon: HeartHandshake, tone: "service-yellow", href: "https://placements.group/CareerCoaching" },
]

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="section-container">
        <div className="centered-heading">
          <span className="section-kicker"><span className="kicker-dot" /> A little expert help</span>
          <h2>Show the world<br /><span>what you can do.</span></h2>
          <p className="section-intro">Get expert help to enhance your professional presence and land your dream job.</p>
        </div>
        <div className="service-grid">
          {services.map(({ title, description, benefits, icon: Icon, tone, href }) => (
            <article className="service-card" key={title}>
              <div className={`service-icon ${tone}`}><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>{benefits.map((benefit) => <li key={benefit}><Check size={15} />{benefit}</li>)}</ul>
              <a className="service-link" href={href}>Learn more <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  { quote: "The Fast Forward 15-Day program completely transformed my career. I went from zero coding knowledge to landing a job at Google in just 3 months!", name: "Sarah Johnson", title: "Full Stack Developer at Google", course: "Full Stack Web Development", initials: "SJ", color: "avatar-coral" },
  { quote: "Amazing instructors and practical curriculum. The hands-on projects helped me build a portfolio that impressed recruiters.", name: "Michael Chen", title: "Data Scientist at Microsoft", course: "Data Analytics with Python", initials: "MC", color: "avatar-blue" },
  { quote: "Best investment I ever made! The course was intensive but incredibly rewarding. Now I'm working in my dream field.", name: "Emily Rodriguez", title: "Cybersecurity Analyst at IBM", course: "Cybersecurity Fundamentals", initials: "ER", color: "avatar-green" },
]

export function TestimonialsSection() {
  return (
    <section className="section testimonials-section" id="stories">
      <div className="section-container">
        <div className="centered-heading">
          <span className="section-kicker"><span className="kicker-dot" /> Real people, real progress</span>
          <h2>Good things happen<br /><span>when you keep going.</span></h2>
          <p className="section-intro">Join thousands of professionals who have transformed their careers with our programs.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(({ quote, name, title, course, initials, color }) => (
            <article className="testimonial-card" key={name}>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((star) => <Star key={star} size={14} fill="currentColor" />)}</div>
              <Quote className="quote-mark" size={25} aria-hidden="true" />
              <blockquote>“{quote}”</blockquote>
              <div className="testimonial-course">Course: {course}</div>
              <div className="testimonial-person">
                <span className={`testimonial-avatar ${color}`}>{initials}</span>
                <span><strong>{name}</strong><small>{title}</small></span>
                <BadgeCheck className="verified-badge" size={18} aria-label="Verified graduate" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const careerGroups: { title: string; icon: LucideIcon; roles: string[] }[] = [
  { title: "Engineering", icon: CodeXml, roles: ["Data Engineer", "Cloud Engineer", "DevOps Engineer", "Full Stack Developer", "Civil Engineer", "Mechanical Engineer"] },
  { title: "Business & Finance", icon: WalletCards, roles: ["Business Analyst", "Financial Analyst", "Revenue Cycle Analyst", "Risk & Policy Analyst", "Accounts Manager", "Bookkeeper"] },
  { title: "Sales & Customer Success", icon: HeartHandshake, roles: ["Inside Sales Representative", "Business Development Executive", "Account Manager", "Client Relationship Manager", "Customer Success Manager", "Sales Operations Analyst"] },
  { title: "Healthcare & Admin", icon: Stethoscope, roles: ["Patient Care Coordinator", "Healthcare Data Analyst", "Medical Coder", "Medical Biller", "HR Admin", "Administrative Assistant"] },
  { title: "Operations & Supply Chain", icon: Workflow, roles: ["Supply Chain Analyst", "Inventory Planner", "Procurement Specialist", "Vendor Management Specialist", "Operations Manager"] },
  { title: "Data & Analytics", icon: Database, roles: ["Data Analyst", "Business Intelligence Analyst", "Quality Analyst", "Clinical Documentation Specialist", "Technical Writer"] },
  { title: "Support & Coordination", icon: UsersRound, roles: ["Customer Service Representative (CSR)", "Medical Administrative Assistant", "Payroll Specialist", "Executive Assistant"] },
  { title: "IT & Cloud", icon: MonitorCog, roles: ["AWS Solutions Architect", "Azure Administrator", "Google Cloud Engineer", "Cybersecurity Analyst", "Database Administrator"] },
]

export function CareerRolesSection() {
  return (
    <section className="section roles-section">
      <div className="section-container">
        <div className="section-heading-row roles-heading">
          <div>
            <span className="section-kicker"><span className="kicker-dot" /> A world of possibilities</span>
            <h2>Where could your<br /><span>skills take you?</span></h2>
          </div>
          <p className="section-intro">Our courses and services help you land roles at top companies like Google, Apple, Microsoft, Amazon, and more.</p>
        </div>
        <div className="career-grid">
          {careerGroups.map(({ title, icon: Icon, roles }) => (
            <article className="career-card" key={title}>
              <div className="career-card-heading"><span><Icon size={17} /></span><h3>{title}</h3></div>
              <ul>{roles.map((role) => <li key={role}>{role}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const reasons: { title: string; description: string; icon: LucideIcon; number: string }[] = [
  { title: "Fast Forward 15-Day Courses", description: "Quick learning in short periods with comprehensive coverage of all topics.", icon: Clock3, number: "01" },
  { title: "Practical Curriculum", description: "Hands-on projects and real-world scenarios to build job-ready skills.", icon: BookOpenCheck, number: "02" },
  { title: "Professional Services", description: "Expert resume writing and LinkedIn optimization for career success.", icon: Target, number: "03" },
  { title: "Career Support", description: "Ongoing guidance and support throughout your career journey.", icon: HeartHandshake, number: "04" },
]

export function WhyChooseSection() {
  return (
    <section className="section why-section">
      <div className="section-container">
        <div className="why-heading">
          <div>
            <span className="section-kicker section-kicker-light"><span className="kicker-dot" /> Your goals, our focus</span>
            <h2>More than a course.<br /><span>A career partner.</span></h2>
          </div>
          <p>We’re committed to your professional success with comprehensive support at every step.</p>
        </div>
        <div className="why-grid">
          {reasons.map(({ title, description, icon: Icon, number }) => (
            <article className="why-card" key={title}>
              <div className="why-card-top"><span className="why-icon"><Icon size={20} /></span><span>{number}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCallToAction() {
  return (
    <section className="final-cta" id="contact">
      <div className="cta-orbit cta-orbit-one" aria-hidden="true" />
      <div className="cta-orbit cta-orbit-two" aria-hidden="true" />
      <div className="cta-content">
        <span className="cta-kicker"><Sparkles size={15} /> Your next chapter starts here</span>
        <h2>Ready to transform<br />your career?</h2>
        <p>Join thousands of professionals who have accelerated their careers with our Fast Forward programs.</p>
        <div className="cta-actions">
          <a className="button button-white" href="https://placements.group/Contact">Get started today <ArrowRight size={17} /></a>
          <a className="button button-ghost" href="tel:+18888033546">Get free consultation <ArrowUpRight size={16} /></a>
        </div>
        <div className="cta-assurance"><span><Check size={14} /> 15-day focused programs</span><span><Check size={14} /> Expert guidance</span></div>
      </div>
    </section>
  )
}
