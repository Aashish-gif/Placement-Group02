import Image from "next/image"
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, Compass, Layers3, Sparkles, TrendingUp } from "lucide-react"

const highlights = [
  { number: "8.5K+", label: "Students enrolled", icon: BriefcaseBusiness },
  { number: "65+", label: "Expert courses", icon: Sparkles },
  { number: "4.8/5", label: "Student rating", icon: TrendingUp },
]

const careerSteps = ["Find your focus", "Build real skills", "Move with confidence"]

export function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-copy">
          <div className="eyebrow-pill">
            <span className="eyebrow-icon"><Sparkles size={15} aria-hidden="true" /></span>
            Career growth, built around you
          </div>
          <h1 id="hero-title">
            Make your<br />next move<br /><em>your own.</em>
          </h1>
          <p className="hero-description">
            Build practical skills, get expert career support, and find opportunities that fit your goals—all in one place.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Find your next step <ArrowRight size={17} />
            </a>
            <a className="button button-secondary" href="#courses">
              Explore career programs <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-proof" aria-label="Placement Group at a glance">
            {highlights.map(({ number, label, icon: Icon }) => (
              <div className="proof-item" key={label}>
                <span className="proof-icon"><Icon size={17} aria-hidden="true" /></span>
                <span className="proof-number">{number}</span>
                <span className="proof-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <figure className="hero-image-wrap">
            <Image
              src="/images/career-hero-editorial.png"
              alt="A confident professional preparing for her next career move in a sunlit coworking studio"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 48vw"
              className="hero-image"
            />
            <figcaption className="image-caption">
              <span className="caption-check"><Check size={14} aria-hidden="true" /></span>
              Your next chapter, in motion
            </figcaption>
          </figure>
          <div className="hero-program-pill">
            <span className="hero-program-number">15<small>DAY</small></span>
            <span><strong>Focused programs</strong><small>Built for real momentum</small></span>
          </div>
          <div className="career-path-card" aria-label="A three-step career path">
            <div className="career-path-heading">
              <span className="career-path-icon"><Compass size={18} aria-hidden="true" /></span>
              <span><strong>A path that fits you</strong><small>From potential to progress</small></span>
            </div>
            <ol className="career-path-steps">
              {careerSteps.map((step, index) => (
                <li key={step}>
                  <span className="path-step-number">0{index + 1}</span>
                  <span className="path-step-label">{step}</span>
                  {index === careerSteps.length - 1 ? <ArrowUpRight size={15} aria-hidden="true" /> : <Layers3 size={14} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="hero-bottom-note"><span /> No detours. Just forward momentum.</div>
    </section>
  )
}
