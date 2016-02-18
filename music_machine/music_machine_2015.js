
//This code is for everyone. Could go in common.js
MusicMachine = new Mongo.Collection("musicMachine");


if (Meteor.isClient) {

  Meteor.startup(function () {

});


  Template.playground.helpers({

    "startdac": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.start==1) {
          playAll();
		  } else if(starter.start==0){
			  stopAll();
		  }
      }

      return Session.get('startdac');
    },

    "drums": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.drums==1) {
          playDrums();

        } else if (starter.drums==0) {

          stopDrums();

        }
      }

      return Session.get('drums');
    },

    "bass": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassline==1) {
          playBass();

        } else if (starter.bassline==0) {

          stopBass();

        }
      }
      return Session.get('bass');
    },

    "arp": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.arp==1) {
          playArp();

        } else if (starter.arp==0) {

          stopArp();

        }
      }
      return Session.get('arp');
    },

    "bassdrum1": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassdrum1==1) {
          playbassdrum1();

        } else if (starter.bassdrum1==0) {

          stopbassdrum1();

        }
      }
      return Session.get('bassdrum1');
    },

    "cymbal1": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.cymbal1==1) {
          playcymbal1();

        } else if (starter.cymbal1==0) {

          stopcymbal1();

        }
      }
      return Session.get('cymbal1');
    },

    "hihat2": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.hihat2==1) {
          playhihat2();

        } else if (starter.hihat2==0) {

          stophihat2();

        }
      }
      return Session.get('hihat2');
    },

    "snaredrum1": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.snaredrum1==1) {
          playsnaredrum1();

        } else if (starter.snaredrum1==0) {

          stopsnaredrum1();

        }
      }
      return Session.get('snaredrum1');
    },

    "shake": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.shake==1) {
          playshake();

        } else if (starter.shake==0) {

          stopshake();

        }
      }
      return Session.get('shake');
    },

   

    //don't forget the commas between each function
//the last one doesn't have to have one!


  "sliderVal11":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider11').data('uiSlider').value(slider.slide11);
        setSpeed1(slider.slide11/50);
        return slider.slide11;
      }
    },
	
  "sliderVal12":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider12').data('uiSlider').value(slider.slide12);
        setVolume1(slider.slide12/50);
        return slider.slide12;
      }
    },
	
  "sliderVal21":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider21').data('uiSlider').value(slider.slide21);
        setSpeed2(slider.slide21/50);
        return slider.slide21;
      }
    },
	
  "sliderVal22":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider22').data('uiSlider').value(slider.slide22);
        setVolume2(slider.slide22/50);
        return slider.slide22;
      }
    },
	
  "sliderVal31":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider31').data('uiSlider').value(slider.slide31);
        setSpeed3(slider.slide31/50);
        return slider.slide31;
      }
    },
	
  "sliderVal32":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider32').data('uiSlider').value(slider.slide32);
        setVolume3(slider.slide32/50);
        return slider.slide32;
      }
    },
	
  "sliderVal41":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider41').data('uiSlider').value(slider.slide41);
        setSpeed4(slider.slide41/50);
        return slider.slide41;
      }
    },
	
  "sliderVal42":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider42').data('uiSlider').value(slider.slide42);
        setVolume4(slider.slide42/50);
        return slider.slide42;
      }
    },
  "sliderVal51":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider51').data('uiSlider').value(slider.slide51);
        setSpeed5(slider.slide51/50);
        return slider.slide51;
      }
    },
	
  "sliderVal52":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider52').data('uiSlider').value(slider.slide52);
        setVolume5(slider.slide52/50);
        return slider.slide52;
      }
    },
	
  "sliderVal61":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider61').data('uiSlider').value(slider.slide61);
        setSpeed6(slider.slide61/50);
        return slider.slide61;
      }
    },
	
  "sliderVal62":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider62').data('uiSlider').value(slider.slide62);
        setVolume6(slider.slide62/50);
        return slider.slide62;
      }
    },
	
  "sliderVal71":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider71').data('uiSlider').value(slider.slide71);
        setSpeed7(slider.slide71/50);
        return slider.slide71;
      }
    },
	
  "sliderVal72":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider72').data('uiSlider').value(slider.slide72);
        setVolume7(slider.slide72/50);
        return slider.slide72;
      }
    },
	
  "sliderVal81":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider81').data('uiSlider').value(slider.slide81);
        setSpeed8(slider.slide81/50);
        return slider.slide81;
      }
    },
	
  "sliderVal82":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider82').data('uiSlider').value(slider.slide82);
        setVolume8(slider.slide82/50);
        return slider.slide82;
      }
    }

  });


  Template.playground.events({

     "click button.startButton": function () {
      Session.set('startdac', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {start: 1}});
    },
	 "click button.stopButton": function () {
      Session.set('startdac', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {start: 0}});
    },
     "click button.myButton1": function () {
      Session.set('drums', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 1}});

    },
      "click button.myButton2": function () {
      Session.set('drums', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 0}});
    },

      "click button.myButton3": function () {
      Session.set('bass', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 1}});

    },

      "click button.myButton4": function () {
      Session.set('bass', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 0}});

    },
      "click button.myButton5": function () {
      Session.set('arp', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 1}});

    },

      "click button.myButton6": function () {
      Session.set('arp', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 0}});

    },

     "click button.myButton7": function () {
      Session.set('bassdrum1', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassdrum1: 1}});

    },
      "click button.myButton8": function () {
      Session.set('bassdrum1', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassdrum1: 0}});
    },

      "click button.myButton9": function () {
      Session.set('cymbal1', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {cymbal1: 1}});

    },

      "click button.myButton10": function () {
      Session.set('cymbal1', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {cymbal1: 0}});

    },
      "click button.myButton11": function () {
      Session.set('hihat2', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {hihat2: 1}});

    },

      "click button.myButton12": function () {
      Session.set('hihat2', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {hihat2: 0}});

    },

     "click button.myButton13": function () {
      Session.set('snaredrum1', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {snaredrum1: 1}});

    },
      "click button.myButton14": function () {
      Session.set('snaredrum1', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {snaredrum1: 0}});
    },

      "click button.myButton15": function () {
      Session.set('shake', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {shake: 1}});

    },

      "click button.myButton16": function () {
      Session.set('shake', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {shake: 0}});

    }

  });

  Template.playground.onRendered(function() {
    $('h2').hide();
    var handler11 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide11: ui.value}});
    }, 50, { leading: false });
    var handler12 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide12: ui.value}});
    }, 50, { leading: false });
    var handler21 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide21: ui.value}});
    }, 50, { leading: false });
    var handler22 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide22: ui.value}});
    }, 50, { leading: false });
    var handler31 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide31: ui.value}});
    }, 50, { leading: false });
    var handler32 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide32: ui.value}});
    }, 50, { leading: false });
    var handler41 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide41: ui.value}});
    }, 50, { leading: false });
    var handler42 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide42: ui.value}});
    }, 50, { leading: false });
    var handler51 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide51: ui.value}});
    }, 50, { leading: false });
    var handler52 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide52: ui.value}});
    }, 50, { leading: false });
    var handler61 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide61: ui.value}});
    }, 50, { leading: false });
    var handler62 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide62: ui.value}});
    }, 50, { leading: false });
    var handler71 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide71: ui.value}});
    }, 50, { leading: false });
    var handler72 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide72: ui.value}});
    }, 50, { leading: false });
    var handler81 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide81: ui.value}});
    }, 50, { leading: false });
    var handler82 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide82: ui.value}});
    }, 50, { leading: false });
	
	
    
    if (!this.$('#slider11').data('uiSlider')) {
        $("#slider11").slider({
            slide: handler11,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider12').data('uiSlider')) {
        $("#slider12").slider({
            slide: handler12,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider21').data('uiSlider')) {
        $("#slider21").slider({
            slide: handler21,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider22').data('uiSlider')) {
        $("#slider22").slider({
            slide: handler22,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider31').data('uiSlider')) {
        $("#slider31").slider({
            slide: handler31,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider32').data('uiSlider')) {
        $("#slider32").slider({
            slide: handler32,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider41').data('uiSlider')) {
        $("#slider41").slider({
            slide: handler41,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider42').data('uiSlider')) {
        $("#slider42").slider({
            slide: handler42,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider51').data('uiSlider')) {
        $("#slider51").slider({
            slide: handler51,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider52').data('uiSlider')) {
        $("#slider52").slider({
            slide: handler52,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider61').data('uiSlider')) {
        $("#slider61").slider({
            slide: handler61,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider62').data('uiSlider')) {
        $("#slider62").slider({
            slide: handler62,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider71').data('uiSlider')) {
        $("#slider71").slider({
            slide: handler71,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider72').data('uiSlider')) {
        $("#slider72").slider({
            slide: handler72,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider81').data('uiSlider')) {
        $("#slider81").slider({
            slide: handler81,
            min: 0,
            max: 100
        });
    };
    if (!this.$('#slider82').data('uiSlider')) {
        $("#slider82").slider({
            slide: handler82,
            min: 0,
            max: 100
        });
    }
  });
}

if (Meteor.isServer) {
      MusicMachine.remove({});
		if (MusicMachine.find().count() === 0) {
			MusicMachine.insert(
				{slide11: 50, slide12:50,
				slide21: 50, slide22:50,
				slide31: 50, slide32:50,
				slide41: 50, slide42:50,
				slide51: 50, slide52:50,
				slide61: 50, slide62:50,
				slide71: 50, slide72:50,
				slide81: 50, slide82:50}
				);
			
		}else {
			donsole.log("no insert");
		}

}