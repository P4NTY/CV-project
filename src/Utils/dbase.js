export const apiURL = 'https://api-euwest.graphcms.com/v1/ck112o9861rbg01e8636r8atb/master';

const queryProjects = `{
    projectses{
      order
      tittle
      about {
        html
      }
         startDate
      endDate
      teches {
        name
      }
    }
  }`;

  const queryTechs = `{
    teches {
      name
      icon {
        url
      }
      link
    }
  };`

export const getProjects = () => {
    const request = fetch(apiURL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"query": ${queryProjects}}`,
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });

    return request;
}


export const getTech = () => {
    const request = fetch(apiURL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"query": ${queryTechs}}`,
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });

    return request;
}