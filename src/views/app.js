var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
  //  console.log('this.videos: ', this.videos);
    this.on('all', this.render, this);
  },


  render: function() {
    this.$el.html(this.template());
  //  console.log("render app view");
    return this;
  },

  template: templateURL('src/templates/app.html')

});
