```jsx
import React from "react"
import "./App.css"

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">GR.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-content fade-up">

          <div className="hero-label">
            ASPIRING DATA SCIENTIST
          </div>

          <h1>
            GARGI
            <br />
            <span>RAKSHIT.</span>
          </h1>

          <p className="hero-description">
            Turning data into insights, and ideas into meaningful solutions.
          </p>

          <a href="#about" className="explore-button">
            Explore my work →
          </a>

        </div>


        {/* DATA VISUAL */}
        <div className="data-visual">

          <div className="data-circle"></div>

          <div className="data-line line-1"></div>
          <div className="data-line line-2"></div>
          <div className="data-line line-3"></div>

          <div className="data-point point-1"></div>
          <div className="data-point point-2"></div>
          <div className="data-point point-3"></div>
          <div className="data-point point-4"></div>

          <div className="visual-label">
            DATA → INSIGHT
          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="about reveal">

        <div className="section-label">
          01 — ABOUT
        </div>

        <div className="about-content">

          <h2 className="about-heading">
            <span className="about-line">
              I don't just analyze data.
            </span>

            <span className="about-line">
              I look for the{" "}
              <span className="about-highlight">
                story hidden inside it.
              </span>
            </span>
          </h2>


          <div className="about-text">

            <p>
              I'm Gargi, a data science student who enjoys turning
              messy datasets into clear, meaningful insights.
            </p>

            <p>
              My work sits at the intersection of data analysis,
              business understanding, and machine learning.
            </p>

            <p>
              I believe good analysis isn't just about numbers.
              It's about asking the right questions and finding
              the story those numbers are trying to tell.
            </p>

          </div>

        </div>


        <div className="about-stats">

          <div className="stat">
            <strong>01</strong>
            <span>Data Analysis</span>
          </div>

          <div className="stat">
            <strong>02</strong>
            <span>Python & SQL</span>
          </div>

          <div className="stat">
            <strong>03</strong>
            <span>Machine Learning</span>
          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="work" className="projects reveal">

        <div className="section-label">
          02 — SELECTED WORK
        </div>

        <div className="projects-heading">
          <h2>Things I've built.</h2>
        </div>


        <div className="projects-grid">

          {/* SALES LENS */}
          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <div className="project-info">

              <div className="project-type">
                END-TO-END DATA ANALYTICS
              </div>

              <h3>Sales Lens</h3>

              <p>
                An end-to-end sales analytics platform that transforms
                raw CSV and Excel data into meaningful business insights
                through automated data processing, cloud storage,
                analytics and AI-powered summaries.
              </p>

              <div className="case-study">

                <div>
                  <span>THE APPROACH</span>
                  <p>
                    Built a data pipeline to clean, transform and validate
                    sales data before storing it in Snowflake for analysis.
                  </p>
                </div>

                <div>
                  <span>KEY FEATURES</span>
                  <p>
                    Sales and profit analysis, regional and product insights,
                    interactive analytics and AI-generated executive summaries.
                  </p>
                </div>

                <div>
                  <span>TECHNOLOGY</span>

                  <div className="project-tags">
                    <span>Python</span>
                    <span>Pandas</span>
                    <span>Django</span>
                    <span>Snowflake</span>
                    <span>AWS S3</span>
                    <span>Gemini AI</span>
                  </div>
                </div>

              </div>

              <a
                href="https://github.com/gargiiiiiii14-png/Sales-Lens"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub ↗
              </a>

            </div>

            <div className="project-arrow">
              ↗
            </div>

          </div>


          {/* CREDIT RISK */}
          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <div className="project-info">

              <div className="project-type">
                MACHINE LEARNING
              </div>

              <h3>Credit Risk Analysis</h3>

              <p>
                A machine learning model designed to predict credit risk
                using customer financial and demographic information,
                with an interactive application for real-time predictions.
              </p>

              <div className="case-study">

                <div>
                  <span>THE APPROACH</span>
                  <p>
                    Preprocessed the German Credit Dataset, performed
                    feature engineering and compared multiple
                    classification models before selecting the best approach.
                  </p>
                </div>

                <div>
                  <span>MODEL & RESULTS</span>
                  <p>
                    Random Forest with GridSearchCV achieved 71.5% accuracy,
                    88.57% recall and an 81.31% F1 score.
                  </p>
                </div>

                <div>
                  <span>TECHNOLOGY</span>

                  <div className="project-tags">
                    <span>Python</span>
                    <span>Pandas</span>
                    <span>Scikit-learn</span>
                    <span>GridSearchCV</span>
                    <span>Streamlit</span>
                    <span>Joblib</span>
                  </div>
                </div>

              </div>


              <div className="project-links">

                <a
                  href="https://github.com/gargiiiiiii14-png/Credit_Risk_Prediction_Model"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://creditriskpredictionmodel-fzjtbhp4msn6d74sdtm5wv.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Live Demo ↗
                </a>

              </div>

            </div>

            <div className="project-arrow">
              ↗
            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="skills reveal">

        <div className="section-label">
          03 — SKILLS
        </div>

        <div className="skills-heading">
          <h2>Tools I work with.</h2>
        </div>


        <div className="skills-grid">

          <div className="skill-item">
            <span>01</span>
            <strong>Python</strong>
          </div>

          <div className="skill-item">
            <span>02</span>
            <strong>SQL</strong>
          </div>

          <div className="skill-item">
            <span>03</span>
            <strong>Pandas</strong>
          </div>

          <div className="skill-item">
            <span>04</span>
            <strong>Power BI</strong>
          </div>

          <div className="skill-item">
            <span>05</span>
            <strong>Excel</strong>
          </div>

          <div className="skill-item">
            <span>06</span>
            <strong>Machine Learning</strong>
          </div>

        </div>

      </section>


     {/* JOURNEY */}
<section id="journey" className="journey reveal">

  <div className="section-label">
    04 — JOURNEY
  </div>

  <div className="journey-heading">
    <h2>Education & experience.</h2>
  </div>

  <div className="timeline">

    {/* 2023 */}
    <div className="timeline-item">

      <div className="timeline-year">
        2023
      </div>

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <div className="timeline-type">
          EDUCATION
        </div>

        <h3>Higher Secondary</h3>

        <h4>HM Education Centre</h4>

        <p>
          Completed Higher Secondary education in 2023.
        </p>

      </div>

    </div>


    {/* 2024 */}
    <div className="timeline-item">

      <div className="timeline-year">
        2024
      </div>

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <div className="timeline-type">
          EDUCATION
        </div>

        <h3>Data Science</h3>

        <h4>Undergraduate Studies</h4>

        <p>
          Building a strong foundation in programming, statistics,
          databases, data analysis and machine learning.
        </p>

        <div className="timeline-detail">
          CGPA <strong>7.1</strong>
        </div>

      </div>

    </div>


    {/* 2025 */}
    <div className="timeline-item">

      <div className="timeline-year">
        2025
      </div>

      <div className="timeline-dot active"></div>

      <div className="timeline-content">

        <div className="timeline-type">
          PROJECT
        </div>

        <h3>Sales Lens</h3>

        <h4>End-to-End Data Analytics</h4>

        <p>
          Built an interactive sales analytics platform using
          Python, Pandas, Django, Snowflake and AWS S3.
        </p>

      </div>

    </div>


    {/* NOW */}
    <div className="timeline-item">

      <div className="timeline-year">
        NOW
      </div>

      <div className="timeline-dot active"></div>

      <div className="timeline-content">

        <div className="timeline-type">
          GOAL
        </div>

        <h3>Becoming a Data Scientist</h3>

        <p>
          Continuing to strengthen my analytical, technical and
          machine learning skills while building meaningful
          data-driven solutions.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* CONTACT */}
      <section id="contact" className="contact reveal">

        <div className="contact-content">

          <div className="contact-small">
            05 — CONTACT
          </div>

          <h2>
            Let's make something
            <span> meaningful.</span>
          </h2>

          <p className="contact-description">
            I'm always open to discussing data, interesting
            projects, opportunities, or ideas worth exploring.
          </p>

          <a
            href="mailto:gargiiiiiii14@gmail.com"
            className="contact-button"
          >
            Get in touch →
          </a>

          <div className="contact-links">

            <a
              href="https://github.com/gargiiiiiii14-png"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/gargi-rakshit-634047292/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <span>
          © 2026 Gargi Rakshit
        </span>

        <span>
          Built with curiosity & data.
        </span>

      </footer>

    </div>
  )
}

export default App
```
