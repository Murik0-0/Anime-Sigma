// src/routes/+page.js (НЕ .server.js)

// Эта строка отключает рендеринг на сервере. 
// Загрузка будет происходить только в браузере.
export const ssr = false; 

export async function load({ url, fetch }) { // <-- Обрати внимание, мы берем fetch из аргументов
  const search = url.searchParams.get('q') || '';
  const apiBase = 'https://shikimori.one/api/animes';
  
  const params = new URLSearchParams({
    limit: '20',
    order: 'popularity',
    search: search
  });

  try {
    // Используем fetch, который нам дал SvelteKit
    const response = await fetch(`${apiBase}?${params}`, {
      headers: {
        // Притворяемся обычным браузером
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Ошибка API: ${response.status}`);
    }

    const animes = await response.json();
    return { animes };

  } catch (error) {
    console.error('Ошибка загрузки:', error);
    return { animes: [] };
  }
}