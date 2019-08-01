import { getTrendingGif, getCatsData } from './remotes/remote.js';
import { trendView } from './views/trendingView.js';
import { populate } from './views/populate.js';


const populateTrending = async () => {
  try {
    let trendingList = [];

    const trendList = await getTrendingGif();
    trendingList = await trendList.json();
    trendingList.data.forEach((gif) => trendView(gif));
  } catch (error) {
    console.error(error);
  }
};

const getCats = async () => {
  $('#results-heading').text(`Cats!`);
  $('#text-for-favorites').remove();
  $('#upload-form').empty();
  $('#loadMore').empty();
  $('#loadMore').append('<a id="loadMoreBtn" class="waves-effect waves-light btn center-align" >Load More</a>');
  try {
    const result = await getCatsData();
    const jsonResult = await result.json();
    populate(jsonResult.data);
  } catch (error) {
    console.error(error);
  }
};

const logSearched = (callback) => $(document).on('click', '#header-input-btn', callback);

const detailsPopUp = (callback) => $(document).on('click', '[data-id]', callback);

const popUpUpload = (callback) => $(document).on('click', '.upload-btn', callback);

const uploadGif = (callback) => $(document).on('click', '.user-file-submit', callback);

const goToHomePage = (callback) => $(document).on('click', '.header-first-col-row', callback);

const likeEvent = (callback) => $(document).on('click', '.overlay', callback);

const favsLoad = (callback) => $(document).on('click', '.fav-btn', callback);

const loadMoreContent = (callback) => $(document).on('click', '#loadMoreBtn', callback);

export {
  populateTrending,
  logSearched,
  getCats,
  detailsPopUp,
  popUpUpload,
  uploadGif,
  goToHomePage,
  likeEvent,
  favsLoad,
  loadMoreContent,
};
