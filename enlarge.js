window.onclick = (e) => {
  if (e.target.tagName == 'IMG') {
    var modal = document.getElementById('myModal');
    var img = e.target;
    var modalImg = document.getElementById('img01');
    modal.style.display = 'block';
    modalImg.src = img.src;
    var span = document.getElementsByClassName('close')[0];
    span.onclick = function () {
      modal.style.display = 'none';
    };
    myModal.onclick = function () {
      modal.style.display = 'none';
    };
  }
};
