import dotenv from "dotenv";
import joi from "joi";
import Product from "../models/product";
import Author from "../models/author";

dotenv.config();

const authorSchema = joi.object({
    name: joi.string().required(),
});

export const getAll = async (req, res) => {
    try {
        const authors = await Author.find({});
        if (!authors) {
            return res.json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.json({
            message: "Lấy sản phẩm thành công",
            authors,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const get = async (req, res) => {
    try {
        const authors = await Author.findById(req.params.id).populate("authors");
        if (!authors) {
            return res.json({
                message: "Không tìm thấy danh mục",
            });
        }
        return res.json(authors);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const create = async (req, res) => {
    try {
        // validate
        const { error } = authorSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const authors = await Author.create(req.body);
        if (!authors) {
            return res.json({
                message: "Thêm danh mục không thành công",
            });
        }
        return res.json({
            message: "Thêm danh mục thành công",
            authors,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const update = async (req, res) => {
    try {
        const authors = await Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!authors) {
            return res.json({
                message: "Cập nhật sản phẩm không thành công",
            });
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            authors,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const authors = await Author.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa sản phẩm thành công",
            authors,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};