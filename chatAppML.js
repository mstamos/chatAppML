Messages = new Meteor.Collection("messages");

if (Meteor.isClient) {
  Template.messages.helpers({
    messages: function () {
      return Messages.find();
    }
  });

  Template.messageInput.events({
    "click .send-message": function (events) {
      events.preventDefault();
      Messages.insert({message:$(".input-message").val()});
      $(".input-message").val("");
    }
  })
}
