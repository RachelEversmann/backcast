var VideoPlayerView = Backbone.View.extend({

  model: Video,

  initialize: function() {
    this.collection.on('change:selectVal', this.render, this);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
