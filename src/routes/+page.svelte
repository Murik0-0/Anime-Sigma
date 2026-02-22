<script>
  export let data;
  let searchTerm = '';
  const SHIKIMORI_URL = 'https://shikimori.one';

  function handleSearch() {
    window.location.href = `/?q=${searchTerm}`;
  }
</script>

<div class="app-container">
  <!-- Хедер с поиском -->
  <header>
    <h1 class="glitch-text">Нефорня<span class="dot">.</span>Ансока</h1>
    
    <div class="search-wrapper">
      <input 
        type="text" 
        placeholder="Поиск аниме..." 
        bind:value={searchTerm} 
        on:keydown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <!-- Добавили aria-label="Поиск" -->
<button on:click={handleSearch} aria-label="Поиск">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
</button>
    </div>
  </header>

  <!-- Сетка карточек -->
  <main class="grid">
    {#each data.animes as anime}
      <a href="/anime/{anime.id}" class="card">
        <div class="image-box">
          <img src="{SHIKIMORI_URL}{anime.image.original}" alt={anime.name} loading="lazy" />
          <div class="overlay"></div>
          <div class="score">{anime.score}</div>
        </div>
        <div class="content">
          <h3>{anime.russian || anime.name}</h3>
          <div class="meta">
            <span class="type">{anime.kind}</span>
            <span class="episodes">{anime.episodes || '?'} ep</span>
          </div>
        </div>
      </a>
    {:else}
      <div class="empty">Ничего не найдено... 🕸️</div>
    {/each}
  </main>
</div>

<style>
  .app-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
  }

  /* --- HEADER --- */
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    gap: 20px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: -2px;
    margin: 0;
    text-transform: uppercase;
  }
  
  .dot { color: var(--accent); }

  .search-wrapper {
    position: relative;
    width: 100%;
    max-width: 500px;
    display: flex;
    border-bottom: 2px solid var(--border);
    transition: 0.3s;
  }

  .search-wrapper:focus-within {
    border-color: var(--accent);
    box-shadow: 0 10px 20px -10px var(--accent-dim);
  }

  input {
    width: 100%;
    padding: 15px;
    background: transparent;
    border: none;
    color: var(--text-main);
    font-size: 1.1rem;
    outline: none;
  }

  button {
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    transition: 0.2s;
  }
  
  button:hover { color: var(--accent); }

  /* --- GRID --- */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 25px;
  }

  /* --- CARD --- */
  .card {
    background: var(--card-bg);
    border-radius: var(--radius);
    overflow: hidden;
    position: relative;
    border: 1px solid var(--border);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    flex-direction: column;
  }

  .card:hover {
    transform: translateY(-7px);
    border-color: var(--accent);
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.15);
  }

  .image-box {
    position: relative;
    height: 320px;
    overflow: hidden;
  }

  .image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
  }

  .card:hover img { transform: scale(1.05); }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  }

  .score {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,0.8);
    color: var(--accent);
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 0.9rem;
    border: 1px solid var(--accent);
    backdrop-filter: blur(4px);
  }

  .content {
    padding: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    margin: 0 0 10px;
    font-size: 1rem;
    line-height: 1.4;
    color: #eee;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .card:hover h3 { color: var(--accent); }

  .empty {
    grid-column: 1 / -1;
    text-align: center;
    color: var(--text-muted);
    margin-top: 50px;
  }
</style>