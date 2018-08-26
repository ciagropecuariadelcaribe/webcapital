import Component from '@ember/component';

export default Component.extend({
  didRender() {
    var element = document.getElementById('Video');
    element.muted = "muted";
  },

  actions: {
    openVideo() {
      var section = document.getElementById('Video_Section');
      var content = document.getElementById('Video_Content');
      var video = document.getElementById('Video');
      var closebutton = document.getElementById('CloseButton');

      content.style.display = 'none';
      section.style.overflow = 'auto';
      section.style.maxHeight = 'none';
      video.setAttribute("controls", "controls");
      video.removeAttribute("muted");
      video.currentTime = 0;
      closebutton.style.visibility = "visible";
    },

    closeVideo() {
      var section = document.getElementById('Video_Section');
      var content = document.getElementById('Video_Content');
      var video = document.getElementById('Video');
      var closebutton = document.getElementById('CloseButton');

      closebutton.style.visibility = "hidden";
      content.style.display = 'block';
      section.style.overflow = 'hidden';
      section.style.maxHeight = '580px';
      video.removeAttribute("controls", "controls");
      video.setAttribute("muted");
      video.currentTime = 0;

    }
  }
});
