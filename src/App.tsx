import { useState } from "react";

const assets = {
  nebula: "/assets/d129d.png",
  veggie: "/assets/b65cc.png",
  velour: "/assets/59613.png",
  okSock: "/assets/06d65.png",
  okSockHero: "/assets/7b186.png",
  okSockProcessOne: "/assets/e7ae8.png",
  okSockProcessTwo: "/assets/704da.png",
  okSockProcessThree: "/assets/3e14a.png",
  velourHeroOne: "/assets/d418d.png",
  velourHeroTwo: "/assets/c8fa5.png",
  velourHeroThree: "/assets/1695b.png",
  velourHeroFour: "/assets/931cc.png",
  velourProcessOne: "/assets/53f18.png",
  velourProcessTwo: "/assets/a64a0.png",
  velourProcessThree: "/assets/757fc.png",
  nebulaWorkOne: "/assets/0d415.png",
  nebulaWorkTwo: "/assets/a74f8.png",
  nebulaWorkThree: "/assets/ec5d5.png",
  veggieWorkHero: "/assets/85e03.png",
  veggieWorkBag: "/assets/d0428.png",
  veggieWorkTomato: "/assets/603de.png",
  veggieWorkPackage: "/assets/171be.png",
  veggieWorkPoster: "/assets/ba775.png",
  angelaStudioOne: "/assets/455d3.png",
  angelaStudioTwo: "/assets/1412b.png",
  ximenaStudioOne: "/assets/1816e.png",
  ximenaStudioTwo: "/assets/6b97f.png",
  studioWorkspace: "/assets/cc444.png",
};

type TextLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

function TextLink({ children, href, className = "" }: TextLinkProps) {
  return (
    <a className={`text-link ${className}`} href={href}>
      {children}
    </a>
  );
}

function Header({
  active,
}: {
  active?: "work" | "studio" | "open-positions" | "contact";
}) {
  const isContact = active === "contact";

  return (
    <header
      className={`site-header${isContact ? " contact-header-instance" : ""}`}
    >
      <a
        className={`brand${isContact ? " contact-brand-instance" : ""}`}
        href="/"
        aria-label="Noted Theory Studio, home"
      >
        NOTED THEORY® Studio
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <TextLink
          className={active === "studio" ? "active" : ""}
          href="/studio"
        >
          About us
        </TextLink>
        <TextLink className={active === "work" ? "active" : ""} href="/work">
          Work
        </TextLink>
        <TextLink
          className={active === "open-positions" ? "active" : ""}
          href="/open-positions"
        >
          Open positions
        </TextLink>
      </nav>

      <div className="header-actions">
        {!isContact && <span className="language">ES / EN</span>}
        <TextLink
          className={active === "contact" ? "active" : ""}
          href="/contact"
        >
          Contact ↗
        </TextLink>
      </div>

      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          <a href="/studio">About us</a>
          <a href="/work">Work</a>
          <a href="/open-positions">Open positions</a>
          <a href="/contact">Contact ↗</a>
        </nav>
      </details>
    </header>
  );
}

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
  crop?: string;
};

function ProjectCard({
  image,
  title,
  description,
  href,
  crop = "center",
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <a className="project-visual" href={href} aria-label={`View ${title}`}>
        <img src={image} alt="" style={{ objectPosition: crop }} />
        <h3>{title}</h3>
      </a>
      <p className="caption">{description}</p>
      <TextLink className="project-link" href={href}>
        Ver proyecto →
      </TextLink>
    </article>
  );
}

const footerGroups = [
  {
    title: "Studio",
    links: [
      ["Work", "/work"],
      ["About", "/studio"],
      ["Open positions", "/open-positions"],
    ],
  },
  {
    title: "Social",
    links: [
      ["Instagram ↗", "/#contact"],
      ["Behance ↗", "/#contact"],
      ["LinkedIn ↗", "/#contact"],
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="footer-cta">
          <p className="eyebrow">Nuevo proyecto</p>
          <a href="mailto:hola@notedtheory.studio">
            ¿Tienes una idea? Escríbenos.
          </a>
        </div>

        <div className="footer-links">
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label, href]) => (
                <TextLink href={href} key={label}>
                  {label}
                </TextLink>
              ))}
            </div>
          ))}
          <div className="footer-group">
            <h3>Contacto</h3>
            <a href="mailto:hola@notedtheory.studio">
              hola@notedtheory.studio
            </a>
            <p>Monterrey, N.L., MX</p>
          </div>
        </div>
      </div>

      <a className="footer-wordmark" href="/" aria-label="Back to home">
        NOTED THEORY<span>®</span>
      </a>

      <div className="footer-meta">
        <p>ig · @notedtheory.studio</p>
        <a href="mailto:hola@notedtheory.studio">hola@notedtheory.studio</a>
        <p>© 2026 NOTED THEORY. Studio — Monterrey, MX</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

type ProjectFact = {
  label: string;
  value: string;
};

type NarrativeSection = {
  title: "Problem" | "Process" | "Outcome";
  body: string;
};

type ProjectData = {
  slug: string;
  title: string;
  breadcrumb: string;
  facts: ProjectFact[];
  heroImages: { src: string; alt: string; ratio: string }[];
  narrative: NarrativeSection[];
  processImages: { src: string; alt: string }[];
  processImageRatio?: string;
  outcome: string;
  nextProject?: {
    title: string;
    href: string;
    image: string;
  };
};

const okSockProject: ProjectData = {
  slug: "ok-sock",
  title: "OK sock",
  breadcrumb: "The Wedding Edit",
  facts: [
    { label: "Cliente", value: "Ok sock mx" },
    { label: "Año", value: "2026" },
    { label: "Servicios", value: "Identity, Photography" },
    { label: "Equipo", value: "Angela & Ximena" },
  ],
  heroImages: [
    {
      src: assets.okSockHero,
      alt: "Ok sock organic sockwear campaign",
      ratio: "16 / 9",
    },
    {
      src: assets.okSock,
      alt: "Ok sock identity and campaign photography",
      ratio: "2560 / 1440",
    },
  ],
  narrative: [
    {
      title: "Problem",
      body: "Crear una identidad editorial que se sienta atemporal, cálida y aspiracional para parejas que planean su boda.",
    },
    {
      title: "Process",
      body: "Editorial · Romántico · Atemporal · Íntimo · Luz natural",
    },
    {
      title: "Outcome",
      body: "Un wordmark serif de alto contraste, retícula editorial flexible y una dirección fotográfica basada en luz natural y texturas.",
    },
  ],
  processImages: [
    { src: assets.okSockProcessOne, alt: "Colorful Ok sock campaign poster" },
    { src: assets.okSockProcessTwo, alt: "Red and white socks campaign poster" },
    { src: assets.okSockProcessThree, alt: "Black and white socks campaign poster" },
  ],
  outcome:
    "“Una identidad que se siente como una revista que guardas para siempre.” — sustituir por testimonio o métrica real del proyecto.",
  nextProject: {
    title: "Velour Sombre",
    href: "/projects/velour-sombre",
    image: assets.velour,
  },
};

const velourProject: ProjectData = {
  slug: "velour-sombre",
  title: "Velour Sombre",
  breadcrumb: "The Wedding Edit",
  facts: [
    { label: "Cliente", value: "Ok sock mx" },
    { label: "Año", value: "2026" },
    { label: "Servicios", value: "Identity, Photography" },
    { label: "Equipo", value: "Angela & Ximena" },
  ],
  heroImages: [
    {
      src: assets.velourHeroOne,
      alt: "Velour Sombre stationery and landscape composition",
      ratio: "16 / 9",
    },
    {
      src: assets.velourHeroTwo,
      alt: "Velour Sombre menu with wine and engraved illustration",
      ratio: "16 / 9",
    },
    {
      src: assets.velourHeroThree,
      alt: "Velour Sombre invitation suite",
      ratio: "16 / 9",
    },
    {
      src: assets.velourHeroFour,
      alt: "Velour Sombre menu on a red table setting",
      ratio: "16 / 9",
    },
  ],
  narrative: [
    {
      title: "Problem",
      body: "Crear una identidad editorial que se sienta atemporal, cálida y aspiracional para parejas que planean su boda.",
    },
    {
      title: "Process",
      body: "Editorial · Romántico · Atemporal · Íntimo · Luz natural",
    },
    {
      title: "Outcome",
      body: "Un wordmark serif de alto contraste, retícula editorial flexible y una dirección fotográfica basada en luz natural y texturas.",
    },
  ],
  processImages: [
    {
      src: assets.velourProcessOne,
      alt: "Velour Sombre indulgence typographic poster",
    },
    {
      src: assets.velourProcessTwo,
      alt: "Velour Sombre illustrated menu",
    },
    {
      src: assets.velourProcessThree,
      alt: "Velour Sombre grand opening invitation",
    },
  ],
  processImageRatio: "433 / 581",
  outcome:
    "“Una identidad que se siente como una revista que guardas para siempre.” — sustituir por testimonio o métrica real del proyecto.",
};

function ProjectTemplate({ project }: { project: ProjectData }) {
  return (
    <div id="top" className="project-page">
      <Header active="work" />
      <main>
        <section className="case-header">
          <p className="case-breadcrumb">
            <a href="/work">Work</a> / <span>{project.breadcrumb}</span>
          </p>
          <h1>{project.title}</h1>
          <dl className="case-facts">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="case-hero-gallery" aria-label={`${project.title} gallery`}>
          {project.heroImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              style={{ aspectRatio: image.ratio }}
            />
          ))}
        </section>

        <section className="case-narrative" aria-label="Project narrative">
          <div className="narrative-panel">
            {project.narrative.map((item, index) => (
              <article key={item.title}>
                <header>
                  <h2>{item.title}</h2>
                  <span>0{index + 1}</span>
                </header>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-process-gallery" aria-label="Project process">
          <div className="process-images">
            {project.processImages.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                style={{ aspectRatio: project.processImageRatio || "1" }}
              />
            ))}
          </div>
          <div className="case-outcome">
            <p className="eyebrow">Resultado</p>
            <blockquote>{project.outcome}</blockquote>
          </div>
        </section>

        {project.nextProject && (
          <section className="next-project">
            <div>
              <p className="eyebrow">Siguiente proyecto</p>
              <TextLink href={project.nextProject.href}>
                {project.nextProject.title} →
              </TextLink>
            </div>
            <a
              href={project.nextProject.href}
              aria-label={project.nextProject.title}
            >
              <img src={project.nextProject.image} alt="" />
            </a>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero">
          <h1>
            <span>NOTED</span>
            <span>THEORY®</span>
          </h1>
          <p>Diseño como un canal de servicio, estrategia e intelecto.</p>
        </section>

        <section className="studio-section" id="studio">
          <h2>Studio Guests</h2>
          <div className="project-grid">
            <ProjectCard
              image={assets.nebula}
              title="Nebula Film"
              description="Dirección de arte, editorial."
              href="#work"
            />
            <ProjectCard
              image={assets.veggie}
              title="Veggie"
              description="Diseño de marca, estrategia publicitaria."
              href="#work"
            />
            <ProjectCard
              image={assets.velour}
              title="Velour Sombre"
              description="Diseño de marca, empaque."
              href="/projects/velour-sombre"
              crop="center 48%"
            />
          </div>
        </section>

        <section className="featured-project" id="work">
          <p className="caption">Casos</p>
          <h2>Ok sock</h2>
          <p className="featured-description">
            Diseño de identidad y marca, estrategia publicitaria, dirección de
            arte.
          </p>
          <TextLink href="/projects/ok-sock">Ver caso →</TextLink>
          <img src={assets.okSock} alt="Ok sock campaign art direction" />
        </section>

        <section className="all-projects">
          <a className="pill-button" href="/work">
            Ver todos los proyectos →
          </a>
        </section>

        <section className="about-section split-section" id="about">
          <p className="eyebrow">About</p>
          <div>
            <h2>
              Estudio creativo independiente guiado por la curiosidad y la
              conexión humana hacia un cambio en la perspectiva del diseño.
            </h2>
            <TextLink href="/studio">Conócenos →</TextLink>
          </div>
        </section>

        <section className="positions-section split-section" id="open-positions">
          <p className="eyebrow">Open positions (2)</p>
          <div className="position-list">
            <a className="position-row" href="/open-positions">
              <span>Diseñador/a Junior</span>
              <span>Medio tiempo · Monterrey</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a className="position-row" href="/open-positions">
              <span>Practicante de Fotografía</span>
              <span>Prácticas · Híbrido</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

type WorkDetail = {
  label: string;
  value: string;
};

function WorkDetails({ items }: { items: WorkDetail[] }) {
  return (
    <div className="work-details">
      {items.map((item) => (
        <div key={item.label}>
          <p>{item.label}</p>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function WorkProjectRow({
  title,
  category,
  href,
}: {
  title: string;
  category: string;
  href: string;
}) {
  return (
    <a className="work-project-row" href={href}>
      <h3>{title}</h3>
      <p>{category}</p>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function WorkPage() {
  return (
    <div id="top" className="work-page">
      <Header active="work" />
      <main>
        <header className="work-header">
          <h1>Work</h1>
        </header>

        <section className="work-feature work-nebula">
          <div className="work-feature-title">
            <p>Dirección de arte</p>
            <h2>Nebula Film</h2>
          </div>
          <div className="nebula-gallery" aria-label="Nebula Film project gallery">
            <img src={assets.nebulaWorkOne} alt="Nebula Film poster: Static Where the Heart Was" />
            <img src={assets.nebulaWorkTwo} alt="Nebula Film poster: Static Where the Heart Was" />
            <img src={assets.nebulaWorkThree} alt="Nebula Film poster: We Forget to Turn Off" />
          </div>
          <WorkDetails
            items={[
              {
                label: "Objective",
                value:
                  "Colaborar en el diseño de posters para una casa productora independiente para proyectos cinematográficos.",
              },
              {
                label: "Keywords",
                value: "Belleza · Comunidad · Pertenencia",
              },
              {
                label: "Solution",
                value:
                  "Sistema tipográfico humanista, paleta de colores cálidos y fotografía conceptual.",
              },
            ]}
          />
        </section>

        <section className="work-feature work-veggie">
          <div className="work-feature-title">
            <p>Diseño de marca · Estrategia · Empaque · Fotografía</p>
            <h2>Veggie</h2>
          </div>
          <div className="veggie-hero-gallery" aria-label="Veggie project gallery">
            <img src={assets.veggieWorkHero} alt="Veggie market campaign" />
            <img src={assets.veggieWorkBag} alt="Veggie grocery bag" />
          </div>
          <WorkDetails
            items={[
              {
                label: "Objective",
                value:
                  "Posicionar la marca en un mercado premium sin perder cercanía.",
              },
              {
                label: "Keywords",
                value: "Artesanal · Mediterráneo · Honesto · Táctil",
              },
              {
                label: "Solution",
                value: "abc",
              },
            ]}
          />
          <div className="veggie-pieces" aria-label="Veggie identity pieces">
            <img src={assets.veggieWorkTomato} alt="Veggie tomato campaign" />
            <img src={assets.veggieWorkPackage} alt="Veggie produce package" />
            <img src={assets.veggieWorkPoster} alt="Veggie identity poster" />
          </div>
        </section>

        <section className="work-project-list" aria-label="Project case studies">
          <WorkProjectRow
            title="Ok sock"
            category="Identity · Photo"
            href="/projects/ok-sock"
          />
          <WorkProjectRow
            title="Velour Sombre"
            category="Packaging · Photo"
            href="/projects/velour-sombre"
          />
        </section>

        <section className="work-about">
          <p className="eyebrow">About</p>
          <div>
            <p>
              Estudio creativo independiente guiado por la curiosidad y la
              conexión humana hacia un cambio en la perspectiva del diseño.
            </p>
            <TextLink href="/studio">Conoce al estudio →</TextLink>
          </div>
        </section>

        <section className="positions-section split-section" id="open-positions">
          <p className="eyebrow">Open positions (2)</p>
          <div className="position-list">
            <a className="position-row" href="/open-positions">
              <span>Diseñador/a Junior</span>
              <span>Medio tiempo · Monterrey</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a className="position-row" href="/open-positions">
              <span>Practicante de Fotografía</span>
              <span>Prácticas · Híbrido</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

type Founder = {
  name: string;
  role: string;
  bio: string;
  handle: string;
  images: { src: string; alt: string }[];
};

const founders: Founder[] = [
  {
    name: "Angela",
    role: "Co-founder · Identity & Packaging",
    bio: "Soy una diseñadora gráfica creativa y curiosa, apasionada por desarrollar identidades visuales y experiencias digitales que combinan estética, funcionalidad y significado.",
    handle: "@angela.abc",
    images: [
      {
        src: assets.angelaStudioOne,
        alt: "Iced coffee campaign art direction",
      },
      {
        src: assets.angelaStudioTwo,
        alt: "Coffee and pastry campaign art direction",
      },
    ],
  },
  {
    name: "Ximena",
    role: "Co-founder · Photography & Art Direction",
    bio: "Soy una diseñadora gráfica apasionada por la experimentación visual, el diseño editorial y la creación de conceptos que transmiten ideas de manera auténtica y estratégica.",
    handle: "@0.o.psd",
    images: [
      {
        src: assets.ximenaStudioOne,
        alt: "Bomen floral identity art direction",
      },
      {
        src: assets.ximenaStudioTwo,
        alt: "Bomen floral photography",
      },
    ],
  },
];

function FounderProfile({ founder }: { founder: Founder }) {
  return (
    <article className="founder-profile">
      <div className="founder-bio">
        <p>{founder.role}</p>
        <h2>{founder.name}</h2>
        <p>{founder.bio}</p>
      </div>
      <div className="founder-gallery">
        {founder.images.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className="founder-social">
        <TextLink href="#contact">{founder.handle} ↗</TextLink>
        <span>Instagram</span>
      </div>
    </article>
  );
}

function StudioPage() {
  return (
    <div id="top" className="studio-page">
      <Header active="studio" />
      <main>
        <section className="studio-intro">
          <p className="eyebrow">About — Somos dos</p>
          <div>
            <h1>Dos diseñadoras, un solo estudio.</h1>
            <div className="studio-intro-copy">
              <p>
                NOTED THEORY nace en Monterrey en 2025. Combinamos identidad,
                fotografía y empaque bajo un mismo criterio: el diseño también
                es un arte.
              </p>
              <TextLink href="#services">Servicios ↓</TextLink>
            </div>
          </div>
        </section>

        <section className="founders-section" id="services">
          {founders.map((founder) => (
            <FounderProfile founder={founder} key={founder.name} />
          ))}
        </section>

        <section className="studio-process">
          <p className="eyebrow">Cómo trabajamos</p>
          <div className="process-steps">
            {[
              ["Escuchar", "Descripción corta del paso del proceso en dos líneas."],
              ["Definir", "Descripción corta del paso del proceso en dos líneas."],
              ["Construir", "Descripción corta del paso del proceso en dos líneas."],
            ].map(([title, description]) => (
              <div key={title}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

type JobOpening = {
  title: string;
  description: string;
  type: string;
  location: string;
};

const jobOpenings: JobOpening[] = [
  {
    title: "Diseñador/a Junior — Identidad",
    description: "Apoyo en sistemas de marca y artes finales.",
    type: "Medio tiempo",
    location: "Monterrey · Presencial",
  },
  {
    title: "Practicante de Fotografía",
    description: "Asistencia en producción, set y retoque.",
    type: "Prácticas · 6 meses",
    location: "Híbrido",
  },
];

function applicationMailto(subject: string) {
  return `mailto:hola@notedtheory.studio?subject=${encodeURIComponent(subject)}`;
}

function OpenPositionsPage() {
  return (
    <div id="top" className="open-positions-page">
      <Header active="open-positions" />
      <main>
        <section className="jobs-hero">
          <div>
            <p className="eyebrow">Únete al estudio</p>
            <h1>Open positions</h1>
          </div>
          <p>
            Buscamos personas curiosas, detallistas y con ganas de aprender
            haciendo.
          </p>
        </section>

        <section className="jobs-list" aria-label="Available positions">
          <div className="jobs-table-header" aria-hidden="true">
            <span>Rol</span>
            <span>Tipo</span>
            <span>Ubicación</span>
            <span />
          </div>
          {jobOpenings.map((job) => (
            <article className="job-row" key={job.title}>
              <div>
                <h2>{job.title}</h2>
                <p>{job.description}</p>
              </div>
              <p>{job.type}</p>
              <p>{job.location}</p>
              <TextLink href={applicationMailto(job.title)}>Aplicar ↗</TextLink>
            </article>
          ))}
        </section>

        <section className="studio-culture">
          <img
            src={assets.studioWorkspace}
            alt="Noted Theory collaborative studio workspace"
          />
          <div className="culture-benefits">
            {[
              ["Equipo pequeño", "Proyectos con deadlines"],
              ["Proyectos reales", "Desde el día uno en briefs de clientes."],
              ["Horario flexible", "Viernes de estudio libre."],
            ].map(([title, description]) => (
              <div key={title}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-cta">
          <h2>¿No ves tu rol? Mándanos tu portafolio.</h2>
          <TextLink href={applicationMailto("Portafolio — Open application")}>
            hola@notedtheory.studio ↗
          </TextLink>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();

    data.forEach((value, key) => {
      body.append(key, String(value));
    });

    setFormStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with ${response.status}`);
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  const statusMessage = {
    idle: "Respondemos en 48 h hábiles.",
    sending: "Enviando mensaje…",
    success: "Gracias. Tu mensaje fue enviado.",
    error: "No pudimos enviar el mensaje. Inténtalo de nuevo.",
  }[formStatus];

  return (
    <div id="top" className="contact-page">
      <Header active="contact" />
      <main>
        <header className="contact-header">
          <p className="eyebrow">Contacto</p>
          <h1>Hagamos algo juntas.</h1>
        </header>

        <section className="contact-content">
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleContactSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="netlify-honeypot" aria-hidden="true">
              <label>
                No completar:
                <input
                  name="bot-field"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </p>
            <div className="contact-field-row">
              <label className="contact-field">
                <span>Nombre</span>
                <input name="name" placeholder="Tu nombre" required />
              </label>
              <label className="contact-field">
                <span>Correo</span>
                <input
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  required
                />
              </label>
            </div>

            <label className="contact-field">
              <span>Marca / empresa</span>
              <input name="brand" placeholder="Nombre de la marca" />
            </label>

            <fieldset className="service-selector">
              <legend>¿Qué necesitas?</legend>
              <div className="contact-service-options">
                {["Identity", "Photography", "Packaging", "Otro"].map(
                  (service) => (
                    <label key={service}>
                      <input
                        name="service"
                        type="radio"
                        value={service}
                        required
                      />
                      <span>{service}</span>
                    </label>
                  ),
                )}
              </div>
            </fieldset>

            <label className="contact-field contact-message">
              <span>Cuéntanos del proyecto</span>
              <textarea
                name="message"
                placeholder="Objetivo, tiempos, referencias…"
                required
              />
            </label>

            <div className="contact-submit-row">
              <button type="submit" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? "Enviando…" : "Enviar mensaje →"}
              </button>
              <p
                className={
                  formStatus === "error" ? "contact-status-error" : undefined
                }
                aria-live="polite"
              >
                {statusMessage}
              </p>
            </div>
          </form>

          <aside className="contact-details" aria-label="Contact details">
            <div>
              <p>Nuevos proyectos</p>
              <a href="mailto:hola@notedtheory.studio">
                hola@notedtheory.studio
              </a>
            </div>
            <div>
              <p>Instagram</p>
              <a
                href="https://www.instagram.com/notedtheory.studio/"
                target="_blank"
                rel="noreferrer"
              >
                @notedtheory.studio ↗
              </a>
            </div>
            <div>
              <p>Estudio</p>
              <strong>San Pedro Garza García, N.L., MX</strong>
            </div>
            <div>
              <p>Horario</p>
              <strong>Lun — Vie · 9:00 – 18:00</strong>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/contact") {
    return <ContactPage />;
  }

  if (path === "/open-positions") {
    return <OpenPositionsPage />;
  }

  if (path === "/studio") {
    return <StudioPage />;
  }

  if (path === "/work") {
    return <WorkPage />;
  }

  if (path === `/projects/${okSockProject.slug}`) {
    return <ProjectTemplate project={okSockProject} />;
  }

  if (path === `/projects/${velourProject.slug}`) {
    return <ProjectTemplate project={velourProject} />;
  }

  return <HomePage />;
}
