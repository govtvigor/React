import './WorkExperience.css'; // імпорт стилів

import React, { useState } from 'react';

const WorkItem = ({ title, description, name, link }) => {
  return (
    <div className="work-item">
      <h3 className="work-title">{title}</h3>
      <p className="work-description">{description}</p>
      <p className="work-name">{name}</p>
      <a className="work-link" href={link}>Learn more</a>
    </div>
  );
};

const WorkExperience = () => {
  const [workItems, setWorkItems] = useState([]);

  const handleAddWork = (event) => {
    event.preventDefault();
    const newWorkItem = {
      title: event.target.title.value,
      description: event.target.description.value,
      name: event.target.name.value,
      link: event.target.link.value,
    };
    setWorkItems([...workItems, newWorkItem]);
    event.target.reset();
  };

  return (
    <div>
      
      
      <h2>Work Experience</h2>

      <div className="work-experience">
        <form onSubmit={handleAddWork}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" className="input-field" required />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" className="input-field" required />

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="input-field" required />

          <label htmlFor="link">Link:</label>
          <input type="text" id="link" name="link" className="input-field" required />

          <button type="submit">Add Work</button>
        </form>

        {workItems.map((work, index) => (
          <WorkItem
            key={index}
            title={work.title}
            description={work.description}
            name={work.name}
            link={work.link}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
