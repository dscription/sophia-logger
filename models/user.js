var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: String,
    googleId: String,
    curiosities: [{ type: Schema.Types.ObjectId, ref: "Curiosity" }],
  },
  {
    timestamps: true,
  }
);

let autoPopulateCuriosities = function (next) {
  this.populate("curiosities");
  next();
};

userSchema
  .pre("findOne", autoPopulateCuriosities)
  .pre("find", autoPopulateCuriosities);

module.exports = mongoose.model("User", userSchema);
