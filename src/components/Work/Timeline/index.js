import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'January 2025 - Present',
      title: 'HypnoTech, Inc.',
      description: [
        'Engineered optimized <b>Java components</b>, ensuring robust functionality through thorough <b>code reviews</b>.',
        'Collaborated with <b>engineering teams</b> to design and optimize <b>deployment strategies</b>, integrating them into existing <b>CI/CD workflows</b>.',
        'Built scalable <b>RESTful APIs</b> in <b>Spring Boot</b>, maintaining system reliability through structured <b>unit testing</b>.',
        'Contributed to every phase of the <b>Agile SDLC</b>, regularly engaging in <b>sprint discussions</b> and <b>planning</b>.',
        'Developed and implemented structured <b>test cases</b> to validate <b>module functionality</b> and ensure documentation compliance.',
      ],
      expanded: false,
    },
    {
      date: 'April 2020 - July 2023',
      title: 'Air Canada, Customer Representative',
      description: [
        'Thrived in a high-stress work environment, maintaining composure during peak periods and challenging situations.',
        'Proven ability to analyze and resolve customer issues promptly, showcasing strong <b>problem-solving skills</b>.',
        'Managed a high volume of customer inquiries simultaneously, demonstrating strong <b>multitasking abilities</b>.',
      ],
      expanded: false,
    },
    {
      date: 'February 2017 - March 2020',
      title: 'Iristel, Technical Support Representative (Tier 3)',
      description: [
        'Translated customer-reported problems into technical solutions, resolving complex issues efficiently.',
        'Assisted in the training of new technical support staff, showcasing the ability to convey <b>technical concepts</b> effectively.',
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
