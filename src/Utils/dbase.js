import axios from 'axios';

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

//IP check
export async function getUserIP() {
  const request = (
      await axios.get(`https://api.ipify.org/?format=json`)
      .then(result => {
        if (typeof result === 'undefined') return null;
        return result;
      })
      .catch(err => {
        console.log(err);
        return null;
       })
    );

  return request;
}


//Integromat
export const getSendURL = (e) => {
  console.log(e);
  debugger;
  // "https://hook.integromat.com/udh829sk3v65d9iw9x928lqyjkg1nhsi"
}