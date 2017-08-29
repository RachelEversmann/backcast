var VideoPlayerView = Backbone.View.extend({

  model: Video,

  // playerCurrent: '',
  //
  // events: {
  //   'click .video-list-entry-title': 'handleClick'
  // },
  //
  // handleClick: function(e) {
  //   this.model.set('selectVal',e);
  //   this.model.select();
  // },

  initialize: function() {
    this.collection.on('change:selectVal', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
