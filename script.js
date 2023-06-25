const form = document.getElementById('my-form');
const modal = document.getElementById('modal');
const audio = document.getElementById('audio');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nickname = form.elements.nickname.value;
  const gender = form.elements.gender.value;
  const age = form.elements.age.value;
  const message = form.elements.message.value;
  if (!nickname || !gender || !age || !message) {
    alert('请填写完整信息！');
    return;
  }
  modal.style.display = 'block';
  audio.play();
});
