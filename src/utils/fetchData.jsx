export const exerciseOptions =  {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '8ad967c2e7msh8c5aaea2857a55ep1f477ajsn78c9414c253c',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
      };

export const youtubeOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '772dfc2d00msh819aecadb3964eap1ee5efjsn53b3b2f75b8b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
 };


export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}