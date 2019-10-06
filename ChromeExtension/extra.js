function tinkerCat() {
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
}

function mainOrganiser() {
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

  $(".aHS-bnt")
    .parent()
    .parent()
    .css({ marginLeft: "12px" });
  $(".aHS-bnu")
    .parent()
    .parent()
    .css({ marginLeft: "12px" });
  $(".aHS-bnq")
    .parent()
    .parent()
    .css({ marginLeft: "12px" });
}

function hideMore() {
  $(".aHS-aHO:eq(1)").hide();
  $(".aHS-bnv:eq(1)").hide();
  $(".aHS-bnx:eq(1)").hide();
  // $(".aY7xie:eq(1)")
  //   .parent()
  //   .parent()
  //   .parent()
  //   .hide();
}

function triggerMore() {
  $(".n6")
    .find("span")
    .trigger("click");
}

$(window).on("load", function() {
  triggerMore();
  mainOrganiser();

  // Trash and Spam Positioning
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

  // Hide Trash and Spam Labels
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

  // Icons relative Positioning
  $(".aHS-bnx")
    .parent()
    .parent()
    .css({ marginLeft: "12px" });

  $(".aHS-bnv")
    .parent()
    .parent()
    .css({ marginLeft: "50px", marginTop: "-32px" });

  hideMore();

  $(".HwgYue").prepend(
    $(".aHS-bnw")
      .parent()
      .parent()
  );
  $(".HwgYue").prepend(
    $(".aHS-bu1")
      .parent()
      .parent()
  );

  // $(".aHS-bnw")
  //   .parent()
  //   .parent()
  //   .hide();
  // $(".aHS-bu1")
  //   .parent()
  //   .parent()
  //   .hide();
  // $(".HwgYue").prepend(
  //   $(".aY7xie")
  //     .parent()
  //     .parent()
  //     .parent()
  //     .parent()
  // );

  // var arrow = $(".TH.aii.J-J5-Ji");
  // $(".aHS-aHO").prepend(arrow);
  // arrow.removeClass("aii");
  // arrow.addClass("aih");

  // $(".aY7xie")
  //   .parent()
  //   .parent()
  //   .parent()
  //   .after(
  //     $(".aHS-bu1")
  //       .parent()
  //       .parent()
  //   );

  $(".J-Ke.n4").click(function() {
    hideMore();
  });

  tinkerCat();

  // $(".aY7xie")
  //   .parent()
  //   .parent()
  //   .parent()
  //   .click(function() {
  //     setTimeout(function() {
  //       tinkerCat();
  //     }, 50);
  //   });

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
});
