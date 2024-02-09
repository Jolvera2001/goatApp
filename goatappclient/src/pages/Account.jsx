import React, { useState } from "react";
import "../styles/AccountStyle.css";
import UserIcon from "../styles/UserIcon.png";

function Account() {
  const [accountName, setAccountName] = useState("");
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [classYear, setClassYear] = useState("");
  const [friendCount, setFriendCount] = useState(0);
  const [profilePicture, setProfilePicture] = useState(UserIcon);
  const [isEditing, setIsEditing] = useState(false);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfilePicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="account">
      <div className="account-info">
        <h2>Account Information</h2>
        <div className="profile-picture">
          {isEditing ? (
            <div>
              <p>
                <strong>Profile Picture:</strong>
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
              />
            </div>
          ) : (
            profilePicture ? (
              <img src={profilePicture} alt="Profile" />
            ) : (
              <p>No profile picture</p>
            )
          )}
        </div>

        <div className="form">
          <p>
            <strong>
              {isEditing ? (
                <span>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                  />
                </span>
              ) : (
                `Username: ${accountName}`
              )}
            </strong>
          </p>

          <div className="account-details">
            <div className="followerCount">
              {!isEditing && <p><strong>Friends:</strong> {friendCount}</p>}
            </div>

            <p>
              <strong>Name:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                ` ${name}`
              )}
            </p>
            <p>
              <strong>Major:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
              ) : (
                `${major}`
              )}
            </p>
            <p>
              <strong>Class:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={classYear}
                  onChange={(e) => setClassYear(e.target.value)}
                />
              ) : (
                ` ${classYear}`
              )}
            </p>
          </div>
        </div>

        <div className="button-container">
          {isEditing ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
