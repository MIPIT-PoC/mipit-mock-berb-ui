# mipit-mock-berb-ui

> Panel de control del mock BRE_B + frontend de simulación. Parte del PoC MiPIT
> ([overview en mipit-docs](https://github.com/MIPIT-PoC/mipit-docs)).

> **Nota de naming**: el repo se llama `mipit-mock-berb-ui` (typo histórico
> "berb" en lugar de "breb"), el package es `mock-breb`, y el código usa
> `BREB`/`BRE_B`. Es deuda de naming documentada en Audit 4 (D3-011).

## Propósito

Frontend Next.js 14 dedicado al riel **Bre-B (Colombia 🇨🇴, BanRep TR-002 GA 2025-10-06)**.
Mismo shape que `mipit-mock-pix-ui` y `mipit-mock-spei-ui` — 3 modos:

1. **Panel admin del mock** BRE_B.
2. **Simulación local** — `/api/simulate/breb` (atajo demo, NO pipeline ISO).
3. **Simulación internacional** — POST `/payments` al core (pipeline ISO real).

> ⚠️ El modo **Local** NO pasa por el pipeline ISO 20022.

## Puerto

| Entorno | URL |
|---|---|
| Docker compose | `http://localhost:3003` |
| Dev local | `npm run dev` → `http://localhost:3003` |
| Container interno | `:3000` |

## Endpoints que consume

| Endpoint | Quién lo expone | Auth |
|---|---|---|
| `GET/POST /admin/*` | mock-server BRE_B (`:9003`) | No |
| `POST /api/simulate/breb` | mock-server BRE_B (`:9003`) | No |
| `POST /auth/token`, `POST /payments`, `GET /payments/:id` | core (`:8080`) | Bearer JWT |

## Build args

```yaml
build:
  args:
    NEXT_PUBLIC_API_BASE_URL: http://localhost:8080
    NEXT_PUBLIC_ADAPTER_URL: http://localhost:9003
```

## Llaves Bre-B (BanRep TR-002 §4)

| Tipo | Formato | Ejemplo válido |
|---|---|---|
| Phone (mobile-only) | `+57` + `3` + 9 dígitos | `+573001234567` |
| NIT | 9-10 dígitos + DIAN check digit | `900123456-8` |
| Email | RFC 5321 light | `user@mipit.test` |
| ALIAS | `@xxx` 3-19 alphanum | `@helena.medellin` |
| CC | 6-10 dígitos | `12345678` |

## Cross-ref

- Plan maestro: `mipit-docs/audits/AUDITORIA-4-2026-05-20.md`
- Demo script: `mipit-docs/demo-runbook/defense-script-10min.md`
- Limitaciones: `mipit-docs/LIMITATIONS.md` §14
