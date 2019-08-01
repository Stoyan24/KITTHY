import { populateTrending, detailsPopUp, logSearched, popUpUpload, getCats, uploadGif, goToHomePage, likeEvent, favsLoad, loadMoreContent } from './events.js';
import { keywordGifs, getById, uploadingGif, getByIds, limit, keywordGifsMore, getRandomId } from './remotes/remote.js';
import { populate, populateNoDelete, populateForFav } from './views/populate.js';
import { keywordHandler } from './common.js';
import { uploadsView } from './views/uploadsView.js';
import { showDetails } from './views/gifDetailsView.js';

(async () => {
  // Selected jquery elemnts
  const headerText = $('#results-heading');
  // Initial populate
  await populateTrending();
  await getCats();
  await goToHomePage(getCats);

  // Carousel
  $(document).ready(function() {
    $('.carousel').carousel({ numVisible: 7,
      dist: -30,
    });

    $('.tap-target').tapTarget();

    setInterval(function() {
      $('.carousel').carousel('next');
    }, 2000);
  });

  // Search gifs
  logSearched(async (ev) => {
    ev.preventDefault();
    const $input = $('#header-input');
    const $keyword = $input.val();
    try {
      headerText.text(`Search results for '${$keyword}'`);
      const result = await keywordGifs($keyword);
      const jsonResult = await result.json();
      populate(jsonResult.data);
      $input.val('');
    } catch (error) {
      console.error(error);
    }
  });

  let offset = limit;
  loadMoreContent(async () => {
    const workarr = [];
    keywordHandler(workarr);
    try {
      headerText.text(`Search results for '${workarr[0]}'`);
      const result = await keywordGifsMore(workarr[0], offset);
      const jsonResult = await result.json();
      populateNoDelete(jsonResult.data);
    } catch (error) {
      console.error(error);
    }
    offset+=limit;
  });

  // Details on the gifs
  detailsPopUp( async (ev) => {
    const id = $(ev.target).attr('data-id');
    console.log(id);
    try {
      const result = await getById(id);
      const jsonResult = await result.json();
      console.log(jsonResult);
      showDetails(jsonResult);
    } catch (e) {
      console.error(e);
    }
  });

  // Upload gifs
  const uploadedGifs = localStorage.getItem('uploadedGifIds');
  const uploadedGifIds = uploadedGifs ? uploadedGifs.split(',') : [];

  popUpUpload( async (ev) => {
    $('#text-for-favorites').remove();
    uploadsView();
    headerText.text(`My uploads`);
    $('#loadMore').empty();
    const myUploadsResult = await getByIds(uploadedGifs);
    const myUploads = await myUploadsResult.json();
    populate(myUploads.data);

    uploadGif(async (event) => {
      try {
        const file = $('#user-file')[0].files[0];
        const formData = new FormData();
        formData.append('file', file);
        const result = await uploadingGif(formData);
        const jsonResult = await result.json();

        uploadedGifIds.push(jsonResult.data.id);
        localStorage.setItem('uploadedGifIds', uploadedGifIds);

        M.toast({ html: 'Upload completed!' });
        location.reload();
      } catch (error) {
        console.error(error);
      }
    });
  });

  // Liking gifs and adding them to favourites
  const favGifs = localStorage.getItem('favGifIds');
  let favGifIds = favGifs ? favGifs.split(',') : [];


  likeEvent((ev) => {
    const id = $(ev.target).attr('id');
    if (!favGifIds.includes(id)) {
      favGifIds.push(id);
      M.toast({ html: 'Added to favorites!', classes: 'blue' });
    } else {
      favGifIds = favGifIds.filter((i) => i !== id);
      M.toast({ html: 'Removed from favorites!', classes: 'red' });
    }

    localStorage.setItem('favGifIds', favGifIds);
  });

  // Displaying favourite Gifs
  favsLoad(async (ev) => {
    $('#text-for-favorites').remove();
    headerText.text(`Favorites`);
    $('#loadMore').empty();
    // eslint-disable-next-line eqeqeq
    if (favGifIds == '') {
      const myRandomResult = await getRandomId();
      const myRandom = await myRandomResult.json();
      populateForFav(myRandom.data);
    } else {
      const myFavsResult = await getByIds(favGifs);
      const myFavs = await myFavsResult.json();
      populate(myFavs.data);
    }
  });
})();
