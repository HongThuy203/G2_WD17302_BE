import mongoose from "mongose"
const categorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    products: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }]
},
    { timestamps: true, versionKey: false }
)
export default mongoose.model("Category", categorySchema);