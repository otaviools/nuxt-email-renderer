import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { emailUsuario, userName } = body;

  if (!emailUsuario) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Email é obrigatório",
    });
  }

  const config = useRuntimeConfig();

  try {
    const result = await renderEmailComponent("WelcomeEmail", {
      userName: userName || "Usuário",
    });

    const html = typeof result === "string" ? result : result.html;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: config.emailUser,
        pass: config.emailPassword,
      },
    });

    const info = await transporter.sendMail({
      from: config.emailUser,
      to: emailUsuario,
      subject: "Bem-vindo ao Nuxt Email Renderer",
      html,
    });

    return { success: true, message: info.response };
  } catch (error: any) {
    console.error("ERRO DETALHADO:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Erro ao enviar email: " + error.message,
    });
  }
});
