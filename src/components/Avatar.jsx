export default function Avatar({ photoUrl, initials, name }) {
  return (
    <div className="avatar">
      {photoUrl ? <img src={photoUrl} alt={name} /> : initials}
    </div>
  );
}
