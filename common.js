export const keywordHandler = (array) => {
  if ($('#results-heading').text().includes('Cats')) {
    array.push('cats');
  } else {
    const str = $('#results-heading').text().slice(20, ($('#results-heading').text().length-1));
    console.log(str);
    array.push(str);
  }
  return (array);
};

export const heart = (`<svg class="heart" viewBox="0 0 32 29.6">
<path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0
C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2
C32,3.8,28.2,0,23.6,0z"/></svg> `);
