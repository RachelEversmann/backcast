var VideoListEntryView = Backbone.View.extend({


  model: Video,

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function(e) {
    console.log("e",e);
    this.model.select();
  },

  initialize: function() {
    this.on('click', this.model.select, this);
    //console.log('init videolistentryview');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //console.log('render',this.model.attributes);
  //  console.log('render in videolistentryview');
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
