// JavaScript to toggle visibility
document.getElementById('toggleButton').addEventListener('click', function() {
    const content = document.getElementById('toggleContent');
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });