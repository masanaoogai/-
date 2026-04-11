-- ════════════════════════════════════════════
-- まいにち脳活 Supabase セットアップSQL
-- Supabaseダッシュボード > SQL Editor に貼り付けて実行
-- ════════════════════════════════════════════

-- ① ユーザープロフィールテーブル
-- （Supabase Authの補完情報を保持）
create table if not exists public.profiles (
  id           uuid references auth.users on delete cascade primary key,
  display_name text not null,
  created_at   timestamptz default now()
);

-- 新規ユーザー登録時にprofilesへ自動挿入するトリガー
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1))
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ② ゲーム結果テーブル
create table if not exists public.game_results (
  id           bigserial primary key,
  user_id      uuid references auth.users on delete cascade not null,
  game_name    text not null,
  course_id    text,
  completed    boolean default true,
  duration_sec integer,
  score        integer,
  memo         text,
  played_at    timestamptz default now()
);

-- インデックス（ユーザー別・日付順で高速取得）
create index if not exists idx_game_results_user_id   on public.game_results(user_id);
create index if not exists idx_game_results_played_at on public.game_results(played_at desc);

-- ③ Row Level Security（自分のデータのみ読み書き可能）
alter table public.profiles      enable row level security;
alter table public.game_results  enable row level security;

-- profiles ポリシー
create policy "自分のプロフィールのみ参照" on public.profiles
  for select using (auth.uid() = id);
create policy "自分のプロフィールのみ更新" on public.profiles
  for update using (auth.uid() = id);

-- game_results ポリシー
create policy "自分の結果のみ参照" on public.game_results
  for select using (auth.uid() = user_id);
create policy "自分の結果のみ挿入" on public.game_results
  for insert with check (auth.uid() = user_id);
create policy "自分の結果のみ削除" on public.game_results
  for delete using (auth.uid() = user_id);

-- ════════════════════════════════════════════
-- 設定確認
-- ════════════════════════════════════════════
-- Authentication > Settings で以下を確認・設定：
--   - Site URL: デプロイ先のURL
--   - Confirm email: 必要に応じてOFF（高齢者向けには OFF 推奨）
-- ════════════════════════════════════════════
