import mongoose from "mongose"
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        price: {
            type: Number
        },
        image: {
            type: String
        },
        content: {
            type: String
        },
        description: {
            type: String
        },
        cate_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        author_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        },
    },
    { timestamps: true, versionKey: false }
)
export default mongoose.model("comicProduct", productSchema)