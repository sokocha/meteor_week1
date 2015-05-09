Template.yakPage.helpers({
  comments: function(){
    return Comments.find({post_id: this._id})
  }
});