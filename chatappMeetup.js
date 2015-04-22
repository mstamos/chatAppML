Messages = new Meteor.Collection("messages");

if (Meteor.isClient) {

  Template.displayMessages.helpers({
    messagesInCursor: function () {
      return Messages.find();
    }
  })

  Template.inputMessage.events({
    'click .send-message': function (events) {
      events.preventDefault();
      var usersText = $(".write-text").val();
      Messages.insert({
        msg: usersText,
        date: moment().format('hh:ss',new Date())
      });
      $(".write-text").val("");
    } 
  })

}

