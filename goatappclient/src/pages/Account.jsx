import React, { useEffect, useState } from "react";
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
  const [nameCharCount, setNameCharCount] = useState(0);
  const [majorCharCount, setMajorCharCount] = useState(0);
  const [classCharCount, setClassCharCount] = useState(0);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const jwtToken = sessionStorage.getItem("jwt");
    if (jwtToken) {
      try {
        const response = await fetch ('/User/credentials/userProfile', {
          method: 'GET',
          headers: {
            'Authorization': `${jwtToken}`
          }
        });

        if (response.ok) {
          response.json().then(data => {
            console.log(data);
          });
        } else {
          console.log('Error');
        }
      } catch(error) {
        console.log('Error getting user profile');
      }
    } else {
      console.log("User has no jwt, you're not supposed to be here");
    }
  }

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
    // Toggle isEditing state
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleAccountNameChange = (e) => {
    if (e.target.value.length <= 50) {
      setAccountName(e.target.value);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setName(value);
      setNameCharCount(value.length);
    }
  };

  const handleMajorChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setMajor(value);
      setMajorCharCount(value.length);
    }
  };

  const handleClassYearChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setClassYear(value);
      setClassCharCount(value.length);
    }
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
                    onChange={handleAccountNameChange}
                  />
                  <p className="char-field">{`${accountName.length}/50`}</p>
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
                <span>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <p className="char-field">{`${nameCharCount}/50`}</p>
                </span>
              ) : (
                ` ${name}`
              )}
            </p>
            <p>
              <strong>Major:</strong>{" "}
              {isEditing ? (
                <span>
                  <input
                    type="text"
                    value={major}
                    onChange={handleMajorChange}
                  />
                  <p className="char-field">{`${majorCharCount}/50`}</p>
                </span>
              ) : (
                `${major}`
              )}
            </p>
            <p>
              <strong>Class :</strong>{" "}
              {isEditing ? (
                <span>
                  <input
                    type="text"
                    value={classYear}
                    onChange={handleClassYearChange}
                  />
                  <p className="char-field">{`${classCharCount}/50`}</p>
                </span>
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
