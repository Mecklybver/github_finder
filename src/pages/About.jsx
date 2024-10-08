function About() {
  return (
    <div>
      <h1 className="text-6xl">Github Finder </h1>
      <p className="mb-4 text-2xl font-light">
        A react app to search GitHub profiles and see profile detail.s This
        project is part of the{" "}
        <a href="https://www.udemy.com/course/modern-react-front-to-back-">
          React Front to Back
        </a>
        Udemy course by{" "}
        <strong>
          {" "}
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        {" "}
        Layout By{" "}
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </div>
  );
}
export default About;
