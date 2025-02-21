import './Banner.css'
import PropTypes from 'prop-types';

const Banner = ({ images = [], speed = 5000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <div className="section" style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className="image" key={id}>
                <img loading="lazy" src={image} alt={"Online Personal Finance Course in Tashkent"} />
              </div>
            ))}
          </div>
          <div className="section" style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className="image" key={id}>
                <img loading="lazy" src={image} alt={"How to manage your money wisely"} />
              </div>
            ))}
          </div>
          <div className="section" style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className="image" key={id}>
                <img loading="lazy" src={image} alt={"Best personal finance course in Tashkent"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  Banner.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
    speed: PropTypes.number,
  };
  
  export { Banner };
  