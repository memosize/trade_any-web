import * as mongoose from "mongoose";
const DB_URL = "mongodb://localgost:27017/tradeAny";
mongoose.connect(DB_URL);
interface oo {
  getModel:(name:string)=>mongoose.Schema()
}
const models = {
  user: {
    username: { type: String, require: true },
    password: { type: String, require: true },
    type: { type: Number, require: true },
    nickname: { type: String, require: true }
  }
};
for (let m in models) {
  let schema = new mongoose.Schema(models[m])
  mongoose.model(m, schema));
}

module.exports = {
  getModel: function(name: string) {
    return mongoose.model(name);
  }
};
