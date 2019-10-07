$(window).on("load", function() {
  $(".n6")
    .find("span")
    .trigger("click");
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
  $(".aHS-bnt, .aHS-bnu, .aHS-bnq")
    .parent()
    .parent()
    .css({ marginLeft: "12px" });
  // Filter Trash and Spam Icons
  $(".aHS-bnx, .aHS-bnv")
    .find(".aio")
    .hide();

  $(".aHS-bnx").css({ marginLeft: "12px" });
  $(".aHS-bnv").css({ marginLeft: "50px", marginTop: "-32px" });

  var inbox = $(".aHS-bnt")
    .find("a")
    .attr("href");
  var baseurl = inbox.substring(0, inbox.length - 6);

  $(".aHS-bnx").click(function() {
    window.location.href = baseurl + "#trash";
  });
  $(".aHS-bnv").click(function() {
    window.location.href = baseurl + "#spam";
  });
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
  $(".aHS-bnv:eq(1)").hide();
  $(".aHS-bnx:eq(1)").hide();

  // var arrow = $(".TH.aii.J-J5-Ji");
  // $(".aHS-aHO").prepend(arrow);
  // arrow.removeClass("aii");
  // arrow.addClass("aih");

  $(".byl.aJZ.a0L").css({
    "border-top": "1px solid white",
    "border-bottom": "1px solid white"
  });
  $(".byl.aJZ.a0L").css({
    "box-shadow": "0px 1px 0px #000000, 0px -1px 0px #000000"
  });
  $(".n6")
    .find("span")
    .trigger("click");
  $(".J-Ke.n4").click(function() {
    $(".byl.aJZ.a0L").css({
      "border-top": "1px solid white",
      "border-bottom": "1px solid white"
    });
    $(".byl.aJZ.a0L").css({
      "box-shadow": "0px 1px 0px #000000, 0px -1px 0px #000000"
    });
    $(".aHS-aHO:eq(1)").hide();
    $(".aHS-bnv:eq(1)").hide();
    $(".aHS-bnx:eq(1)").hide();
  });

  $(".aS6, .aS4, .aS3, .aS5")
    .find(".aio, .nL")
    .hide();
  $(".aS4")
    .find(".aHS-bnr")
    .css({ marginLeft: "60px", marginTop: "-32px" });
  $(".aS3")
    .find(".aHS-bnr")
    .css({ marginLeft: "110px", marginTop: "-32px" });
  $(".aS5")
    .find(".aHS-bnr")
    .css({ marginLeft: "160px", marginTop: "-32px" });

  $(document).arrive(".aS6", function() {
    $(".aS6, .aS4, .aS3, .aS5")
      .find(".aio, .nL")
      .hide();
    $(".aS4")
      .find(".aHS-bnr")
      .css({ marginLeft: "60px", marginTop: "-32px" });
    $(".aS3")
      .find(".aHS-bnr")
      .css({ marginLeft: "110px", marginTop: "-32px" });
    $(".aS5")
      .find(".aHS-bnr")
      .css({ marginLeft: "160px", marginTop: "-32px" });
  });

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
