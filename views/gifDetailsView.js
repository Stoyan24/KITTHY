export const showDetails = (data) => {
  const $div = $('#popUpInfo');

  if (!data.data.username == '') {
    $div.empty();
    $div.append(`
    <h3 class="right-align remodel">${data.data.title}</h3>
    <div class="chip">
    <img src="${data.data.user.avatar_url}" alt="Contact Person">
    ${data.data.user.username}
    </div>
    <span class="new badge red customPosition">${data.data.rating}</span>
`);
  } else {
    $div.empty();
    $div.append(`
      <h3 class="right-align remodel">${data.data.title}</h3>
      <div class="chip">
      <img src="./imgs/Anonymous.svg.png" alt="Contact Person">
          Anonymous
      </div>
      <span class="new badge red customPosition">${data.data.rating}</span>
    `);
  }
  $('.tap-target').tapTarget('open');
};
