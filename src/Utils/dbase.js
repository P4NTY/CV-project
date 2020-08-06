
//GraphCMS
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
      type
    }
  }`;

  const queryMainpage = `{
    teches {
      name
      icon {
        url
      }
      link
      type
    }
    projectses (
      orderBy: order_ASC
    ) {
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

  const _getData = (query) => {
    const request = fetch(`${apiURL}?query=${query}`)
        .then(res => res.json())
        .then(data => {
          return data;
        })
        .catch(function(error) {
          console.log(error);
          return null;
        });

    return request;
  }

export const getProjects = () => (
  _getData(queryProjects)
)

export const getTech = () => (
  _getData(queryTechs)
)

export const getMainpage = () => (
  _getData(queryMainpage)
)

//Airtable


//Integromat