Template.commentSubmit.events({
  'submit .comment-form form': function(event, template) {
    event.preventDefault();
    var $body = $(event.target).find('[name=body]');
    var comment = {
      body: $body.val(),
      postId: template.data._id,
      submitted: new Date()
    };
    var commentBody = body.val();
    // Check if the comment is not empty
    if (commentBody == "") {
      alert("You can’t insert empty comment. Try to comment something nice instead.")
    } else {
      Meteor.call('commentInsert', comment);
    }
    // clear input field
    e.target.body.value = "";
  }
});






