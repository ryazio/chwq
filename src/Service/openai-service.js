import { axiosInstance } from "@/axiosSetup";

export const openAIService = {
  sendPrompt: async (userCode, question) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const payload = {
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an assistant that evaluates whether a Python program correctly solves a given coding puzzle. 
          Respond only with "true" if the program is correct and "false" if it is not. Do not provide any additional explanation. 
          The puzzle is: '${question}`,
        },
        {
          role: "user",
          content: `\`\`\`python\n${userCode}\n\`\`\``,
        },
      ],
    };

    try {
      const response = await axiosInstance.post(url, payload);
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error communicating with OpenAI:", error);
      return null;
    }
  },
};
