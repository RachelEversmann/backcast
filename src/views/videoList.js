var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$el.children().detach();
    var context = this;
    this.collection.each(function(video){
      var videoEntry = new VideoListEntryView({model: video});
      context.$el.append(videoEntry.render().el);
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
