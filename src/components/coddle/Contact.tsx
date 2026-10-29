const EMAIL = "asmitamahadik24@gmail.com";

const links = [
  { label: "GitHub", href: "https://github.com/asmitamahadik" },
  { label: "LinkedIn", href: "https://linkedin.com/in/asmita-mahadik-08abb6179" },
];

const Contact = () => {
  return (
    <section id="cd-contact" className="cd-shell cd-contact">
      <h2 className="cd-contact-headline">
        Let&apos;s build
        <br />
        something good.
      </h2>

      <div className="cd-contact-actions">
        <a href={`mailto:${EMAIL}`} className="cd-btn-cta">
          {EMAIL}
        </a>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="cd-btn-outline"
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="cd-contact-edu">
        B.E. Computer Engineering, Sinhgad College of Engineering, Pune (SPPU), 2019 to 2023, CGPA 7.67/10
      </p>
    </section>
  );
};

export default Contact;
