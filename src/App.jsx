import profilePic from "./assets/profile.jpeg";
function App() {
  return (
    <div className="app">
      <section className="hero visible">
        <img
        src={profilePic}
        alt="Ritika Srivastava"
        className="profile-pic"
        />
        <h1>Ritika Srivastava</h1>
        <h2>Backend-Focused Full-Stack Developer</h2>
        <p>
          Node.js · TypeScript · Java · Spring Boot · REST APIs
        </p>
      </section>
            <section className="about">
        <h3>About Me</h3>
        <p>
          Backend-focused Full-Stack Developer and third-year B.Tech Computer
          Science and Engineering student with strong foundations in Java and
          hands-on experience building backend systems using Node.js and
          TypeScript.
        </p>
        <p>
          Specialized in REST API design, backend business logic, state
          management, and reliable data flow. Comfortable delivering complete
          full-stack features when required, with backend correctness as the
          priority.
        </p>
        <p>
          Completed a Java Full Stack Developer Virtual Internship
          (AICTE-approved, Grade O) and ranked in the top 5% nationwide in NPTEL
          Programming in Java (Score: 95%). Currently undergoing Application
          Developer training with ServiceNow University through an
          assessment-based selection process.
        </p>
        <p>
          Actively seeking Backend Engineer and Full-Stack Engineer
          opportunities.
        </p>
      </section>
      <section className="skills">
        <h3>Skills</h3>

        <div className="skills-group">
          <h4>Backend</h4>
          <ul>
            <li><i className="devicon-nodejs-plain"></i> Node.js</li>
            <li><i className="devicon-typescript-plain"></i>TypeScript</li>
            <li><i className="devicon-java-plain"></i> Java</li>
            <li><i className="devicon-spring-plain"></i> SpringBoot</li>
            <li><i className="devicon-postgresql-plain"></i>REST API Design</li>
            <li>Backend Business Logic</li>
            <li>State Management</li>
          </ul>
        </div>
        <div className="skills-group">
          <h4>Frontend</h4>
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skills-group">
          <h4>Tools & Platforms</h4>
          <ul>
            <li>Git & GitHub</li>
            <li>ServiceNow</li>
            <li>Oracle Cloud OCI</li>
            <li>Power BI</li>
          </ul>
        </div>
      </section>
            <section className="projects">
        <h3>Projects</h3>

        <div className="project-card">
          <h4>MindMate Pro — Full-Stack Mental Wellness Application</h4>
          <p className="tech">
            TypeScript · React · Node.js
          </p>
          <ul>
            <li>Designed backend APIs for mood tracking, journaling, and analytics workflows</li>
            <li>Enforced backend business rules such as one check-in per day</li>
            <li>Built authentication-ready backend flows with protected routing</li>
            <li>Ensured reliable data flow between frontend and backend layers</li>
          </ul>
          <p className="contribution">
            <strong>My contribution:</strong> Backend business logic, API correctness, and data flow guarantees.
          </p>
        </div>

        <div className="project-card">
          <h4>PayFlow — Backend-Focused System Simulation</h4>
          <p className="tech">
            TypeScript · Node.js
          </p>
          <ul>
            <li>Designed backend flows with explicit state transitions (INITIATED, SUCCESS, FAILED)</li>
            <li>Implemented idempotent API behavior to safely handle retries and duplicate requests</li>
            <li>Ensured deterministic backend behavior across success and failure scenarios</li>
            <li>Modeled retry-safe logic without relying on external infrastructure</li>
          </ul>
          <p className="contribution">
            <strong>My contribution:</strong> Payment state modeling, idempotency logic, and backend correctness.
          </p>
        </div>
      </section>
            <section className="achievements">
        <h3>Achievements & Certifications</h3>

        <ul>
          <li>
            Ranked in the <strong>top 5% nationwide</strong> in NPTEL Programming in Java (Score: 95%)
          </li>
          <li>
            Completed <strong>Java Full Stack Developer Virtual Internship</strong> (AICTE-approved, Grade O)
          </li>
          <li>
            Oracle Cloud Infrastructure 2025 Certified <strong>Generative AI Professional</strong>
          </li>
          <li>
            Selected for <strong>ServiceNow Application Developer</strong> training through assessment-based screening
          </li>
          <li>
            Co-author of research papers presented at <strong>RAICCIT 2025</strong> and <strong>Bhavisya 2025</strong>
          </li>
        </ul>
      </section>
              <section className="contact">
        <h3>Contact</h3>
        <p>
          I’m actively seeking Backend Engineer and Full-Stack Engineer
          opportunities.
        </p>

        <div className="contact-links">
          <a href="Email Id:ritikasrivastava010@gmail.com">
            ritikasrivastava010@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/ritika-srivastava-41a40b2b4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Ritika331"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;
