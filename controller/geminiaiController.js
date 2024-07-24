const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const prompt = `Summarise this ${text}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    if (summary) {
      return res.status(200).json(summary);
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      messages: err.message,
    });
  }
};
exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const prompt = `write a pragraph about ${text}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    if (summary) {
      return res.status(200).json(summary);
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      messages: err.message,
    });
  }
};

exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const prompt = `You are a chatbot answer the questions or anything from below \n${text}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    if (summary) {
      return res.status(200).json(summary);
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      messages: err.message,
    });
  }
};

exports.jscodeController = async (req, res) => {
  try {
    const { text } = req.body;
    const prompt = `write javascript code for \n ${text}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    if (summary) {
      return res.status(200).json(summary);
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      messages: err.message,
    });
  }
};

exports.scifyimageController = async (req, res) => {
  try {
    const { text } = req.body;
    const prompt = `Generate an scify image of ${text}`;
    const result = await model.generateImage(prompt);
    const response = await result.response;
    const image = response.text();

    if (image) {
      return res.status(200).json({ image });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      messages: err.message,
    });
  }
};
