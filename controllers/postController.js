const res = require('express/lib/response');
const Post = require('../model/postModel');

exports.getAllPosts = async(req, res, next) => {
    try {
        const [posts, _] = await Post.findAll();

        res.status(200).json({count: posts.length, posts});

    }
    catch(err){
        next(err);
    }
};

exports.createPost = async(req, res, next) => {
    try{
        let {title, body} = req.body;
        let post = new Post(title, body);

        post = await post.save();
        res.status(200).json({ message: "Post created"});
    }
    catch(err){
        next(err);
    }
}

exports.getPostbyId = async(req, res, next) => {
    try {
        let postId = req.params.id;

        let [post, _] = await Post.findById(postId);

        res.status(200).json({post : post[0]});
    }
    catch(err){
        throw(err);
    }
};