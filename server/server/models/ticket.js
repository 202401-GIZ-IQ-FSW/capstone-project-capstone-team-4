const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    updated: { type: Date },
    deleted: { type: Boolean, default: false, required: true, index: true },
    submitter: { type: String },
    status: {
      type: String,
      enum: ["done", "working", "not started"],
      default: "Rather not to say",
    },
    subject: { type: String, required: true },
    issue: { type: String, required: true },
    closedDate: { type: Date },
    dueDate: { type: Date },
    // comments: [commentSchema],
    // notes: [noteSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ticket", ticketSchema);
