var AppView = Backbone.View.extend({

  el: '#app',

  model: Video,

  initialize: function() {
    this.videos = new Videos(fakeVideoData);
    this.render();
    this.player = new VideoPlayerView({collection: this.videos});
    this.videoList = new VideoListView({el: this.$('.list'), collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template());
    this.videoList.render(); 
    // this.$el.append(this.videoList.$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
