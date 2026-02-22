// src/routes/anime/[id]/+page.js
export const ssr = false; // Оставляем рендеринг на клиенте, чтобы не было ошибок SSL

export async function load({ params, fetch }) {
  // params.id — это то число, которое попало в URL (например, 5114)
  const id = params.id;
  
  try {
    const response = await fetch(`https://shikimori.one/api/animes/${id}`);
    
    if (!response.ok) {
        throw new Error('Не удалось загрузить аниме');
    }

    const anime = await response.json();
    
    return {
      anime
    };

  } catch (err) {
      console.error(err);
      return { anime: null }; // Если ошибка, вернем null
  }
}