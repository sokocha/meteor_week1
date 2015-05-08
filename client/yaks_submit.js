Template.yaksSubmit.events({
  'submit .yaksSubmitForm': function (event) {
    event.preventDefault();

    var yak = event.target.yak.value;

    if (yak == "") {
      alert("you can't insert an empty yak");
    } else {
      Meteor.call('yakInsert', yak);
      Router.go('yaksList')
    }
  }
});