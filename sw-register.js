// Service Worker 登録スクリプト
// このファイルは本番サーバー（Netlify/GitHub Pages）にのみアップロードしてください
// アーティファクット環境ではこのファイルは不要です

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(r => console.log('SW registered:', r.scope))
      .catch(e => console.warn('SW registration failed:', e));
  });
}
