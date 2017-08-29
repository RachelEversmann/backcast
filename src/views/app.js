var AppView = Backbone.View.extend({

  el: '#app',

  model: Video,

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
    return this;
  },



  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos,
      model: this.model
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos,
      model: this.videos.at(0)
    }).render();

    new SearchView({
      el: this.$('.search')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
