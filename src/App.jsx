import mincaImage from '../images/Minca.JPG'
import githubLogo from '../images/githublogo.png'
import codepenLogo from '../images/codepenlogo.png'
import linkedinLogo from '../images/linkedinlogo.png'
import xingLogo from '../images/xinglogo.png'

const interests = [
  'Dancing',
  'Travelling',
  'Languages',
  'Sustainability',
  'Animals',
]

const skills = ['Empathy', 'Communication', 'Teamwork', 'HTML', 'CSS']

function App() {
  return (
    <div id="top" className="page">
      <header className="hero">
        <p className="eyebrow">Personal Website</p>
        <h1>Lisanne Kelly Ardern</h1>
        <nav className="button-row" aria-label="Quick links">
          <a className="button" href="#contact">
            Contact
          </a>
          <a className="button button-secondary" href="#bio">
            Biography
          </a>
        </nav>
      </header>

      <main className="content">
        <figure className="feature-image">
          <img src={mincaImage} alt="Lisanne in Minca, Colombia in 2019" />
          <figcaption>Me in Minca, Colombia in 2019</figcaption>
        </figure>

        <section className="grid-two">
          <div className="card">
            <h2>Interests</h2>
            <ul>
              {interests.map(interest => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2>Skills</h2>
            <ul>
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section card">
          <h2>Contact</h2>
          <nav className="button-row" aria-label="Contact links">
            <a className="button" href="tel:+4915737852879">
              Call mobile
            </a>
            <a className="button" href="mailto:ardern.lisanne@gmail.com">
              Send Email
            </a>
          </nav>
        </section>

        <section className="section card">
          <h2>Social Media</h2>
          <nav className="logos" aria-label="Social links">
            <a
              href="https://github.com/LisanneArdern"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub profile"
            >
              <img src={githubLogo} alt="" />
            </a>
            <a
              href="https://codepen.io/lisancita"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="CodePen profile"
            >
              <img src={codepenLogo} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/lisanne-ardern-4ab781155/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn profile"
            >
              <img src={linkedinLogo} alt="" />
            </a>
            <a
              href="https://www.xing.com/profile/LisanneKelly_Ardern/cv"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Xing profile"
            >
              <img src={xingLogo} alt="" />
            </a>
          </nav>
        </section>

        <section id="bio" className="section card">
          <h2>Some information about me</h2>
          <p>
            After graduating from high school, I wanted to see something of the
            world before deciding which direction I wanted to take
            professionally. My journey started in Mexico, where I took a
            Spanish language course. After that, I started an internship in
            Buenos Aires, Argentina in marketing. During these months I fell in
            love with Latin America and its diversity in many ways.
          </p>
          <p>
            On my return to Germany, I began my studies in International
            Tourism Management. After completing my studies and gaining my first
            professional experience in Germany, I returned to the country I had
            fallen in love with a few years before - Mexico.
          </p>
          <p>
            From March 2018 to November 2020, I lived and worked in Mexico
            City. In between, I travelled for a few months in Peru and
            Colombia, where I worked on a voluntary basis. The stay abroad was
            one of the most amazing experiences I have ever had. I was able to
            learn a lot about myself, I developed as a person and I got to know
            many wonderful people and cultures.
          </p>
        </section>

        <section className="section card">
          <h2>My CV</h2>
          <h3>Work Experience</h3>
          <dl className="timeline">
            <dt>04/2021 - present</dt>
            <dd>Trainee Web Development</dd>
            <dd>neufische GmbH, Hamburg</dd>
            <dt>11/2019 - 01/2021</dt>
            <dd>Lifestyle Manager</dd>
            <dd>Ten Lifestyle Group, Mexico City</dd>
            <dt>06/2019 - 11/2019</dt>
            <dd>Product Developer</dd>
            <dd>Bamba Travel, Mexico City</dd>
            <dt>06/2018 - 06/2019</dt>
            <dd>Travel Agent</dd>
            <dd>Bamba Travel, Mexico City</dd>
          </dl>
          <h3>Education</h3>
          <dl className="timeline">
            <dt>10/2014 - 09/2017</dt>
            <dd>B.A. International Tourism Management</dd>
            <dd>Westcoast University of Applied Sciences, Heide</dd>
          </dl>
        </section>
      </main>

      <footer className="footer">
        <a className="button button-secondary" href="#top">
          Back to the top
        </a>
        <small>Copyright by Lisanne Ardern</small>
      </footer>
    </div>
  )
}

export default App
