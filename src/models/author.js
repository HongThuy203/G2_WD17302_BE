import mongoose from "mongose"
const authorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    products: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }],

},
    { timestamps: true, versionKey: false }
)
export default mongoose.model("Author", authorSchema);