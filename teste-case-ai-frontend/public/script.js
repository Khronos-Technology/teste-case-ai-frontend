document.getElementById('gerar').addEventListener('click', async () => {
  const response = await fetch('https://SUA_API_URL_HERE/generate_bdd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: 'Exemplo de prompt' })
  });
  const data = await response.text();
  document.getElementById('output').value = data;
});
