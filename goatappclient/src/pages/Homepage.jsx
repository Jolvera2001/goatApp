import React from 'react'
import logo from '../components/logo.png';


// Post component for regular posts
function RegularPost({ username, title, image, description }) {

  const [expanded, setExpanded] = React.useState(false);
  const [text, setText] = React.useState(description);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    setText(expanded ? description : `${description.slice(0, 70)}...`);
  }, [description, expanded]);

  return (
    <div className="regular-post">
      <h3>@{username}</h3>
      <h2>{title}</h2>
      {image && <img src={image} alt="Post" />}
      <p>
        {text}
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
      <h3>@{username}</h3>
      <h2>{title}</h2>
      <p><strong>When:</strong> {when}</p>
      <p><strong>Where:</strong> {where}</p>
      <p><strong>What:</strong> {what}</p>
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
  // Add more sample posts as needed
];

function Homepage() {
  return (
    <div className='home'>
   
      <div className='post-container'>
        {/* Render posts dynamically */}
        {posts.map((post) => (
          <div key={post.id} className='post'>
            {post.type === 'regular' ? (
              <RegularPost
                username={post.username}
                title={post.title}
                image={post.image}
                description={post.description}
              />
            ) : (
              <Event
                username={post.username}
                title={post.title}
                when={post.when}
                where={post.where}
                what={post.what}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
