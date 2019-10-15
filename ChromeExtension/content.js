// Position Spam Button and Category Section
function resizeResponse() {
  var top;

  if ($(".aim").height() == 24) top = "-10%";
  else top = "-13.5%";

  $(".aHS-bnv").css({ marginLeft: "38px", marginTop: top });

  $(".aS6, .aS4, .aS3, .aS5")
    .find(".aio")
    .find("span")
    .find("a")
    .html("&nbsp;&emsp;");
  $(".aS6, .aS4, .aS3, .aS5")
    .find(".aio")
    .find(".bsU")
    .html("&nbsp;&emsp;");

  $(".aS4")
    .find(".aHS-bnr")
    .css({ marginLeft: "60px", marginTop: top });
  $(".aS3")
    .find(".aHS-bnr")
    .css({ marginLeft: "110px", marginTop: top });
  $(".aS5")
    .find(".aHS-bnr")
    .css({ marginLeft: "160px", marginTop: top });
}

// Give Border to Category Section
function giveBorder() {
  $(".byl.aJZ.a0L").css({
    "border-top": "1px solid white",
    "border-bottom": "1px solid white"
  });
  $(".byl.aJZ.a0L").css({
    "box-shadow": "0px 1px 0px #000000, 0px -1px 0px #000000"
  });
}

function positionSpam() {
  // Extract Trash and Spam Icons from Buttons
  $(".aHS-bnx, .aHS-bnv")
    .find(".aio")
    .find("span")
    .find("a")
    .html("&nbsp;&emsp;");
  $(".aHS-bnv")
    .find(".aio")
    .find(".bsU")
    .html("&nbsp;&emsp;");

  // Trash and Spam Button Routing
  $(".aHS-bnx").click(function() {
    window.location.href = $(this)
      .find(".aio")
      .find("span")
      .find("a")
      .attr("href");
  });
  $(".aHS-bnv").click(function() {
    window.location.href = $(this)
      .find(".aio")
      .find("span")
      .find("a")
      .attr("href");
  });

  // Position Trash and Spam Buttons
  $(".aHS-bnq")
    .parent()
    .parent()
    .after(
      $(".aHS-bnx")
        .parent()
        .parent()
    );
  $(".aHS-bnx")
    .parent()
    .parent()
    .after(
      $(".aHS-bnv")
        .parent()
        .parent()
    );
}

function mutation(target) {}

$(window).on("load", function() {
  // Trigger More Button
  $(".n6")
    .find("span")
    .trigger("click");

  gmail = Gmail();

  // Set All Mail, Inbox, Sent and Drafts
  $(".wT").prepend(
    $(".aHS-aHO")
      .parent()
      .parent()
  );
  $(".aHS-bnt")
    .parent()
    .parent()
    .after(
      $(".aHS-bnu")
        .parent()
        .parent()
    );
  $(".aHS-bnu")
    .parent()
    .parent()
    .after(
      $(".aHS-bnq")
        .parent()
        .parent()
    );

  // Give Margin to Inbox, Sent and Drafts
  $(".byl").css({ marginLeft: "12px" });

  positionSpam();

  // var arrow = $(".TH.aii.J-J5-Ji");
  // $(".aHS-aHO").prepend(arrow);
  // arrow.removeClass("aii");
  // arrow.addClass("aih");

  giveBorder();

  $(".n6")
    .find("span")
    .trigger("click");

  $(".J-Ke.n4").click(function() {
    giveBorder();

    $(".aHS-aHO:eq(1)").hide();
    $(".aHS-bnv:eq(1)").hide();
    $(".aHS-bnx:eq(1)").hide();

    if (
      $(".HwgYue")
        .find(".aJZ")
        .height() == 32
    ) {
      $(".HwgYue")
        .find(".aY7xie")
        .parent()
        .click();
    }

    var cat = $(".HwgYue").find(".aJZ");
    new ResizeSensor(cat, function() {
      $(".aHS-aHO:eq(1)").hide();
      resizeResponse();
    });
  });

  resizeResponse();

  var cat = $(".aJZ");
  new ResizeSensor(cat, function() {
    $(".aHS-aHO:eq(1)").hide();
    resizeResponse();
  });

  var element = $(".aim:eq(0)");
  new ResizeSensor(element, function() {
    resizeResponse();
  });

  var fake = $(".TK").clone();

  // select the target node
  var target = $(".TK")[0];

  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true };

  // create an observer instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log("change");
      // $("<div>" + fake + "</div>")
      //   .find(".bsU:eq(1)")
      //   .text(gmail.get.unread_draft_emails());
      $(".TK")[0].replaceWith(fake[0]);
      fake = $(".TK").clone();
      target = $(".TK")[0];
      observer.observe(target, config);
    });
  });

  // pass in the target node, as well as the observer options
  observer.observe(target, config);

  // arrow.click(function() {
  //   $(".aHS-bnt").toggle();
  //   $(".aHS-bnu").toggle();
  //   $(".aHS-bnq").toggle();
  //   if ($(this).hasClass("aii")) {
  //     $(this).removeClass("aii");
  //     $(this).addClass("aih");
  //   } else {
  //     $(this).removeClass("aih");
  //     $(this).addClass("aii");
  //   }
  // });

  // $(".T-Jo-auq")
  //   .find("span")
  //   .trigger("click");
  // $.contextMenu({
  //   selector: ".aHS-bnv, .aHS-bnx",
  //   callback: function(key, options) {
  //     var tab = "";
  //     if (options.$trigger.hasClass("aHS-bnv")) {
  //       tab = "spam";
  //     } else {
  //       tab = "trash";
  //     }
  //     popup = window.open(
  //       "https://mail.google.com/mail/u/0/#" + tab,
  //       tab,
  //       "width=800,height=500"
  //     );
  //     $(popup).on("load", function() {
  //       setTimeout(function() {
  //         popup.$(".x2").click();
  //       }, 3000);
  //       popup.setInterval(function() {
  //         if (!popup.$(".x2").length) {
  //           popup.close();
  //         }
  //       }, 1000);
  //     });
  //   },
  //   items: {
  //     // edit: { name: "Edit", icon: "edit" },
  //     // cut: { name: "Cut", icon: "cut" },
  //     // copy: { name: "Copy", icon: "copy" },
  //     // paste: { name: "Paste", icon: "paste" },
  //     empty: { name: "Empty" }
  //     // sep1: "---------",
  //     // quit: {
  //     //   name: "Quit",
  //     //   icon: function() {
  //     //     return "context-menu-icon context-menu-icon-quit";
  //     //   }
  //     // }
  //   }
  // });
  // });
});
