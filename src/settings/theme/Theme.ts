function handleChangeTheme(): void {
    let theme: string = getCurrentTheme();
    if (theme === 'light') theme = 'dark';
    else theme = 'light';
    localStorage.setItem('birkheadc_homepage-theme', theme);
    loadTheme(theme);
  }

  function getCurrentTheme(): string {
    let localTheme: string | null = localStorage.getItem('birkheadc_homepage-theme');
    if (localTheme) return localTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function loadTheme(theme: string = getCurrentTheme()) {
    const root = document.querySelector(':root');
    if (root) root.setAttribute('color-scheme', theme);
  }

  const Theme = {
    handleChangeTheme,
    loadTheme,
    getCurrentTheme
  }

  export default Theme;