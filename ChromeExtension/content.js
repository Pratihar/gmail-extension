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

  $(".zw").before(
    $(".aHS-bnx")
      .parent()
      .parent()
  );
  $(".zw").before(
    $(".aHS-bnv")
      .parent()
      .parent()
  );

  $(".aHS-bnv:eq(1)").hide();
  $(".aHS-bnx:eq(1)").hide();

  $(".aHS-bnt, .aHS-bnu, .aHS-bnq")
    .parent()
    .parent()
    .css({ marginLeft: "12px" });

  // Filter Trash and Spam Icons
  $(".aHS-bnx, .aHS-bnv")
    .find(".aio")
    .hide();

  // Convert Icons into links
  $(".aHS-bnx, .aHS-bnv")
    .find(".qj")
    .hide();

  $(".aHS-bnx").prepend(
    '<a class="qj qr" href="https://mail.google.com/mail/u/0/#trash"></a>'
  );
  $(".aHS-bnv").prepend(
    '<a class="qj qr" href="https://mail.google.com/mail/u/0/#spam"></a>'
  );

  $(".aHS-bnx")
    .parent()
    .parent()
    .css({ marginLeft: "12px" });

  $(".aHS-bnv")
    .parent()
    .parent()
    .css({ marginLeft: "50px", marginTop: "-32px" });

  // var arrow = $(".TH.aii.J-J5-Ji");
  // $(".aHS-aHO").prepend(arrow);
  // arrow.removeClass("aii");
  // arrow.addClass("aih");

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

  //alert($(".T-I.J-J5-Ji.aFh.T-I-ax7.mA")[0].outerHTML);
  //alert($(".T-I.J-J5-Ji.aFh.T-I-ax7.mA")[0].outerHTML);

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

  // $(".aHS-bnv, .aHS-bnx").on("click", function(e) {
  //   console.log("clicked", this);
  // });

  // $(".TN.bzz.aHS-aHO").hover(function() {
  //   $(this).toggleClass("TO NQ");
  // });
});
