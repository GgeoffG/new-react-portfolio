import React from "react";
import { arrayOf, shape, string } from "prop-types";
import "./resume.css";
import resumePdf from "../../../Assets/Resume.pdf";

// Load any badge images that exist in src/Assets/badges/ without breaking
// the build when one is missing.
let badgeImages = {};
try {
  const ctx = require.context(
    "../../../Assets/badges",
    false,
    /\.(png|svg|jpe?g)$/
  );
  ctx.keys().forEach((key) => {
    badgeImages[key.replace("./", "")] = ctx(key);
  });
} catch (e) {
  // badges folder not created yet -- text badges render instead
}

const CertBadge = ({ abbr, name, issuer, meta, image }) => {
  const img = image && badgeImages[image];
  return (
    <div className="cert-badge" title={name}>
      {img ? (
        <img src={img} alt={`${name} badge`} className="cert-badge_img" />
      ) : (
        <div className="cert-badge_placeholder">{abbr}</div>
      )}
      <div className="cert-badge_label">
        <span className="cert-badge_name">{name}</span>
        <span className="cert-badge_meta">
          {issuer}
          {meta ? ` · ${meta}` : ""}
        </span>
      </div>
    </div>
  );
};

const Resume = ({ certifications, experience, skillGroups }) => (
  <section className="resume_wrapper">
    <div className="resume_header">
      <h3>Resume</h3>
      <a className="resume_download" href={resumePdf} download>
        Download Resume (PDF)
      </a>
    </div>

    <h4 className="resume_sectionTitle">Certifications</h4>
    <div className="cert-grid">
      {certifications.map((cert) => (
        <CertBadge key={cert.name} {...cert} />
      ))}
    </div>

    <h4 className="resume_sectionTitle">Skills</h4>
    <div className="skills-grid">
      {skillGroups.map((group) => (
        <div className="skills-col" key={group.title}>
          <h5>{group.title}</h5>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {experience.length > 0 && (
      <>
        <h4 className="resume_sectionTitle">Experience</h4>
        {experience.map((job) => (
          <article className="job" key={`${job.role}-${job.company}`}>
            <div className="job_head">
              <div>
                <span className="job_role">{job.role}</span>
                <span className="job_company"> — {job.company}</span>
              </div>
              <div className="job_meta">
                {job.location} · {job.dates}
              </div>
            </div>
            <ul className="job_bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </>
    )}
  </section>
);

Resume.propTypes = {
  certifications: arrayOf(
    shape({
      abbr: string,
      name: string.isRequired,
      issuer: string,
      meta: string,
      image: string,
    })
  ),
  experience: arrayOf(
    shape({
      role: string.isRequired,
      company: string,
      location: string,
      dates: string,
    })
  ),
  skillGroups: arrayOf(
    shape({
      title: string.isRequired,
    })
  ),
};

Resume.defaultProps = {
  certifications: [],
  experience: [],
  skillGroups: [],
};

export default Resume;
