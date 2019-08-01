export const url = 'N0yhGT2cfClBaaYKrJDOozbJ0lKjji1S';
export const limit = 36;

export const getTrendingGif = () => fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${url}&limit=10&rating=G`);

export const keywordGifs = (keyword) => fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${url}&limit=${limit}`);

export const keywordGifsMore = (keyword, offset) => fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${url}&limit=${limit}&offset=${offset}`);

export const getById = (id) => fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${url}`);

export const getCatsData = () => fetch(`http://api.giphy.com/v1/gifs/search?q=cats&api_key=${url}&limit=${limit}`);

export const getByIds = (ids) => fetch(`https://api.giphy.com/v1/gifs?api_key=${url}&ids=${ids}`);

export const getRandomId = () => fetch(`https://api.giphy.com/v1/gifs/random?api_key=Ty23jeAto9R1pILtjQYgxOK1r4G96g58&tag=&rating=G`);

export const uploadingGif = (data) => fetch(`https://upload.giphy.com/v1/gifs?api_key=${url}`, {
  method: 'POST',
  body: data,
});

