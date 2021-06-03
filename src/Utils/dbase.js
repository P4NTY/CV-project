//GraphCMS
export const apiURL = 'https://api-eu-central-1.graphcms.com/v2/ck112o9861rbg01e8636r8atb/master';

const queryProjects =  `{
    projectses{
      order
      title
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
    teches (
      where: { visible: true }
    ) {
      name
      icon {
        url
      }
      link
      type
      description {
        html
      }
    }
    projectses (
      where: { visible: true }
      orderBy: order_ASC
    ) {
        order
        title
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
  _getData(queryProjects.replace(/ {2,}/g, ' '))
)

export const getTech = () => (
  _getData(queryTechs.replace(/ {2,}/g, ' '))
)

export const getMainpage = () => (
  _getData(queryMainpage.replace(/ {2,}/g, ' '))
)

//IP check
export async function getUserIP() {

}


//Integromat
export async function getSendURL(formData) {
  const sendData = await fetch("https://hook.integromat.com/udh829sk3v65d9iw9x928lqyjkg1nhsi", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  return await sendData;
}