export default function About() {
  return (
    <section id="about">
      <h2 className="title">About</h2>
      <div className="about-wrapper">
        <span className="about-image" />
        <div className="card">
          <div className="card--header">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <div className="card--body">
            <div className="code-wrap-container">
              <h4 className="code-wrap">
                h4{' '}
                <span>
                  className=&quot;<span>title</span>&quot;
                </span>
              </h4>
              <h4>About Me</h4>
              <h4 className="code-wrap">/h4</h4>
            </div>

            <div className="code-wrap-container">
              <p className="code-wrap">
                p{' '}
                <span>
                  className=&quot;<span>paragraph</span>&quot;
                </span>
              </p>
              <p className="about--text">
                I&apos;m Nick - a nerd from Malaysia with a mix of passions including UI/UX design,
                Game Development, Web3 and much more.
                <br />
                <br />I can help you with anything from simple animated components to fully
                responsive (mobile-friendly), functional web apps.
              </p>
              <p className="code-wrap">/p</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
