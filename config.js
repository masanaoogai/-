// ============================================================
// まいにち脳活 — ゲーム設定ファイル
// このファイルを編集するだけでポータルの表示が変わります
// ============================================================

const GAME_CONFIG = {

  // ── 総合テスト１ ──
  spp1: {
    name:  '総合テスト１',
    sub:   '基本概要コース',
    desc:  '約10分',
    games: [
      { id: 'spp1-1', name: 'ことば色パズル',     url: 'https://kotoba-iro.bolt.host/' },
      { id: 'spp1-2', name: '頭の元気チェック',   url: 'https://atama-genki.bolt.host/' },
      { id: 'spp1-3', name: '数字当てパズル',     url: 'https://kazuate-puzzle.bolt.host/' },
      { id: 'spp1-4', name: '認知症リスク問診票', url: 'https://ninchisho-check.bolt.host/' },
    ],
  },

  // ── 総合テスト２ ──
  spp2: {
    name:  '総合テスト２',
    sub:   '詳細調査コース',
    desc:  '約15分',
    games: [
      { id: 'spp2-1', name: 'カラータイルアタック25', url: 'https://color-tile-25.bolt.host/' },
      { id: 'spp2-2', name: '頭元気チェックver2',     url: null },  // 準備中
      { id: 'spp2-3', name: '数字当てパズルver3',     url: null },  // 準備中
      { id: 'spp2-4', name: '認知症リスク問診票',     url: null },  // 準備中
    ],
  },

  // ── トレーニングゲーム ──
  training: [

    {
      key:   'calc',
      label: '計算力',
      games: [
        { id: 'calc-1', name: 'お釣りはいくら？',      url: 'https://change-calculation-b-pg3q.bolt.host/' },
        { id: 'calc-2', name: '足して10（テン）パズル', url: 'https://sum-10-puzzle-pwa-ba7l.bolt.host/' },
      ],
    },

    {
      key:   'obs',
      label: '観察力',
      games: [
        // 準備ができたら追加
        // { id: 'obs-1', name: '昭和の風景まちがい探し', url: 'https://...' },
      ],
    },

    {
      key:   'mem',
      label: '記憶力',
      games: [
        { id: 'mem-2', name: 'お使いマスター', url: 'https://errand-master-pwa-a0hf.bolt.host/' },
      ],
    },

    {
      key:   'jud',
      label: '判断力',
      games: [
        // 準備ができたら追加
      ],
    },

    {
      key:   'int',
      label: '直感力',
      games: [
        // 準備ができたら追加
      ],
    },

    {
      key:   'react',
      label: '反応力',
      games: [
        // 準備ができたら追加
      ],
    },

    {
      key:   'know',
      label: '知力',
      games: [
        { id: 'know-1', name: '都道府県シルエット', url: 'https://y82ac1ncebrbd4nr60gqn16os.bolt.host' },
      ],
    },

  ],

};
