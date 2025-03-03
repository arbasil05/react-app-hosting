import './App.css'

function App() {


  return (
    <>
      <nav className="navbar">
        <div className="page-logo">
          <h1>BROWNY</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li>EDUCATION</li>
            <li>SKILLS</li>
            <li>EXPERIENCE</li>
            <li>PROFILE</li>
            <li>PORTFOLIO</li>
            <li>CLIENTS</li>
            <li>CONTACT</li>

          </ul>
        </div>
      </nav>


      <section className="banner-section">
        <div className="banner-image">
          <img src="/banner-image-square.jpg" width="650px" height="650px" alt="banner-image-guy" />
        </div>
        <div className="banner-section-content">
          <h1>HI, IAM BROWNY <br /> STAR</h1>
          <p>ASPIRING PHOTOGRAPHER</p>
          <button className="button-resume">Download Resume</button>
        </div>

      </section>

      <section className="about-me-section">
        <div className="about-me-title">
          <h1>ABOUT ME</h1>
        </div>
        <div className="about-me-wrap">
          <div className="about-me-paragraph">
            <p>
              Through my lens, I capture more than just images—I tell stories. With a passion for light,
              composition,
              and raw emotion, I specialize in transforming everyday moments into timeless memories. Whether it’s
              portraits that reveal true character, landscapes that evoke wanderlust, or events that preserve
              cherished memories, my photography is driven by creativity and authenticity. Every frame is a blend
              of
              artistry and technical precision, ensuring that each shot not only looks stunning but also feels
              meaningful. Explore my portfolio and let’s create something extraordinary together
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, mollitia ipsa est perferendis
              vel
              soluta error eaque eum, maxime veniam laboriosam quia eos a ut et aliquam necessitatibus alias
              voluptas?
            </p>
          </div>
          <div className="about-me-details">
            <div className="email-phone">
              <div className="email">
                <strong>Email</strong>
                <p>brownyfox68@gmail.com</p>
              </div>
              <div className="phone">
                <strong>Phone</strong>
                <p>+91 987654321</p>
              </div>
              <div className="website">
                <strong>Website</strong>
                <p>www.mywebsite.com</p>
              </div>

            </div>
            <div className="socials">
              <img src="instagramIcons.svg" width="50px" alt="instagram-logo" />
              <img src="whatsappLogo.svg" width="50px" alt="whatsapp-logo" />
              <img src="xLogo.svg" width="45px" alt="x-logo" />
              <img src="pinterestLogo.svg" width="45px" alt="pinterest-logo" />
            </div>

          </div>
        </div>

      </section>

      <section className="education-section">
        <div className="education-title">
          <h1>EDUCATION</h1>
        </div>
        <div className="education-road-map">
          <div className="year-cover">
            <div className="education-road-map">
              <div className="Institute">
                <p>2008 - 2010</p>
                <p>Master of Computer Science</p>
                <div className="effect">
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>
                <p>HIGH SCHOOL</p>
                <p>Los Angeles, USA</p>
              </div>
              <div className="Institute">
                <p>2013 - 2017</p>
                <p>Bachelor of Fine Arts</p>
                <div className="effect">
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>
                <p>Photography & Visual Arts</p>
                <p>Los Angeles, USA</p>
              </div>
              <div className="Institute">
                <p>2013 - 2017</p>
                <p>International Photography Institute</p>
                <div className="effect">
                  <div className="dot"></div>
                  <div className="line" id="last-line"></div>
                </div>
                <p>Photography</p>
                <p>Los Angeles, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="skill-section">
        <div className="skill-title">
          <h1>SKILLS</h1>
        </div>
        <div className="skill-wrap">
          <div className="progress">
            <div className="progress-item">
              <p>Camera Handling</p>
              <progress value="95" max="100"></progress>
            </div>
            <div className="progress-item">
              <p>Lighting Techniques</p>
              <progress value="80" max="100"></progress>
            </div>
            <div className="progress-item">
              <p>Photo Editing</p>
              <progress value="92" max="100"></progress>
            </div>
            <div className="progress-item">
              <p>Composition & Framing</p>
              <progress value="78" max="100"></progress>
            </div>
          </div>
          <div className="progress">
            <div className="progress-item">
              <p>Client Communication</p>
              <progress value="75" max="100"></progress>
            </div>
            <div className="progress-item">
              <p>Time Management</p>
              <progress value="85" max="100"></progress>
            </div>
            <div className="progress-item">
              <p>Networking</p>
              <progress value="60" max="100"></progress>
            </div>
            <div className="progress-item">
              <p>Adaptability</p>
              <progress value="87" max="100"></progress>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-section-title">
          <h1>PORTFOLIO</h1>
        </div>
        <div className="portfolio-showcase">
          <div className="portfolio-right">
            <img src="/portfolio-image-right.jpg" alt="portfolio-right-image" width="250px" />
          </div>
          <div className="portfolio-left">
            <img src="/portfolio-image-left.jpg" alt="portfolio-left-image" width="250px" />
          </div>
          <div className="portfolio-middle">
            <img src="/portfolio-middle-image.jpg" alt="portfolio-middle-image" width="250px" />
          </div>
          <div className="portfolio-right">
            <img src="/portfolio-image-right.jpg" alt="portfolio-right-image" width="250px" />
          </div>
        </div>

      </section>

      <section className="client-section">
        <div className="Clients-section-title">
          <h1>CLIENTS</h1>
        </div>
        <div className="client-section-body">
          <img src="/client-wedding.png" alt="wedding" />
          <img src="/client-H&M.png" alt="H&M" width="110px" />
          <img src="/client-gucci.png" alt="Gucci" />
          <img src="/client-rollsroyce.png" alt="Rolls Royce" />
          <img src="/client-chanel.png" alt="Chanel" />
          <img src="/client-balenciaga.png" alt="Balenciaga" />
        </div>

      </section>


      <section className="contact-section">
        <div className="contact-section-title">
          <h1>CONTACT ME</h1>
        </div>
        <div className="contact-section-content">
          <form>
            <div className="name-email">
              <input type="text" placeholder="Name*" />
              <input type="email" placeholder="Email*" />
            </div>
            <input type="text" placeholder="Subject" id="Subject" />
            <input type="text" placeholder="Message" id="message" />
            <button>Submit</button>

          </form>
          <div className="contact-details">
            <div className="line-1">
              <h1>Browny Star</h1>
              <p>Photographer</p>
            </div>
            <div className="line-1">
              <h1>Phone</h1>
              <p>+91 987654321</p>
            </div>
            <div className="line=1">
              <h1>Email</h1>
              <p>brownystar68@gmail.com</p>
            </div>
            <div className="line-1">
              <h1>Website</h1>
              <p>www.brownystar.com</p>
            </div>
            <div className="socials">
              <img src="instagramIcons.svg" width="50px" alt="instagram-logo" />
              <img src="whatsappLogo.svg" width="50px" alt="whatsapp-logo" />
              <img src="xLogo.svg" width="45px" alt="x-logo" />
              <img src="pinterestLogo.svg" width="45px" alt="pinterest-logo" />
            </div>
          </div>
        </div>

      </section >




      <footer>

        <div className="footer-section">
          &copy; Copyright Browny. Design and Developed By Basil
        </div>
      </footer>
    </>
  )
}

export default App
