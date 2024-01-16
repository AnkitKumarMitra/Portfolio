import express from "express";
import bodyParser from "body-parser";
import sgMail from "@sendgrid/mail";
import cors from "cors";
import env from "dotenv";

env.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/contact", async (req, res) => {
    const msg = {
        to: 'mitraankit12@gmail.com',
        from: 'portfolio26548@gmail.com',
        subject: 'An Email From you Portfolio Came!',
        text: `Email: ${req.body.email}\nSubject: ${req.body.subject}\nBody:\n${req.body.message}`
    };
    console.log(msg);
    try {
        await sgMail.send(msg);
        res.render("index.ejs", { msg: 'Message Sent.'})
    } catch (e) {
        console.error(e);
        if (e.response) {
            console.error(e.response.body)
        }
        res.render("index.ejs", { msg: 'Message not Sent.'})
    }
    
});

app.listen(port, () => {
    console.log(`Server Running at localhost:${port}`);
});
