# ness

## Dockerでの環境構築
1. docker コマンドを使えるようにする [公式ドキュメント](https://docs.docker.com/get-docker/)
2. githubのアクセストークンを取得
```
https://github.com/settings/tokens にアクセスして token を生成する。
scopes は repo, read:packages にチェックを入れる
```
3. .env ファイルの作成
`.env.sample` をコピーして `.env` を作成する
```
cp .env.sample .env
```
`.env` のGITHUB_TOKEN、 GITHUB_USER_NAME、GITHUB_EMAIL に値を登録する
アクセストークンは公開しないよう注意する
4. ボリューム、コンテナを作成する
```
make init
```
