function getCookie( name ) {
    var parts = document.cookie.split(name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  
  function expireCookie( cName ) {
      document.cookie = 
          encodeURIComponent(cName) + "=deleted; expires=" + new Date( 0 ).toUTCString();
  }
  
  function setCursor( docStyle, buttonStyle ) {
      document.getElementById( "doc" ).style.cursor = docStyle;
      document.getElementById( "button-id" ).style.cursor = buttonStyle;
  }
  
  function setFormToken() {
      var downloadToken = new Date().getTime();
      document.getElementById( "downloadToken" ).value = downloadToken;
      return downloadToken;
  }
  
  var downloadTimer;
  var attempts = 30;
  
  // Prevents double-submits by waiting for a cookie from the server.
  function blockResubmit() {
      var downloadToken = setFormToken();
      setCursor( "wait", "wait" );
  
      downloadTimer = window.setInterval( function() {
          var token = getCookie( "downloadToken" );
  
          if( (token == downloadToken) || (attempts == 0) ) {
              unblockSubmit();
          }
  
          attempts--;
      }, 1000 );
  }
  
  function unblockSubmit() {
    setCursor( "auto", "pointer" );
    window.clearInterval( downloadTimer );
    expireCookie( "downloadToken" );
    attempts = 30;
  }

  function download(blob){
    var url = URL.createObjectURL(blob);
    console.log('create ' + url);

    window.addEventListener('focus', window_focus, false);
    function window_focus(){
        window.removeEventListener('focus', window_focus, false);
        URL.revokeObjectURL(url);
        console.log('revoke ' + url);
    }
    location.href = url;
}


  //jQuery

  $(function(){$('.download').click(function() { ShowDownloadMessage(); }); })

  function ShowDownloadMessage()
  {
       $('#message-text').text('Your report is creating. Please wait...');
       $('#message').show();
       window.addEventListener('focus', HideDownloadMessage, false);
  }
  
  function HideDownloadMessage(){
      window.removeEventListener('focus', HideDownloadMessage, false);                   
      $('#message').hide();
  }


