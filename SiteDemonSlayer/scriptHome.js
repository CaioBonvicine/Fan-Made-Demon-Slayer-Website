document.getElementById('searchBtn').addEventListener('click', () => {
  const searchValue = document.getElementById('searchInput').value.trim().toLowerCase();

  if (searchValue === '') return;

  const onis = {
    'muzan': 'Muzan.html',
    'akaza': 'Akaza.html',
    'douma': 'Douma.html',
    'kokushibu': 'Kokushibu.html',
    'hantengu': 'Hantengu.html',
    'gyokko': 'Gyokko.html',
    'gyutaro': 'Gyutaro.html'
  };

  if (onis[searchValue]) {
    window.location.href = onis[searchValue];
  } else {
    alert('Oni não encontrado. Verifique o nome e tente novamente.');
  }
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('searchBtn').click();
  }
});
