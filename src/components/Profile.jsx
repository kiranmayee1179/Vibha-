import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState({
    name: "",
    place: "",
    phone: ""
  });

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("profile"));
    if (saved) setUser(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(user));
    setIsOpen(false);
  };

  return (
    <div className="profile-container">
      
     
      <div
        className="profile-icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {user.name ? user.name[0].toUpperCase() : "👤"}
      </div>

     
      {isOpen && (
        <div className="profile-dropdown">
          <h2 style={{color:"black"}}>Profile</h2>

          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Place"
            value={user.place}
            onChange={(e) =>
              setUser({ ...user, place: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Phone"
            value={user.phone}
            onChange={(e) =>
              setUser({ ...user, phone: e.target.value })
            }
          />

          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Profile;