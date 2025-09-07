import MembersData from "../data/members";
import "../css/member.css";

const Members = () => {
  const members = MembersData();
  return (
    <div className="members-page">
      <div className="members-list">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <div className="member-photo-container">
              <img
                src={member.photo_url}
                alt={member.name}
                className="member-photo"
              />
            </div>
            <h3>{member.name}</h3>
            <p>
              <strong>Batch:</strong> {member.batch}
            </p>
            <p>
              <strong>Current City:</strong> {member.current_city}
            </p>
            <p>
              <strong>Occupation:</strong> {member.occupation}
            </p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
