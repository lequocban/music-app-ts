import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: String,
    avatar: String,
    description: String,
    singerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Singer",
    },
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
    },
    like: Number,
    lyrics: String,
    audio: String,
    status: String,
    slug: String,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  },
);
const Song = mongoose.model("Song", songSchema, "songs");

export default Song;
