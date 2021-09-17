import nodemailer from 'nodemailer';


const sendEmail = async (req, res) => {
  try {
    const { email, name } = req.query;
    const mailoptions = {
      from: 'mondal@mail.com',
      to: email,
      subject: '𝓬𝓾𝓲𝓼𝓲𝓷𝓮 🍽️🍔🥘🍽️',
      html: `
      <div><center>
      <p style="font-size: 28px;">Hi<b> ${name}</b></p>
      <h3>Thanks for reaching to us!</h3>
      <p>Here are some new recipes you could checkout</p>
      <a href="http://localhost:3000/recipe">
      <button style="padding: 20px; background-color: orange; border-radius: 8px; border: none; color: white;">
       Check Here </button>
      </a>
      </center></div>
      `,
    };
    const sendMail = await nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: "debarshimondal121@gmail.com",
        pass: "rjcejybjzeaumfri"
      }
    }).sendMail(mailoptions);
    res.status(200).json({
      sendMail
    });
  } catch (error) {
    res.send(error);
  }
}

export default sendEmail;


