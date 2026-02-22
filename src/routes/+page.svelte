<!-- src/routes/+page.svelte -->
<script>
  // Получаем данные из функции load (из шага 2)
  export let data;

  // Для поиска
  let searchTerm = '';
  
  // Базовый URL для картинок
  const SHIKIMORI_URL = 'https://shikimori.one';

  // Функция поиска (перезагружает страницу с новым параметром)
  function handleSearch() {
    window.location.href = `/?q=${searchTerm}`;
  }
</script>

<main class="container">
  <h1>Любимое для нефорёнка Ансока</h1>

  <!-- Поиск -->
  <div class="search-box">
    <input 
      type="text" 
      placeholder="Найти аниме..." 
      bind:value={searchTerm} 
      on:keydown={(e) => e.key === 'Enter' && handleSearch()}
    />
    <button on:click={handleSearch}>Поиск</button>
  </div>

  <!-- Сетка с аниме -->
  <div class="grid">
    {#each data.animes as anime}
      <div class="card">
        <div class="image-wrapper">
            <!-- Собираем полный путь к картинке -->
            <img src="{SHIKIMORI_URL}{anime.image.original}" alt={anime.russian || anime.name} />
            <div class="score">{anime.score}</div>
        </div>
        <div class="info">
          <h3>{anime.russian || anime.name}</h3>
          <p>Эпизоды: {anime.episodes || '?'}</p>
          <a href="{SHIKIMORI_URL}{anime.url}" target="_blank" class="btn">Подробнее</a>
        </div>
      </div>
    {:else}
      <p>Ничего не найдено :(</p>
    {/each}
  </div>
</main>

<style>
  /* Простые стили для красоты */
  :global(body) {
    font-family: sans-serif;
    background-color: #1a1a1a;
    color: #fff;
    margin: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  h1 { text-align: center; color: #ff9800; }

  .search-box {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 300px;
  }

  button {
    padding: 10px 20px;
    background: #ff9800;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .card {
    background: #2d2d2d;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.2s;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .image-wrapper {
    position: relative;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .score {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,0.7);
    color: #4caf50;
    padding: 5px 8px;
    border-radius: 5px;
    font-weight: bold;
  }

  .info {
    padding: 15px;
  }

  h3 {
    margin: 0 0 10px 0;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p { font-size: 0.9rem; color: #aaa; }

  .btn {
    display: block;
    text-align: center;
    background: #444;
    color: white;
    text-decoration: none;
    padding: 8px;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 0.9rem;
  }
  
  .btn:hover { background: #555; }
</style>