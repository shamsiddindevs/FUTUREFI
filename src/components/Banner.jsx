import './Banner.css'


const Banner = ({ images, speed = 5000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <div className="section" style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className="image" key={id}>
                <img loading="lazy" src={image} alt={id} />
              </div>
            ))}
          </div>
          <div className="section" style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className="image" key={id}>
                <img loading="lazy" src={image} alt={id} />
              </div>
            ))}
          </div>
          <div className="section" style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className="image" key={id}>
                <img loading="lazy" src={image} alt={id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export { Banner };
  