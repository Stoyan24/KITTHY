export const trendView = (todo) => {
  const $div = $('#trendingCarousel');
  $div.append(`<a class="carousel-item" ><img data-id="${todo.id}" src="${todo.images.fixed_height_downsampled.url}"></a>`);
};

