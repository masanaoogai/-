# まいにち脳活 PWA

## ファイル構成

```
nokatsu_pwa/
├── index.html       ← メインアプリ（全ページ含む）
├── manifest.json    ← PWA設定
├── sw.js            ← Service Worker（オフライン対応）
├── icons/
│   ├── icon-192.png ← アプリアイコン（小）
│   └── icon-512.png ← アプリアイコン（大）
└── README.md        ← このファイル
```

---

## デプロイ方法

### 方法①: GitHub Pages（無料・簡単）

1. GitHubで新しいリポジトリを作成
2. このフォルダのファイルをすべてアップロード
3. Settings → Pages → Branch: main / root → Save
4. `https://[ユーザー名].github.io/[リポジトリ名]/` でアクセス可能

### 方法②: Netlify（無料・ドラッグ＆ドロップ）

1. https://netlify.com にアクセス
2. フォルダごとドラッグ＆ドロップ
3. 自動でURLが発行される

### 方法③: Vercel（無料）

```bash
npm i -g vercel
cd nokatsu_pwa
vercel
```

### 方法④: 既存サーバー

フォルダごとサーバーのWebルートにアップロードするだけ。
**注意: PWAにはHTTPS必須**（localhostは除く）

---

## タブレットへのインストール方法

### iPad / Android タブレット
1. Safariまたは Chromeでサイトを開く
2. 共有ボタン →「ホーム画面に追加」をタップ
3. アプリとしてホーム画面に登録される

### Androidの場合
- Chromeが「ホーム画面に追加」バナーを自動表示

---

## アイコンを本格的なものに差し替える方法

1. 脳のイラストやロゴを用意（推奨: 1024×1024px）
2. https://www.pwabuilder.com/imageGenerator でアイコン一式を自動生成
3. `icons/` フォルダに上書き保存

---

## 対応環境

- **推奨**: iPad（横向き）、Androidタブレット（横向き）
- Chrome / Safari / Edge
- オフライン時もキャッシュから起動可能
- ゲーム（外部サイト）はオンライン必要

---

## 更新方法

`index.html` を編集してサーバーにアップロードするだけ。
Service Workerが自動的に新バージョンを検出・更新。
