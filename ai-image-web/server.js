import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const HF_API_KEY = "MASUKKAN_API_KEY_KAMU";

app.post("/generate", async (req, res) => {
  try {
      const response = await fetch(
            "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
                  {
                          method: "POST",
                                  headers: {
                                            "Authorization": `Bearer ${HF_API_KEY}`,
                                                      "Content-Type": "application/json",
                                                              },
                                                                      body: JSON.stringify({
                                                                                inputs: req.body.prompt,
                                                                                        }),
                                                                                              }
                                                                                                  );

                                                                                                      const buffer = await response.arrayBuffer();
                                                                                                          res.set("Content-Type", "image/png");
                                                                                                              res.send(Buffer.from(buffer));
                                                                                                                } catch (error) {
                                                                                                                    res.status(500).json({ error: error.message });
                                                                                                                      }
                                                                                                                      });

                                                                                                                      app.listen(3000, () => {
                                                                                                                        console.log("Server jalan di http://localhost:3000");
                                                                                                                        });