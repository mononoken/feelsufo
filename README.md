# feelsufo

Simple personal portfolio site built with Astro.

## Development

This project uses `pnpm`.

```sh
pnpm install
pnpm dev
```

Useful commands:

```sh
pnpm build
pnpm preview
```

## Deploy

GitHub Pages deploys automatically from `.github/workflows/deploy.yml` when changes are pushed to `main`. The workflow installs with `pnpm`, builds the Astro site, uploads `dist`, and deploys it with `actions/deploy-pages`.
