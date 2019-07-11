import React, { useState } from 'react';
import './App.css';

function Details() {
  const [ sectionContent, setSectionContent ] = useState([
    {
      'head': "Services",
      'content': "Mauris non turpis commodo, maximus massa vel, rutrum nulla. Suspendisse sed tortor semper, accumsan metus finibus, mattis mauris. Vestibulum mattis massa id magna ullamcorper efficitur. Donec vitae arcu et quam eleifend ornare ac rutrum libero. Nullam nisi eros, posuere sit amet accumsan sed, sagittis ut dolor.",
    },
    {
      'head': "About the Company",
      'content': "Etiam rutrum purus ac dui aliquam sodales. Pellentesque a tellus leo. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pellentesque faucibus ex ut bibendum. Aenean sed odio mattis eros semper sodales accumsan venenatis sapien.",
    },
    {
      'head': "Projects",
      'content': "Curabitur sollicitudin gravida elementum. Aliquam erat volutpat. Duis ut sem eget libero consectetur facilisis. Nullam congue mauris quis ultricies aliquet. Pellentesque dignissim porta enim, id molestie felis molestie et. Aenean leo odio, venenatis et turpis ut, pulvinar mollis diam."
    },
    {
      'head': "Media",
      'content': "Mauris inherit;massa massa, tincidunt vel inherit;sagittis non, maximus eget odio. Cras elementum feugiat egestas. Curabitur tincidunt magna eget ultricies efficitur. Integer vestibulum eros nec arcu cursus, ut dignissim justo lobortis.",
    },
  ]);

  const sections = sectionContent.map( (content) => {
    return (
      <section className="details__section">
        <h3 className="section__head">{content.head}</h3>
        <p className="section__content">{content.content}</p>
      </section>
    );
  });

  return (
    <article className="details">
      {sections.slice(0, Math.floor(sections.length / 2))}
      <img className="details__image"
        src="images/nasa-small.jpg"
        srcSet="images/nasa-large.jpg 4256w,
                images/nasa-small.jpg 1500w" />
      {sections.slice(Math.floor(sections.length / 2))}
      <hr className="separator" />
      <footer className="details__footer">
        <h3 className="footer__head">Contact Us</h3>
        <p className="footer__content">123 Building 456 Street<br/>
          The City, Philippines</p>
        <p className="footer__content footer__content--email">
          <a className="email" href="mailto:contactus@hexcorp.co">contactus@hexcorp.co</a>
        </p>
      </footer>
    </article>
  );
}

export default Details;