# nextjs-approute-sample-ts

## 概要

Next.jsのAppRouterがよく分からないので、様々なところから参考にしたサンプルのごった煮です。

## 初期インストール

Next.JSをTypeScriptで初期セットアップ
フォルダを作ってそのフォルダでコマンド実行。

```bash
npx create-next-app@latest --ts .
```

設定は全てYes

```bash
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... Yes
√ Would you like to use `src/` directory? ... Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias? ... Yes
√ What import alias would you like configured? ... @/*
```

## launch.json の設定

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Next.js: フルスタックでのデバッグ",
            "type": "node-terminal",
            "request": "launch",
            "command": "npm run dev",
            "serverReadyAction": {
                "pattern": "started server on .+, url: (https?://.+)",
                "uriFormat": "%s",
                "action": "debugWithChrome"
            }
        }
    ]
}
```

デバッグ設定
<https://nextjs.org/docs/pages/building-your-application/configuring/debugging>

## blog機能用

mdファイルから読み取るために必要なライブラリ（blog機能用）

```bash
npm install --save gray-matter
npm install --save raw-loader
npm install react-markdown
```

next.config.jsを変更します。

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;

```

<https://learn.microsoft.com/ja-jp/azure/static-web-apps/deploy-nextjs-hybrid>

## 必要なファイル

ローカル環境変数ファイル:  
.env.local

```env:
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## サンプルファイル出典元

- <https://monotein.com/books/nextjs-book-version-13>
- <https://codezine.jp/article/detail/17925>

※ TypeScript化とフォルダ構成の変更は行なっています

## 以下、初期Readme内容

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
