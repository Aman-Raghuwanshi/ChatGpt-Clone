const dotenv = require("dotenv");
dotenv.config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_SECRET,
});

exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.chat.completions.create({
      messages: [{ role: "system", content: `Summarise This \n${text}` }],
      model: "gpt-4o-mini",
    });
    if (data) {
      if (data.choices[0].message) {
        return res.status(200).json(data.choices[0].message);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      messages: err.message,
    });
  }
};
