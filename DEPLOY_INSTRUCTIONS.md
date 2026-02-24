# 🚀 INSTRUÇÕES PARA DEPLOY DA EDGE FUNCTION

O Supabase CLI não está instalado no seu PC. Sem problema! Você pode fazer o deploy direto pelo painel do Supabase em 3 minutos.

---

## ✅ SOLUÇÃO 1: Deploy via Painel Supabase (RECOMENDADO)

### Passo 1: Acesse o Painel Supabase
1. Abra https://app.supabase.com
2. Login com sua conta
3. Selecione seu projeto: **`mineiróloja`** (ou equivalente)

### Passo 2: Abra a Função
1. Clique em **Edge Functions** (menu esquerdo)
2. Procure **`send-whatsapp`**
3. Se não existir, clique **Create a new function** e crie com nome `send-whatsapp`

### Passo 3: Configure a Função para Aceitar Anon Key
1. Dentro da página da função, procure por **Settings** ou **Configuration**
2. Procure por uma opção tipo:
   - ✅ **"Verify JWT"** → DESMARQUE (desabilite)
   - OU
   - ✅ **"Require authentication"** → DESMARQUE

3. Se não encontrar, ignore este passo (alguns projetos não têm essa opção visível)

### Passo 4: Cole o Código Atualizado
1. Abra o código da função (na aba de edição no painel)
2. **Limpe todo o conteúdo**
3. Cole este código:

```typescript
import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const pedido = await req.json();

    const token = Deno.env.get("WHATSAPP_TOKEN");
    const phoneId = Deno.env.get("WHATSAPP_PHONE_ID");

    if (!token || !phoneId) {
      return new Response(JSON.stringify({ error: 'WhatsApp credentials not configured' }), { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      });
    }

    if (!pedido || !pedido.telefone) {
      return new Response(JSON.stringify({ error: 'telefone ausente no payload' }), { 
        status: 400, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      });
    }

    const bodyText = pedido.texto_whatsapp || (`Olá ${pedido.nome_cliente || ''}!\n\nRecebemos seu pedido ${pedido.pedido_id || ''}.\nEstamos processando e em breve enviaremos a confirmação.`).trim();

    const payload = {
      messaging_product: "whatsapp",
      to: pedido.telefone,
      type: "text",
      text: { body: bodyText }
    };

    const resposta = await fetch(`https://graph.facebook.com/v18.0/${phoneId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const respText = await resposta.text().catch(() => null);
    let respJson = null;
    try { respJson = respText ? JSON.parse(respText) : null; } catch (e) { respJson = respText; }

    if (!resposta.ok) {
      console.error('Erro WhatsApp API:', resposta.status, respJson || respText);
      return new Response(JSON.stringify({ error: 'Erro ao enviar WhatsApp', status: resposta.status, details: respJson || respText }), { 
        status: 502, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      });
    }

    return new Response(JSON.stringify({ success: true, result: respJson }), { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    });

  } catch (erro) {
    console.error('Erro na Edge Function send-whatsapp:', erro);
    return new Response(JSON.stringify({ error: erro.message }), { 
      status: 500, 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    });
  }
});
```

### Passo 5: Deploy
1. Clique em **Deploy** (botão verde)
2. Aguarde 10-20 segundos
3. Quando terminar, você verá um checkmark verde ✅

### Passo 6: Teste
1. Abra seu painel: http://localhost:8000/painel.html (ou seu site)
2. Faça login
3. Clique em **👨‍🍳 Preparando** em qualquer pedido
4. Abra **Console (F12)** → procure por ✅ ou ❌

---

## ✅ VERIFICAÇÃO: Confirme os Datos

Antes de testar, certifique-se de que:

✔️ **WHATSAPP_TOKEN** está configurado em Supabase → Settings → Secrets
✔️ **WHATSAPP_PHONE_ID** está configurado em Supabase → Settings → Secrets
✔️ Telefone do cliente está no formato: `5532984550411` (55 + DDD + número)
✔️ Seu número foi aprovado na Meta WhatsApp Business Platform

---

## 🔧 SOLUÇÃO 2: Se Quiser Usar CLI (Avançado)

Se preferir usar o Supabase CLI no terminal (mais rápido depois), instale assim:

Windows (PowerShell as Admin):
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install -g supabase
```

Depois:
```bash
cd c:\Users\Cliente\Desktop\CADS\paginas\food-web-conversion
supabase functions deploy send-whatsapp --no-verify-jwt
```

---

## ❓ Dúvidas?

Se receber erro 401 após o deploy:
- A função NÃO aceitou a chave anônima
- Solução: No painel Supabase, procure Settings da função e desabilite JWT verification

Se receber erro 502:
- A API do WhatsApp rejeitou a mensagem
- Verifique: Token válido? Phone ID correto? Telefone aprovado?

---

**Quando terminar, me mande uma screenshot do console (F12) mostrando se deu ✅ ou ❌!**
