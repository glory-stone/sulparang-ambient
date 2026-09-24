# Sulparang Ambient Free 0.1.2

## HACS にリポジトリ URL を追加してインストール

HACS 設定済みの Home Assistant に無料版を追加します。種類は Dashboard を選びます。

HACS が未設定の場合は、先に公式ガイドをご覧ください。 [HACS](https://www.hacs.xyz/docs/use/download/download/)

### 1. カスタムリポジトリを開く

Home Assistant で HACS を開き、右上の ⋮ → Custom repositories を選びます。

### 2. URL を追加

下記 URL を貼り付け、種類は Dashboard を選択して Add を押します。

```
https://github.com/glory-stone/sulparang-ambient
```

### 3. 無料版をダウンロード

HACS で Sulparang Ambient を検索し、開いてダウンロードします。完了後にブラウザーを再読み込みしてください。標準一覧には未掲載のため、先にカスタムリポジトリを追加します。

### 4. カードを追加

ダッシュボードを編集 → カードを追加 → 手動で下記を保存。音のアイコンを押すと現在の端末で再生します。

```
type: custom:sulparang-ambient
language: ja
```

カードが見つからない場合、設定 → ダッシュボード → リソースで下記 URL が JavaScript モジュールとして登録されているか確認します。YAML 管理では手動登録が必要な場合があります。手動版から移行する際は旧 /local/sulparang-ambient/ リソースを外し、HACS のリソースのみを残してください。

```
/hacsfiles/sulparang-ambient/sulparang-ambient.js
```

更新は HACS からダウンロードし、ブラウザーを再読み込みします。削除時はダッシュボードのカードと HACS のダウンロードを削除します。

## ZIP で手動インストール


Home Assistant の管理者アカウントと設定フォルダーへのアクセスが必要です。Web Audio 対応の Chrome、Edge、Firefox、Safari などを使用してください。

## 1. ダウンロードと展開

ZIP を展開し、sulparang-ambient 内の JavaScript と MP3 ファイルを一緒に保持します。

## 2. Home Assistant にコピー

Samba や Studio Code Server などでフォルダー全体を下記にコピー。www がなければ作成し、初めて作成した場合は Home Assistant を再起動します。Container では設定ボリュームの www を使います。

```
/config/www/sulparang-ambient/
  sulparang-ambient.js
  rain.mp3
  fire.mp3
```

## 3. リソースを登録

プロフィールで詳細モードを有効にし、設定 → ダッシュボード → 右上メニュー → リソースを開きます。下記 URL を追加し、JavaScript モジュールを選びます。

```
/local/sulparang-ambient/sulparang-ambient.js?v=0.1.2
```

## 4. カードを追加

ダッシュボードを編集 → カードを追加 → 手動で下記を貼り付けて保存。language は ko、en、zh、es、ja から選択できます。

```
type: custom:sulparang-ambient
language: ja
```

## 5. 再読み込みして再生

ページを再読み込みし、音のアイコンを押します。もう一度押すと停止。複数を選ぶと同時に再生します。出力先は現在のブラウザーのスピーカーです。

## 6. 更新と削除

更新前に旧フォルダーをバックアップし、ファイルを置換してリソース URL のバージョンを変更後、再読み込みします。削除時はカードとリソースを外してからフォルダーを削除します。

## FAQ

### カードが見つかりません。

リソース URL と JavaScript モジュールの指定を確認。ログイン済みブラウザーで /local/sulparang-ambient/sulparang-ambient.js を開き、強制再読み込みしてください。

### 音が出ません。

音量、タブのミュート、出力先を確認。MP3 ファイルは JavaScript と同じフォルダーに必要です。初回のクリックで音声が許可される場合があります。

### 別のスピーカーを操作できますか？

無料版は操作中のブラウザーで再生します。遠隔スピーカー、ラジオ、定時チャイム、システム監視は含みません。
