# Deploy da loja BrazHits na Hostinger

O workflow publica automaticamente o conteúdo estático no endereço `/loja/` após cada push na branch `main`.

## Secrets obrigatórias

Configure em **Settings → Secrets and variables → Actions → Repository secrets**:

- `HOSTINGER_FTP_SERVER`
- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`
- `FTP_SERVER_DIR`

O valor de `FTP_SERVER_DIR` deve apontar exatamente para a pasta da loja no FTP, normalmente `/public_html/loja/` ou `/loja/`, conforme a raiz exibida pela conta FTP da Hostinger.

Nenhuma Repository Variable é necessária. O caminho público `/loja` já está definido no workflow.
