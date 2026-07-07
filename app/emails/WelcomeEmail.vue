<script setup lang="ts">
interface Props {
  userName: string;
  confirmationUrl: string;
}

withDefaults(defineProps<Props>(), {
  confirmationUrl: "https://devotaviosantos.vercel.app",
});
</script>

<template>
  <EHtml lang="pt-BR">
    <EHead />
    <EFont
      font-family="Inter"
      :fallback-font-family="['Arial', 'sans-serif']"
      :web-font="{
        url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700',
        format: 'woff2',
      }"
    />
    <EStyle>
      body { margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; }
      .header { width: 100%; padding: 16px; padding-bottom: 40px; color:
      #ffffff; border-radius: 10px 10px 0 0; text-align: center; } .logo-wrapper
      { text-align: center; margin-top: -30px; margin-left: 20px; } .logo-img {
      border-radius: 50%; padding: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0,
      0.15); } .content { padding: 24px 32px; text-align: center; } .subtitle {
      font-size: 16px; color: #444444; line-height: 1.5; margin-bottom: 24px; }
      .footer { padding: 24px 32px; text-align: center; } .footer-text {
      font-size: 12px; color: #999999; line-height: 1.5; } .divider { border:
      none; border-top: 1px solid #eeeeee; margin: 24px 0; }
    </EStyle>
    <EBody>
      <EContainer
        style="
          max-width: 480px;
          margin: 40px auto;
          border-radius: 10px;
          overflow: hidden;
        "
      >
        <div class="header">
          <EHeading
            style="margin: 0; font-size: 22px; margin-top: 20px; color: #111111"
            >Olá, {{ userName }}! 👋</EHeading
          >
        </div>

        <div class="content">
          <EText class="subtitle">
            Estou muito feliz em ter você por aqui. Daqui a pouco entrarei em
            contato com você para que possamos conversar melhor. Enquanto isso,
            você pode acessar meu portfolio clicando no botão abaixo.
          </EText>

          <EButton
            :href="confirmationUrl"
            style="
              background-color: #121212;
              color: #ffffff;
              padding: 12px 28px;
              border-radius: 6px;
              font-size: 15px;
              font-weight: 600;
              text-decoration: none;
              display: inline-block;
            "
          >
            Acessar plataforma
          </EButton>

          <EHr class="divider" />

          <EText style="font-size: 14px; color: #666666">
            Se você não entrou em contato, pode ignorar este email com
            segurança.
          </EText>
        </div>

        <div class="footer">
          <EText class="footer-text">
            © {{ new Date().getFullYear() }} Otávio Santos. Todos os direitos
            reservados.
          </EText>
        </div>
      </EContainer>
    </EBody>
  </EHtml>
</template>
