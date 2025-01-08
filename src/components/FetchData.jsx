

const FetchSwaggerData = () => {

    fetch('https://mission.uz/en/api/v1/appeal-categories/')
      .then(response => response.json())
      .then(json => json)


  return <div>salom</div>;
};

export default FetchSwaggerData;
