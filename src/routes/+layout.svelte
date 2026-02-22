<!-- src/routes/+layout.svelte -->
<slot />

<style>
  /* ГЛОБАЛЬНЫЕ СТИЛИ (Наша черно-зеленая тема) */
  :global(:root) {
    --bg-color: #050505;
    --card-bg: #111111;
    --accent: #00ff41;         /* Матричный зеленый */
    --accent-dim: rgba(0, 255, 65, 0.1);
    --text-main: #ffffff;
    --text-muted: #888888;
    --border: #333333;
    --radius: 12px;
  }

  :global(body) {
    background-color: var(--bg-color);
    color: var(--text-main);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(a) {
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
  }

  :global(*), :global(*::before), :global(*::after) {
    box-sizing: border-box;
  }

  :global(*::selection) {
    background: var(--accent);
    color: #000;
  }
</style>