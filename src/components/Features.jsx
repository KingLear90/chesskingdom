import React from 'react';
import PropTypes from 'prop-types';

function Features({ features }) {
    
  return (
    <ul>
       {features.map(feature => 
        <li key={feature} className='features-list'>    {/* Se genera una key única propia de cada item. */}
          <div className='elements'>
            {feature.title} {feature.src}
          </div>
        </li> 
       )}
    </ul>
    )
};

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.isRequired,
    })
  ).isRequired,
};

export default Features
