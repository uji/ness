# ness-spa

## Dockerでの環境構築
1. docker コマンドを使えるようにする [公式ドキュメント](https://docs.docker.com/get-docker/)
2. githubのアクセストークンを取得
```
https://github.com/settings/tokens にアクセスして token を生成する。
scopes は repo, read:packages にチェックを入れる
```
3. 環境変数に GITHUB_TOKEN、 GITHUB_USER_NAME、GITHUB_EMAIL を設定する

`.zshrc` などに登録しておくと良い。アクセストークンは公開しないよう注意する

```
echo "export GITHUB_TOKEN=token" >> ~/.zshrc
echo "export GITHUB_USER_NAME=name" >> ~/.zshrc
echo "export GITHUB_EMAIL=email" >> ~/.zshrc
```
4. ボリューム、コンテナを作成する

```
make init
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints files
```
yarn lint
```

### Lints and fixes files
```
yarn fmt
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
