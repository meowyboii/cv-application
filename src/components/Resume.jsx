import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "../styles/Resume.css";
import logo from "../assets/profile.jpg";

export const Resume = ({ allData }) => {
  const { profile, education, skill, experience, social } = allData;
  const dataCompleted = () => {
    if (
      profile === "" ||
      education.length === 0 ||
      skill.length === 0 ||
      experience.length === 0 ||
      social.length === 0
    ) {
      return false;
    }
    console.log(profile, education, skill, experience, social);
    return true;
  };

  const showResume = () => {
    return (
      <div className="main-container">
        <div id="header-design"></div>
        <div className="resume-container">
          <div className="col-1">
            <img src={logo} alt="resume photo" />
            <div className="contacts">
              <div className="contact">
                <FaPhoneAlt /> {profile.phone}
              </div>
              <div className="contact">
                <FaLocationDot /> {profile.address}
              </div>
            </div>
            <div className="section-div">
              <h3>Education</h3>
              {education?.map((educ) => (
                <div className="educ" key={educ.id}>
                  <h4>{educ.data.course}</h4>
                  <h5>{educ.data.school}</h5>
                  <span>{educ.data.completionYear}</span>
                </div>
              ))}
            </div>
            <div className="section-div">
              <h3>Skills</h3>
              {skill?.map((sk) => (
                <div className="skill" key={sk.id}>
                  <span>{sk.data.skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-2">
            <h1>
              {profile.firstName} {profile.lastName}
            </h1>
            <hr />
            <div className="section-div">
              <h3>Work Experience</h3>
              {experience?.map((exp) => (
                <div className="experience" key={exp.id}>
                  <p>{exp.data.company}</p>
                  <p>
                    {exp.data.yearStarted} - {exp.data.yearEnded}
                  </p>
                  <h4>{exp.data.position}</h4>
                  <p>{exp.data.responsibility}</p>
                </div>
              ))}
            </div>
            <div className="section-div">
              <h3>Socials</h3>
              {social?.map((soc) => (
                <div className="social" key={soc.id}>
                  <a
                    href={soc.data.social}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {soc.data.social}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const showError = () => {
    return <span>Please complete all the details to see the result</span>;
  };

  return dataCompleted() ? showResume() : showError();
};
