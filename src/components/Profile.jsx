import Avatar from "./Avatar.jsx";

export default function Profile({
  name,
  initials,
  role,
  bio,
  photoUrl,
  projectsUrl,
  cvUrl,
  valuations = [],
  links = [],
}) {
  return (
    <aside className="profile">
      <Avatar photoUrl={photoUrl} initials={initials} name={name} />
      <div>
        <p className="name">{name}</p>
        <p className="role">{role}</p>
      </div>
      <p className="bio">{bio}</p>
      {(projectsUrl || cvUrl) && (
        <div className="profile-actions">
          {projectsUrl && (
            <a
              className="profile-cta"
              href={projectsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Projects →
            </a>
          )}
          {cvUrl && (
            <a
              className="profile-cta profile-cta--primary"
              href={cvUrl}
              download
            >
              Download CV
            </a>
          )}
        </div>
      )}
      {valuations.length > 0 && (
        <section className="profile-valuations">
          <p className="profile-valuations-heading">Valuations</p>
          <ul>
            {valuations.map(({ slug, title }) => (
              <li key={slug}>
                <a href={`/valuations/${slug}/`}>
                  <span>{title}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
      {links.length > 0 && (
        <nav className="profile-links">
          {links.map(({ label, url }) => (
            <a key={label} href={url} target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </nav>
      )}
    </aside>
  );
}
