import { useState } from "react";

const certificados = [
  { nome: "Sensibilização para a Segurança Digital", tipo: "Badge", data: "22/09/2026" },
  { nome: "Sensibilização para a Segurança Digital", tipo: "Certificate", data: "22/09/2026" },
  { nome: "Gerenciamento de Ameaças Cibernéticas", tipo: "Badge", data: "21/09/2025" },
  { nome: "Gerenciamento de Ameaças Cibernéticas", tipo: "Certificate", data: "21/09/2025" },
  { nome: "Avaliação de Vulnerabilidade", tipo: "Achievement", data: "12/09/2025" },
  { nome: "Defesa de rede", tipo: "Badge", data: "28/03/2025" },
  { nome: "Defesa de rede", tipo: "Certificate", data: "28/03/2025" },
  { nome: "Alertas de segurança", tipo: "Achievement", data: "28/03/2025" },
];

const habilidades = [
  { nome: "HTML", simbolo: "5", descricao: "Estruturação de páginas e conteúdo web.", cor: "#f97316" },
  { nome: "CSS", simbolo: "3", descricao: "Estilização, cores, layouts e responsividade.", cor: "#60a5fa" },
  { nome: "React", simbolo: "⚛", descricao: "Componentes e interfaces interativas.", cor: "#67e8f9" },
];

const projetos = [
  {
    numero: "PROJETO 01",
    nome: "Calculadora",
    descricao: "Projeto para praticar lógica de programação e criação de interfaces.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    numero: "PROJETO 02",
    nome: "Portfólio pessoal",
    descricao: "Site para apresentar minhas habilidades, projetos e certificações.",
    tecnologias: ["React", "CSS"],
  },
];

const estilos = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', Arial, sans-serif;
}

button, a {
  font-family: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

.site {
  --bg: #0b0b10;
  --surface: #14141d;
  --surface2: #1c1b27;
  --text: #f5f5f7;
  --muted: #a5a2b2;
  --border: #302d3c;
  --accent: #a855f7;
  --accent-light: #c084fc;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  transition: background .3s, color .3s;
}

.site.light {
  --bg: #f7f5fb;
  --surface: #fff;
  --surface2: #eeeaf5;
  --text: #191523;
  --muted: #696374;
  --border: #e1dbe9;
}

.navbar {
  min-height: 76px;
  padding: 15px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -2px;
}

.logo span, .hero h1 span, .section-title span,
.contact h2 span {
  color: var(--accent-light);
}

.nav-links {
  display: flex;
  gap: 23px;
  align-items: center;
}

.nav-links a {
  color: var(--muted);
  font-size: 12px;
  transition: color .2s;
}

.nav-links a:hover {
  color: var(--accent-light);
}

.theme-button {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
}

.hero {
  max-width: 1200px;
  margin: auto;
  padding: 100px 30px;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: center;
  gap: 55px;
}

.tag {
  display: inline-block;
  color: var(--accent-light);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

.hero .tag {
  padding: 10px 13px;
  border: 1px solid #7540a0;
  border-radius: 5px;
  margin-bottom: 25px;
}

.greeting {
  color: var(--muted);
  margin-bottom: 12px;
}

.hero h1 {
  font-size: clamp(36px, 5vw, 60px);
  line-height: 1.13;
  letter-spacing: -2px;
  margin-bottom: 20px;
  overflow-wrap: anywhere;
}

.hero h2 {
  font-size: 20px;
  font-weight: 500;
  color: var(--muted);
  margin-bottom: 20px;
}

.description {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
  max-width: 540px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 19px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  transition: transform .2s;
}

.button:hover {
  transform: translateY(-3px);
}

.primary {
  background: var(--accent);
  color: white;
}

.secondary {
  background: var(--surface);
  border: 1px solid var(--border);
}

.hero-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  color: var(--muted);
  font-size: 11px;
  margin-top: 35px;
}

.visual {
  position: relative;
  padding: 20px 0;
}

.glow {
  position: absolute;
  inset: 15%;
  background: #9333ea;
  filter: blur(100px);
  opacity: .18;
  border-radius: 50%;
  pointer-events: none;
}

.code-card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 430px;
  margin: auto;
  overflow: hidden;
  background: #15141d;
  color: #e6e0f0;
  border: 1px solid #373342;
  border-radius: 15px;
  box-shadow: 0 20px 60px #0003;
}

.code-header {
  padding: 18px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #302d39;
  color: #aaa4ba;
  font-size: 11px;
}

.code-body {
  padding: 25px;
  font: 12px/2.2 monospace;
  overflow-wrap: anywhere;
}

.purple { color: #c084fc; }
.green { color: #86efac; }
.indent { padding-left: 20px; }
.indent2 { padding-left: 40px; }
.comment { color: #858096; margin-top: 10px; }

.code-footer {
  padding: 14px 20px;
  border-top: 1px solid #302d39;
  color: #86efac;
  font-size: 10px;
}

.section {
  max-width: 1200px;
  margin: auto;
  padding: 80px 30px;
  scroll-margin-top: 80px;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  letter-spacing: -1px;
  margin: 15px 0;
}

.section-subtitle {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 32px;
}

.about-card {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 25px;
  align-items: start;
  padding: 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 15px;
}

.about-icon {
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  border-radius: 18px;
  background: #a855f71b;
  border: 1px solid #a855f755;
  color: var(--accent-light);
  font-size: 35px;
  font-weight: 800;
}

.about-card h3 {
  margin-bottom: 14px;
  font-size: 18px;
}

.about-card p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

.skills-grid, .projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.skill-card, .project-card, .cert-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  transition: transform .25s, border-color .25s;
}

.skill-card:hover, .project-card:hover, .cert-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.skill-card {
  padding: 25px;
}

.skill-icon {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  background: var(--surface2);
}

.skill-card h3, .project-info h3 {
  font-size: 17px;
  margin-bottom: 12px;
}

.skill-card p, .project-info p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.skill-level {
  display: inline-block;
  color: var(--accent-light);
  font-size: 11px;
  margin-top: 20px;
}

.project-preview {
  height: 180px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #271b3d, #12121b);
}

.project-preview.blue {
  background: linear-gradient(135deg, #172c3e, #11121b);
}

.mini-window {
  width: 145px;
  padding: 15px;
  background: #171321;
  border: 1px solid #9b5bce77;
  border-radius: 12px;
  color: white;
}

.mini-window strong {
  display: block;
  text-align: right;
  font-size: 25px;
  margin: 10px 0;
}

.mini-window small {
  color: #aaa4ba;
}

.mini-keys {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.mini-keys i {
  height: 19px;
  background: #a855f733;
  border-radius: 4px;
}

.browser {
  width: 75%;
  background: #171b27;
  border: 1px solid #526477;
  border-radius: 8px;
  overflow: hidden;
}

.browser-top {
  padding: 9px;
  color: #c084fc;
  font-size: 9px;
  border-bottom: 1px solid #384150;
}

.browser-content {
  padding: 15px;
}

.line {
  height: 7px;
  width: 80%;
  background: #a855f7;
  border-radius: 4px;
  margin-bottom: 10px;
}

.line.short {
  width: 48%;
  background: #68758a;
}

.blocks {
  display: flex;
  gap: 7px;
  margin-top: 18px;
}

.blocks i {
  flex: 1;
  height: 35px;
  background: #a855f722;
  border: 1px solid #a855f755;
  border-radius: 4px;
}

.project-info {
  padding: 23px;
}

.project-number {
  color: var(--accent-light);
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 700;
}

.project-info h3 {
  margin-top: 12px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 18px;
}

.tech-tags span {
  padding: 6px 9px;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 5px;
  color: var(--muted);
  font-size: 10px;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.cert-card {
  padding: 20px;
  min-width: 0;
}

.cert-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cert-type {
  padding: 7px 9px;
  background: #a855f71b;
  color: var(--accent-light);
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
}

.cert-check {
  color: #4ade80;
}

.cert-symbol {
  width: 58px;
  height: 58px;
  margin: 24px 0 18px;
  display: grid;
  place-items: center;
  border: 1px solid var(--accent);
  border-radius: 13px;
  color: var(--accent-light);
  font-size: 30px;
}

.cert-info > span {
  color: var(--muted);
  font-size: 8px;
  letter-spacing: 1px;
}

.cert-info h3 {
  font-size: 13px;
  line-height: 1.6;
  margin: 10px 0;
}

.cert-info p, .cert-note {
  color: var(--muted);
  font-size: 11px;
}

.cert-note {
  margin-top: 20px;
}

.contact {
  max-width: 1140px;
  margin: 50px auto 70px;
  padding: 65px 25px;
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: radial-gradient(ellipse at top, #a855f715, transparent 65%), var(--surface);
  scroll-margin-top: 90px;
}

.contact h2 {
  font-size: clamp(27px, 4vw, 40px);
  margin: 18px 0;
}

.contact > p {
  max-width: 500px;
  margin: 0 auto 25px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.contact .email {
  margin-top: 20px;
  margin-bottom: 0;
  font-size: 12px;
  overflow-wrap: anywhere;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 28px 7%;
  border-top: 1px solid var(--border);
}

.footer p, .footer > a:last-child {
  color: var(--muted);
  font-size: 11px;
}

@media (max-width: 900px) {
  .navbar { padding: 15px 4%; }
  .nav-links { gap: 12px; }
  .nav-links a { font-size: 10px; }
  .hero { gap: 25px; }
  .cert-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 650px) {
  .navbar { flex-wrap: wrap; }

  .nav-links {
    order: 3;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 5px;
  }

  .nav-links a { white-space: nowrap; }

  .hero {
    grid-template-columns: 1fr;
    padding: 65px 22px;
  }

  .section { padding: 60px 22px; }

  .about-card {
    grid-template-columns: 1fr;
    padding: 25px;
  }

  .skills-grid, .projects-grid, .cert-grid {
    grid-template-columns: 1fr;
  }

  .contact {
    margin: 30px 15px 50px;
    padding: 45px 20px;
  }

  .footer {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer p {
    width: 100%;
    text-align: center;
    order: 3;
  }
}
`;

function App() {
  const [temaEscuro, setTemaEscuro] = useState(true);

  return (
    <div className={`site ${temaEscuro ? "dark" : "light"}`}>
      <style>{estilos}</style>

      <header className="navbar">
        <a href="#inicio" className="logo">D<span>.</span></a>

        <nav className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#certificados">Certificados</a>
          <a href="#contato">Contato</a>
        </nav>

        <button
          className="theme-button"
          onClick={() => setTemaEscuro(!temaEscuro)}
          aria-label="Alternar tema"
        >
          {temaEscuro ? "☀" : "☾"}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div>
            <span className="tag">PORTFÓLIO PESSOAL</span>
            <p className="greeting">Olá, meu nome é</p>

            <h1>Daniel <span>Correia Moura.</span></h1>
            <h2>Estudante e futuro desenvolvedor</h2>

            <p className="description">
              Sou estudante do ensino médio e estou aprendendo
              programação. Busco desenvolver minhas habilidades
              em tecnologia, criar projetos e adquirir novos
              conhecimentos para o meu futuro profissional.
            </p>

            <div className="buttons">
              <a href="#projetos" className="button primary">Ver projetos ↗</a>
              <a href="#contato" className="button secondary">Entrar em contato</a>
            </div>

            <div className="hero-footer">
              <span>⌘ Programação</span>
              <span>◇ Aprendizado contínuo</span>
            </div>
          </div>

          <div className="visual">
            <div className="glow"></div>

            <div className="code-card">
              <div className="code-header">
                <span>● ● ●</span>
                <span>developer.jsx</span>
              </div>

              <div className="code-body">
                <p><span className="purple">const</span> dev = {"{"}</p>
                <p className="indent">nome: <span className="green">"Daniel"</span>,</p>
                <p className="indent">foco: <span className="green">"Programação"</span>,</p>
                <p className="indent">tecnologias: [</p>
                <p className="indent2">"HTML",</p>
                <p className="indent2">"CSS",</p>
                <p className="indent2">"React"</p>
                <p className="indent">],</p>
                <p className="indent">objetivo: <span className="green">"Evoluir"</span></p>
                <p>{"};"}</p>
                <p className="comment">// Sempre aprendendo algo novo.</p>
              </div>

              <div className="code-footer">● Desenvolvedor em formação</div>
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <span className="tag">01 — SOBRE MIM</span>
          <h2 className="section-title">Conheça um pouco <span>da minha história.</span></h2>

          <div className="about-card">
            <div className="about-icon">D.</div>
            <div>
              <h3>Aprendendo hoje para desenvolver amanhã.</h3>
              <p>
                Meu nome é Daniel e sou estudante do ensino médio.
                Estou aprendendo programação e desenvolvendo meus
                conhecimentos em tecnologia. Também gosto de
                praticar esportes e jogar jogos eletrônicos.
                Meu objetivo é continuar aprendendo, ganhar
                experiência e criar projetos cada vez melhores.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="habilidades">
          <span className="tag">02 — HABILIDADES</span>
          <h2 className="section-title">Meus <span>conhecimentos.</span></h2>
          <p className="section-subtitle">Tecnologias que estou aprendendo.</p>

          <div className="skills-grid">
            {habilidades.map((habilidade) => (
              <article className="skill-card" key={habilidade.nome}>
                <div className="skill-icon" style={{ color: habilidade.cor }}>
                  {habilidade.simbolo}
                </div>
                <h3>{habilidade.nome}</h3>
                <p>{habilidade.descricao}</p>
                <span className="skill-level">
                  {habilidade.nome === "React" ? "Nível básico" : "Em aprendizado"}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projetos">
          <span className="tag">03 — PORTFÓLIO</span>
          <h2 className="section-title">Meus <span>projetos.</span></h2>
          <p className="section-subtitle">Projetos para demonstrar meu aprendizado.</p>

          <div className="projects-grid">
            {projetos.map((projeto, index) => (
              <article className="project-card" key={projeto.nome}>
                <div className={`project-preview ${index === 1 ? "blue" : ""}`}>
                  {index === 0 ? (
                    <div className="mini-window">
                      <small>12 + 8</small>
                      <strong>20</strong>
                      <div className="mini-keys">
                        {Array.from({ length: 9 }, (_, i) => (
                          <i key={i}></i>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="browser">
                      <div className="browser-top">● ● ●</div>
                      <div className="browser-content">
                        <div className="line"></div>
                        <div className="line short"></div>
                        <div className="blocks"><i></i><i></i><i></i></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="project-info">
                  <span className="project-number">{projeto.numero}</span>
                  <h3>{projeto.nome}</h3>
                  <p>{projeto.descricao}</p>
                  <div className="tech-tags">
                    {projeto.tecnologias.map((tecnologia) => (
                      <span key={tecnologia}>{tecnologia}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="certificados">
          <span className="tag">04 — CONQUISTAS</span>
          <h2 className="section-title">Minhas <span>certificações.</span></h2>
          <p className="section-subtitle">
            Cursos relacionados à segurança digital e à cibersegurança.
          </p>

          <div className="cert-grid">
            {certificados.map((certificado, index) => (
              <article
                className="cert-card"
                key={`${certificado.nome}-${certificado.tipo}-${index}`}
              >
                <div className="cert-top">
                  <span className="cert-type">{certificado.tipo}</span>
                  <span className="cert-check">✓</span>
                </div>

                <div className="cert-symbol">
                  {certificado.tipo === "Badge"
                    ? "◇"
                    : certificado.tipo === "Certificate"
                    ? "▤"
                    : "◎"}
                </div>

                <div className="cert-info">
                  <span>CISCO NETWORKING ACADEMY</span>
                  <h3>{certificado.nome}</h3>
                  <p>Emitido em {certificado.data}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="cert-note">
            Certificações organizadas com base nas informações fornecidas.
          </p>
        </section>

        <section className="contact" id="contato">
          <span className="tag">05 — CONTATO</span>
          <h2>Vamos conversar sobre <span>tecnologia?</span></h2>
          <p>
            Estou sempre buscando aprender e desenvolver novas
            habilidades. Entre em contato comigo!
          </p>

          <a
            className="button primary"
            href="mailto:Daniel.correiamoura10@gmail.com"
          >
            ✉ Enviar e-mail
          </a>

          <p className="email">Daniel.correiamoura10@gmail.com</p>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="logo">D<span>.</span></a>
        <p>Desenvolvido por Daniel Correia Moura.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </div>
  );
}

export default App;