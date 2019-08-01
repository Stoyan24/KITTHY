export const uploadsView = () => {
  const $div = $('#upload-form');
  const $mainDiv = $(`.fst, .snd, .trd, .fth`).empty();
  $div.empty();
  $mainDiv.empty();
  $div.append(` <form action="#">
  <div class="file-field input-field">
    <div class="btn">
      <span>File</span>
      <input type="file" id="user-file">
    </div>
    <div class="file-path-wrapper">
      <input class="file-path validate" type="text">
    </div>
    <div>
      <a class="btn-floating waves-effect waves-light user-file-submit"><i class="material-icons">add</i></a>
      </div>

  </div>
</form>`);
};
