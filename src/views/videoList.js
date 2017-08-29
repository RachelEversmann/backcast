var VideoListView = Backbone.View.extend({


  initialize: function() {
    this.collection.on('all',this.render,this);
  },


  render: function() {
    var context = this;
    this.$el.children().detach();
    this.collection.each(function(video){
      var videoEntry = new VideoListEntryView();
      videoEntry.render();
    });
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
