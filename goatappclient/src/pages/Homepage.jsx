import { useState } from 'react';
import UserIcon from "../styles/UserIcon.png";

// UserAccountInfo component for displaying user account information
function UserAccountInfo({ username }) {
  // State to track whether the user account information box is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the display of the user account information box
  const toggleAccountInfo = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the user account information box
  const closeAccountInfo = () => {
    setIsOpen(false);
  };

  return (
    <div className="user-account-info-container">
      {/* Display username with onClick handler to toggle account information */}
      <span className="username" onClick={toggleAccountInfo}>@{username}</span>

      {/* Render user account information box if isOpen is true */}
      {isOpen && (
        <div className="user-account-info-popup">
          {/* Add user profile picture */}
          <img src={UserIcon} alt="Profile" className="profile-picture-popup" />

          <div className="text-container">
            {/* Add user account information here */}
            <p>Username: {username}</p>
            <p>Name: Goat Places </p>
            <p>Class: Freshman</p>
            <p>Major: CS </p>
          </div>

          {/* Close button to hide the user account information box */}
          <button className="close-button" onClick={closeAccountInfo}>Close</button>
        </div>
      )}
    </div>
  );
}



// RegularPost component for regular posts

function RegularPost({ username, title, image, description }) {
  // State to track whether the description is expanded or not
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the expansion of the description
  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  // Adjust the description text based on whether it's expanded or not
  const truncatedDescription = expanded ? description : `${description.slice(0, 70)}...`;

  return (
    <div className="regular-post">
      {/* Display username and handle user account information */}
      <UserAccountInfo username={username} />
      
      {/* Display post title */}
      <h2>{title}</h2>
      
      {/* Display post image if available */}
      {image && <img src={image} alt="Post" />}
      
      {/* Display post description */}
      <p>
        {truncatedDescription}
        
        {/* Show "See More" link if description is longer than 70 characters */}
        {description.length > 70 && (
          <span className="see-more" onClick={toggleDescription}>
            {expanded ? 'Hide' : 'See More'}
          </span>
        )}
      </p>
    </div>
  );
}

// Event component for events
function Event({ username, title, when, where, what }) {
  return (
    <div className="event">
      {/* Pass the username to the UserAccountInfo component */}
      <UserAccountInfo username={username} />
      {/* Render other event content */}
      <h2>{title}</h2>
      <div className="event-text">
      <p><strong>When:</strong> {when}</p>
      <p><strong>Where:</strong> {where}</p>
      <p><strong>What:</strong> {what}</p>
      </div>
    </div>
  );
}

// Sample posts data
const posts = [
  {
    id: 1,
    type: 'regular',
    username: 'g0atplaces',
    title: 'Checkout Our Posts!',
    image: "https://www.stedwards.edu/sites/default/files/2020-10/pres_gallery-main_south_horz.jpg",
    description: 'Students and incoming freshman often face the challenge of staying informed on school events and navigating their way to class',
  },
  {
    id: 2,
    type: 'event',
    username: 'g0atplaces',
    title: 'Event 1 Title',
    when: 'Date and Time',
    where: 'Location',
    what: 'Description about the event.',
  },
 

  {
    id: 3,
    type: 'regular',
    username: 'g0atplaces',
    title: 'Another Regular Post',
    image: "https://rebeccafrostdavis.files.wordpress.com/2013/06/b40c0-steds.jpg",
    description: 'This is another regular post with a different image.',
  },
  {
    id: 4,
    type: 'event',
    username: 'g0atplaces',
    title: 'Event 2 Title',
    when: 'Another Date and Time',
    where: 'Another Location',
    what: 'Description about another event.',
  },

];

function Homepage() {
  return (
    <div className="home">
      <div className="post-container">
        {/* Render posts dynamically */}
        {posts.map((post) => (
          <div key={post.id} className="post">
            {post.type === 'regular' ? (
              <RegularPost
                username={post.username}
                title={post.title}
                image={post.image}
                description={post.description}
              />
            ) : (
              <div classname="event-text">
              <Event
              
                username={post.username}
                title={post.title}
                when={post.when}
                where={post.where}
                what={post.what}
               
              />
               </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;