var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('thumbnail', video.snippet.thumbnails.default.url);
  },

  select: function() {
    var val = this.cid;
    this.set('selectVal',val);
    this.trigger('select', this);
  }

});
