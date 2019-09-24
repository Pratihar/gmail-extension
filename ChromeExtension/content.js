$(window).on("load", function() {
  $(".n6")
    .find("span")
    .trigger("click");

  $(".wT").prepend($(".aim")[8]);
  $(".aim")[1].after($(".aim")[4]);
  $(".aim")[2].after($(".aim")[5]);

  $(".aHS-bnt").css({ marginLeft: "12px" });
  $(".aHS-bnu").css({ marginLeft: "12px" });
  $(".aHS-bnq").css({ marginLeft: "12px" });

  $(".HwgYue").prepend($(".aHS-bnw"));
  $(".HwgYue").prepend($(".aHS-bu1"));

  var arrow = $(".TH.aii.J-J5-Ji");
  $(".aHS-aHO").prepend(arrow);
  arrow.removeClass("aii");
  arrow.addClass("aih");

  $(".n6")
    .find("span")
    .trigger("click");

  arrow.click(function() {
    $(".aHS-bnt").toggle();
    $(".aHS-bnu").toggle();
    $(".aHS-bnq").toggle();

    if ($(this).hasClass("aii")) {
      $(this).removeClass("aii");
      $(this).addClass("aih");
    } else {
      $(this).removeClass("aih");
      $(this).addClass("aii");
    }
  });

  //alert($(".T-I.J-J5-Ji.aFh.T-I-ax7.mA")[0].outerHTML);
  //alert($(".T-I.J-J5-Ji.aFh.T-I-ax7.mA")[0].outerHTML);

  // $(".T-Jo-auq")
  //   .find("span")
  //   .trigger("click");

  $.contextMenu({
    selector: ".aHS-bnv, .aHS-bnx",
    callback: function(key, options) {
      var tab = "";

      if (options.$trigger.hasClass("aHS-bnv")) {
        tab = "spam";
      } else {
        tab = "trash";
      }

      popup = window.open(
        "https://mail.google.com/mail/u/0/#" + tab,
        tab,
        "width=800,height=500"
      );

      $(popup).on("load", function() {
        setTimeout(function() {
          popup.$(".x2").click();
        }, 3000);

        popup.setInterval(function() {
          if (!popup.$(".x2").length) {
            popup.close();
          }
        }, 1000);
      });
    },
    items: {
      // edit: { name: "Edit", icon: "edit" },
      // cut: { name: "Cut", icon: "cut" },
      // copy: { name: "Copy", icon: "copy" },
      // paste: { name: "Paste", icon: "paste" },
      empty: { name: "Empty" }
      // sep1: "---------",
      // quit: {
      //   name: "Quit",
      //   icon: function() {
      //     return "context-menu-icon context-menu-icon-quit";
      //   }
      // }
    }
  });

  // $(".aHS-bnv, .aHS-bnx").on("click", function(e) {
  //   console.log("clicked", this);
  // });

  // $(".TN.bzz.aHS-aHO").hover(function() {
  //   $(this).toggleClass("TO NQ");
  // });
});

InboxSDK.load("1", "Hello World!").then(function(sdk) {
  // var mails = sdk.NavMenu.addNavItem({
  //   name: "All Mails",
  //   routeID: "all"
  // });

  // mails.addNavItem({
  //   name: "Inbox",
  //   routeID: "inbox"
  // });
  // mails.addNavItem({
  //   name: "Sent",
  //   routeID: "sent"
  // });

  // the SDK has been loaded, now do something with it!
  sdk.Compose.registerComposeViewHandler(function(composeView) {
    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "My Nifty Button!",
      iconUrl:
        "https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365",
      onClick: function(event) {
        event.composeView.insertTextIntoBodyAtCursor("Hello World!");
      }
    });
  });
});
