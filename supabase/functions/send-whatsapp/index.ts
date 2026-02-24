import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

// CORS headers para permitir requisições do seu site
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  // Responder para requisições OPTIONS (preflight do navegador)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const pedido = await req.json();

    const token = Deno.env.get("WHATSAPP_TOKEN");
    const phoneId = Deno.env.get("WHATSAPP_PHONE_ID");

    if (!token || !phoneId) {
      return new Response(JSON.stringify({ error: 'WhatsApp credentials not configured' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Validações básicas
    if (!pedido || !pedido.telefone) {
      return new Response(JSON.stringify({ error: 'telefone ausente no payload' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Use the texto_whatsapp if provided by the frontend; otherwise build a simple message
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
      return new Response(JSON.stringify({ error: 'Erro ao enviar WhatsApp', status: resposta.status, details: respJson || respText }), { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ success: true, result: respJson }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  } catch (erro) {
    console.error('Erro na Edge Function send-whatsapp:', erro);
    return new Response(JSON.stringify({ error: erro.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
