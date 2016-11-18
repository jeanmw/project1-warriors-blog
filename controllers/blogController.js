var db = require('../models');


function index(req, res) {
    db.Blog.find({})
        .populate('blogPoster')
        .exec(function(err, success) {
            res.json(success);
        });
}

//   function(err, blog){
//     if (err) {
//       return console.log(err);
//     }
//
//     res.json(blog);
//   });
// }

function destroy(req, res) {

  db.Blog.findOneAndRemove({ _id: req.params.blogId }, function(err, foundBlog){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundBlog);
  });
}

function show(req, res) {
  db.Blog.findById(req.params.blogId, function(err, foundBlog) {
    if(err) { console.log('blogController.show error', err); }
    console.log('blogController.show responding with', foundBlog);
    res.json(foundBlog);
  });
}






module.exports = {
    index: index,
    // create: create,
    show: show,
    destroy: destroy,
    // update: update
};
