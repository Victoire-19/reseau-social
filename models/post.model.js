const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        posterId:{
            type: String,
            require: true
        },
        message: {
            type: String,
            trim: true,
            maxlength: 500
        },
        picture: {
            type: String,
        },
        video: {
            type: String
        },
        likers: {
            type: [String],
            require: true
        },
        comments: {
            type: [
                {
                    commenterId: String,
                    commenterPseudo: String,
                    text: String,
                    timestamp: Number
                }      
            ],
            require: true
        },
        
    },
    {
        timestamps: true
    }
);


const PostModel= mongoose.model('post', PostSchema);
module.exports = PostModel;