import { Request, Response } from "express";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";
import Topic from "../../models/topic.model";

// GET /songs/:slugTopic
export const list = async (req: Request, res: Response) => {
  try {
    const topic = await Topic.findOne({
      slug: req.params.slugTopic,
      status: "active",
      deleted: false,
    });

    if (!topic) {
      return res.render("client/pages/songs/list", {
        pageTitle: "Danh sách bài hát",
        songs: [],
      });
    }

    const songs = await Song.find({
      topicId: topic._id,
      status: "active",
      deleted: false,
    })
      .select("avatar title slug singerId like")
      .populate({
        path: "singerId",
        model: Singer,
        select: "fullName",
        match: {
          status: "active",
          deleted: false,
        },
      })
      .lean();

    res.render("client/pages/songs/list", {
      pageTitle: topic.title,
      songs: songs,
    });
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).send("Internal Server Error");
  }
};

// GET /songs/detail/:slugSong
export const detail = async (req: Request, res: Response) => {
  try {
    const slugSong: string = (req.params.slugSong as string) || "";

    const song = await Song.findOne({
      slug: slugSong,
      status: "active",
      deleted: false,
    });

    const singer = await Singer.findOne({
      _id: song?.singerId,
      deleted: false,
    }).select("fullName");

    const topic = await Topic.findOne({
      _id: song?.topicId,
      deleted: false,
    }).select("title");
    console.log("Song found:", song);
    res.render("client/pages/songs/detail", {
      pageTitle: "Chi tiết bài hát",
      song: song,
      singer: singer,
      topic: topic,
    });
  } catch (error) {
    console.error("Error fetching song:", error);
    res.status(500).send("Internal Server Error");
  }
};
