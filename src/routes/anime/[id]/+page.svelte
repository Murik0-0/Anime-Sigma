<script>
  export let data;
  const { anime } = data;
  const SHIKIMORI_URL = 'https://shikimori.one';
</script>

<div class="page-wrapper">
  {#if anime}
    <!-- Фоновая картинка (размытая) -->
    <div class="bg-blur" style="background-image: url({SHIKIMORI_URL}{anime.image.original})"></div>

    <div class="content-container">
      <a href="/" class="back-link">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Назад
      </a>

      <div class="anime-layout">
        <!-- Левая колонка: Постер -->
        <aside>
          <div class="poster-card">
            <img src="{SHIKIMORI_URL}{anime.image.original}" alt={anime.russian} />
            <div class="status-badge {anime.status}">{anime.status}</div>
          </div>
          <div class="stats">
            <div class="stat-box">
              <span class="label">Рейтинг</span>
              <span class="value accent">{anime.score}</span>
            </div>
            <div class="stat-box">
              <span class="label">Эпизоды</span>
              <span class="value">{anime.episodes || '?'}</span>
            </div>
          </div>
        </aside>

        <!-- Правая колонка: Инфо -->
        <article>
          <h1>{anime.russian || anime.name}</h1>
          <h2 class="original-title">{anime.name}</h2>
          
          <div class="genres">
            {#each anime.genres as genre}
              <span class="tag">{genre.russian}</span>
            {/each}
          </div>

          <div class="description-box">
            <h3>Синопсис</h3>
            <p>{@html anime.description || 'Описание отсутствует.'}</p>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <span class="l">Тип:</span> <span class="v">{anime.kind}</span>
            </div>
            <div class="info-item">
              <span class="l">Длительность:</span> <span class="v">{anime.duration} мин.</span>
            </div>
            <div class="info-item">
              <span class="l">Рейтинг MPAA:</span> <span class="v">{anime.rating}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  {:else}
    <div class="loading">Загрузка данных...</div>
  {/if}
</div>

<style>
  .page-wrapper {
    position: relative;
    min-height: 100vh;
    padding-bottom: 50px;
    overflow-x: hidden;
  }

  /* Эффект размытого фона */
  .bg-blur {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 60vh;
    background-size: cover;
    background-position: center;
    filter: blur(80px) brightness(0.4);
    mask-image: linear-gradient(to bottom, black, transparent);
    z-index: -1;
  }

  .content-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px 20px;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
    color: var(--text-muted);
    font-weight: 500;
  }
  .back-link:hover { color: var(--accent); }

  .anime-layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 50px;
  }

  /* Постер */
  .poster-card {
    position: relative;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
    border: 1px solid var(--border);
  }

  .poster-card img {
    width: 100%;
    display: block;
  }

  .status-badge {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background: rgba(0,0,0,0.8);
    text-align: center;
    padding: 8px;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: #fff;
    backdrop-filter: blur(5px);
  }
  
  .status-badge.ongoing { color: var(--accent); border-top: 1px solid var(--accent); }

  /* Статистика под постером */
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
  }

  .stat-box {
    background: var(--card-bg);
    padding: 15px;
    border-radius: var(--radius);
    text-align: center;
    border: 1px solid var(--border);
  }

  .stat-box .label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 5px; }
  .stat-box .value { font-size: 1.5rem; font-weight: bold; }
  .stat-box .value.accent { color: var(--accent); text-shadow: 0 0 10px rgba(0,255,65, 0.4); }

  /* Правая часть */
  h1 { font-size: 2.5rem; margin: 0; line-height: 1.2; }
  .original-title { font-size: 1.2rem; color: var(--text-muted); font-weight: 400; margin: 5px 0 20px; }

  .genres { margin-bottom: 30px; display: flex; flex-wrap: wrap; gap: 10px; }
  .tag {
    background: var(--accent-dim);
    color: var(--accent);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    border: 1px solid rgba(0,255,65, 0.2);
  }

  .description-box {
    background: var(--card-bg);
    padding: 25px;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    margin-bottom: 30px;
  }
  .description-box h3 { margin-top: 0; color: var(--text-muted); font-size: 0.9rem; text-transform: uppercase; }
  .description-box p { line-height: 1.8; color: #ddd; font-size: 1rem; }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .info-item .l { color: var(--text-muted); margin-right: 5px; }
  .info-item .v { color: #fff; }

  /* Адаптив */
  @media (max-width: 800px) {
    .anime-layout { grid-template-columns: 1fr; }
    .poster-card { max-width: 300px; margin: 0 auto; }
    h1 { font-size: 2rem; }
  }
</style>