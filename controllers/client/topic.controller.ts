import { Request, Response } from "express";
import Topic from "../../models/topic.model";

export const index = async (req: Request, res: Response) => {
  try {
    const topics = await Topic.find({ deleted: false });
    console.log(topics);
    res.render("client/pages/topics/index", {
      pageTitle: "Chủ đề bài hát",
      topics: topics,
    });
  } catch (error) {
    console.error("Error fetching topics:", error);
    res.status(500).send("Internal Server Error");
  }
};
