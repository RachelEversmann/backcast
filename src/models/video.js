var Video = Backbone.Model.extend({

  defaults: {
    selectVal: ''
  },

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  //  console.log('video: ',video);
  },

  select: function() {
    var val = this.cid;
    this.set('selectVal',val);
    var test = this.get('selectVal');
    console.log("in select",test);
    this.trigger('select', this);
  }

});
