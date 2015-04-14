if (typeof AttacheFilePreview === 'undefined') {

  var AttacheFilePreview = React.createClass({displayName: "AttacheFilePreview",

    getInitialState: function() {
      return { srcWas: '' };
    },

    onSrcLoaded: function() {
      this.setState({ srcWas: this.props.src });
    },

    render: function() {
      var previewClassName = "attache-file-preview";

      // progressbar
      if (this.state.srcWas != this.props.src) {
        previewClassName = previewClassName + " attache-loading";
        var className = this.props.className || "progress-bar progress-bar-striped active" + (this.props.src ? " progress-bar-success" : "");
        var pctString = this.props.pctString || (this.props.src ? 100 : this.props.percentLoaded) + "%";
        var pctDesc   = this.props.pctDesc   || (this.props.src ? 'Loading...' : pctString);
        var pctStyle  = { width: pctString, minWidth: '3em' };
        var progress = (
          React.createElement("div", {className: "progress"}, 
            React.createElement("div", {className: className, role: "progressbar", "aria-valuenow": this.props.percentLoaded, "aria-valuemin": "0", "aria-valuemax": "100", style: pctStyle}, 
              pctDesc
            )
          )
        );
      }

      // img tag
      if (this.props.src) {
        var img = React.createElement("img", {src: this.props.src, onLoad: this.onSrcLoaded});
      }

      // combined
      return (
        React.createElement("div", {className: previewClassName}, 
          progress, 
          img, 
          React.createElement("div", {className: "clearfix"}, 
            React.createElement("div", {className: "pull-left"}, this.props.filename), 
            React.createElement("a", {href: "#remove", className: "pull-right", onClick: this.props.onRemove, title: "Click to remove"}, "×")
          )
        )
      );
    }
  });

}

if (typeof AttachePlaceholder === 'undefined') {

  var AttachePlaceholder = React.createClass({displayName: "AttachePlaceholder",
    render: function() {
      return (
        React.createElement("div", {className: "attache-file-preview"}, 
          React.createElement("img", {src: this.props.src})
        )
      );
    }
  });

}

if (typeof AttacheHeader === 'undefined') {

  var AttacheHeader = React.createClass({displayName: "AttacheHeader",
    render: function() {
      return (
        React.createElement("noscript", null)
      );
    }
  });

}
