import { heart } from '../common.js';

export const populate = (array) => {
  const populateFn = () => {
    const workArray = ['fst', 'snd', 'trd', 'fth'];
    // WorkArray provides the correct div location for the populating function;
    const quarter = Math.ceil(array.length/4);
    let iterator = 1;
    let starter = 0;
    // Some variables needed for the internal cycle logic;
    $(`.fstDivImg, .sndDivImg, .trdDivImg, .fthDivImg`).empty();
    workArray.forEach((element) => {
      array.slice(starter, quarter*iterator).forEach((item) => {
        // Outer cycle provides the starting column and breaks the gif array into four parts;
        $(`.${element}DivImg`).append(`<div class="container"><div id=${item.id} class="overlay">${heart}</div>
        <img data-id="${item.id}" src='${item.images.fixed_width_downsampled.url}' class="image"></div>`);
        // Inner cycle dumps the corresponding gifs one column at a time, while appending the necessary containers
        // & symbols for the Fav button overlay;
      });
      iterator+=1;
      starter+=quarter;
      // The proper increment of these variables provides the outer cycle
      // with correct start and end points for the slice method;
    });
  };
  return populateFn();
};

export const populateNoDelete = (array) => {
  const populateFn = () => {
    const workArray = ['fst', 'snd', 'trd', 'fth'];
    // WorkArray provides the correct div location for the populating function;
    const quarter = Math.ceil(array.length/4);
    let iterator = 1;
    let starter = 0;
    // Some variables needed for the internal cycle logic;
    workArray.forEach((element) => {
      array.slice(starter, quarter*iterator).forEach((item) => {
        // Outer cycle provides the starting column and breaks the gif array into four parts;
        $(`.${element}DivImg`).append(`<div class="container"><div id=${item.id} class="overlay">${heart}</div>
        <img data-id="${item.id}" src='${item.images.fixed_width_downsampled.url}' class="image"></div>`);
        // Inner cycle dumps the corresponding gifs one column at a time, while appending the necessary containers
        // & symbols for the Fav button overlay;
      });
      iterator+=1;
      starter+=quarter;
      // The proper increment of these variables provides the outer cycle
      // with correct start and end points for the slice method;
    });
  };
  return populateFn();
};


export const populateForFav = (obj) => {
  const populateFn = () => {
	$('#text-for-favorites').remove();
    $('#outer').append(`<h2 id="text-for-favorites" class="center-align">You don't have a favorite gif<br> try this one</h2>`);
    $(`.fstDivImg, .sndDivImg, .trdDivImg, .fthDivImg`).empty();
    $(`.trdDivImg`).append(`<div class="container"><div id=${obj.id} class="overlay">${heart}</div>
        <img data-id="${obj.id}" src='${obj.images.fixed_width_downsampled.url}' class="image"></div>`);
  };
  return populateFn();
};
