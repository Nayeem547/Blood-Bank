import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./SignUpPage.scss";

const Icon = {
  User: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" strokeLinecap="round" />
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  ),
  Lock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  ),
  Eye: ({ off }) =>
    off ? (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3l18 18" strokeLinecap="round" />
        <path d="M10.6 5.2A10.9 10.9 0 0 1 12 5c5 0 9 4 10 7-.5 1.4-1.6 3-3.1 4.3M6.6 6.6C4.4 8 2.9 10 2 12c1 3 5 7 10 7 1.4 0 2.6-.3 3.8-.8" strokeLinecap="round" />
        <path d="M9.9 10a3 3 0 0 0 4.2 4.2" strokeLinecap="round" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 12c1-3 5-7 10-7s9 4 10 7c-1 3-5 7-10 7s-9-4-10-7Z" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  Google: () => (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5Z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.5 0-14 4.2-17.7 10.7Z" />
      <path fill="#4CAF50" d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.4C29.6 35.4 26.9 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.6 5.1C9.9 39.7 16.4 44 24 44Z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.6 5.9l6.6 5.4C40.5 36.6 44 31 44 24c0-1.3-.1-2.7-.4-3.5Z" />
    </svg>
  ),
};

const FIELDS = [
  { name: "firstName", label: "First Name", placeholder: "Enter your first name", icon: "User", type: "text" },
  { name: "lastName", label: "Last Name", placeholder: "Enter your last name", icon: "User", type: "text" },
  { name: "email", label: "Email", placeholder: "Enter your Gmail address", icon: "Mail", type: "email" },
  { name: "phone", label: "Phone Number", placeholder: "Enter your phone number", icon: "Phone", type: "tel" },
  { name: "username", label: "Username", placeholder: "Choose a username", icon: "User", type: "text" },
  { name: "password", label: "Password", placeholder: "Create a strong password", icon: "Lock", type: "password" },
  { name: "confirmPassword", label: "Confirm Password", placeholder: "Re-enter your password", icon: "Lock", type: "password" },
];

export default function SignUpPage() {
  const heroRef = useRef(null);
  const dropletRef = useRef(null);
  const pulseLineRef = useRef(null);
  const dripRefs = useRef([]);
  const formRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  dripRefs.current = [];
  const addDripRef = (el) => el && dripRefs.current.push(el);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-copy > *", { y: 28, opacity: 0, duration: 0.7, stagger: 0.12 })
        .from(dropletRef.current, { scale: 0, opacity: 0, duration: 0.8, ease: "back.out(1.6)" }, "-=0.5")
        .from(".hero-hands", { y: 40, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.5")
        .from(".field-group", { y: 24, opacity: 0, duration: 0.5, stagger: 0.07 }, "-=0.9")
        .from(".submit-btn, .google-btn, .signin-hint", { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3");

      // Central droplet breathing
      gsap.to(dropletRef.current, {
        y: -10,
        duration: 2.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Heartbeat pulse line traveling through the droplet
      if (pulseLineRef.current) {
        const len = pulseLineRef.current.getTotalLength();
        gsap.set(pulseLineRef.current, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(pulseLineRef.current, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power1.inOut",
          repeat: -1,
          repeatDelay: 0.4,
        });
      }

      // Falling / dripping droplets loop
      dripRefs.current.forEach((el) => {
        const delay = parseFloat(el.dataset.delay || 0);
        const fall = parseFloat(el.dataset.fall || 90);
        const dur = parseFloat(el.dataset.duration || 2.4);

        gsap.set(el, { y: 0, opacity: 0, scale: 0.6, transformOrigin: "50% 0%" });

        const drip = gsap.timeline({ repeat: -1, delay });
        drip
          .to(el, { opacity: 1, duration: 0.15 })
          .to(el, { scaleY: 1.25, scaleX: 0.85, duration: dur * 0.18, ease: "power1.in" }, "<")
          .to(el, {
            y: fall,
            duration: dur,
            ease: "power1.in",
          }, "<")
          .to(el, { scaleY: 0.4, scaleX: 1.3, opacity: 0, duration: dur * 0.15, ease: "power1.out" }, `-=${dur * 0.15}`)
          .set(el, { y: 0, scaleY: 1, scaleX: 1, opacity: 0 });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.fromTo(
      ".submit-btn",
      { scale: 0.96 },
      { scale: 1, duration: 0.35, ease: "elastic.out(1, 0.5)" }
    );
  };

  return (
    <div className="signup-page">
      <main className="content" ref={heroRef}>
        <section className="hero">
          <div className="hero-copy">
            <h1>
              Become a<br />
              <span className="accent">Donor</span>
            </h1>
            <p>
              Join our community of life savers. Your single donation can make
              a big difference.
            </p>
          </div>

          <div className="hero-art">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className={`drip drip-${i}`}
                data-delay={(i * 0.35).toFixed(2)}
                data-duration={(1.8 + (i % 3) * 0.4).toFixed(2)}
                data-fall={70 + (i % 4) * 20}
                ref={addDripRef}
              >
                <svg viewBox="0 0 24 30" fill="none">
                  <path
                    d="M12 1C12 1 2 14 2 20a10 10 0 0 0 20 0C22 14 12 1 12 1Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            ))}

            <div className="droplet-wrap" ref={dropletRef}>
              <svg viewBox="0 0 220 260" className="droplet">
                <defs>
                  <radialGradient id="dropGrad" cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stopColor="#ff6b5e" />
                    <stop offset="55%" stopColor="#e02525" />
                    <stop offset="100%" stopColor="#a10f0f" />
                  </radialGradient>
                </defs>
                <path
                  d="M110 6C110 6 20 120 20 175a90 90 0 0 0 180 0C200 120 110 6 110 6Z"
                  fill="url(#dropGrad)"
                />
                <path
                  ref={pulseLineRef}
                  d="M35 178 L75 178 L92 140 L112 210 L128 160 L142 178 L190 178"
                  fill="none"
                  stroke="#ffe8e0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <svg className="hero-hands" viewBox="0 0 260 120" fill="none">
              <path
                d="M10 60c10-30 40-40 60-30 15 8 20 25 15 40M250 60c-10-30-40-40-60-30-15 8-20 25-15 40"
                stroke="#f1b98f"
                strokeWidth="26"
                strokeLinecap="round"
              />
              <path
                d="M60 90c15 20 45 30 70 30s55-10 70-30"
                stroke="#f1b98f"
                strokeWidth="26"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>

        <section className="form-panel">
          <form ref={formRef} onSubmit={handleSubmit}>
            <h2>
              Create <span className="accent">Your Account</span>
            </h2>
            <p className="form-sub">Fill in the details below to get started.</p>

            {FIELDS.map((f) => {
              const IconComp = Icon[f.icon];
              const isPassword = f.name === "password";
              const isConfirm = f.name === "confirmPassword";
              const reveal = isPassword ? showPassword : isConfirm ? showConfirm : false;
              const inputType = isPassword || isConfirm ? (reveal ? "text" : "password") : f.type;

              return (
                <label className="field-group" key={f.name}>
                  <span className="field-label">
                    <IconComp />
                    {f.label}
                  </span>
                  <span className="field-box">
                    <input type={inputType} name={f.name} placeholder={f.placeholder} />
                    {(isPassword || isConfirm) && (
                      <button
                        type="button"
                        className="toggle-visibility"
                        onClick={() =>
                          isPassword ? setShowPassword((v) => !v) : setShowConfirm((v) => !v)
                        }
                        aria-label="Toggle password visibility"
                      >
                        <Icon.Eye off={!reveal} />
                      </button>
                    )}
                  </span>
                </label>
              );
            })}

            <button type="submit" className="submit-btn">
              <Icon.User />
              Create Account
            </button>

            <div className="divider">
              <span />or<span />
            </div>

            <button type="button" className="google-btn">
              <Icon.Google />
              Sign up with Google
            </button>

            <p className="signin-hint">
              Already have an account? <a href="#">Sign In</a>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
