var VideoPlayerView = Backbone.View.extend({

  model: Video,

  initialize: function() {
    console.log('init: ', )
    this.on('change:selectVal', this.render, this);
  },

  events: {
    'click': 'handleClick'
  },

  handleClick: function(e) {
    this.model.select();
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
