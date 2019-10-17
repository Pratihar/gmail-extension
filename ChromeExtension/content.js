// Position Spam Button and Category Section
function resizeResponse(top) {
  $(".aHS-bnv").css({ marginLeft: "38px", marginTop: top.toString() + "%" });
  $(".TK")
    .find(".asa")
    .css({
      opacity: 0.77,
      marginLeft: "190px",
      marginTop: (top + 0.6).toString() + "%"
    });

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
    .css({ marginLeft: "60px", marginTop: top.toString() + "%" });
  $(".aS3")
    .find(".aHS-bnr")
    .css({ marginLeft: "110px", marginTop: top.toString() + "%" });
  $(".aS5")
    .find(".aHS-bnr")
    .css({ marginLeft: "160px", marginTop: top.toString() + "%" });
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

function modifyMore(top) {
  $(".n6").after($(".CL:eq(0)"));

  $(".CL:eq(0)")
    .find(".CK")
    .html("&nbsp;");

  $(".CL:eq(0)").css({ marginLeft: "190px", marginTop: top.toString() + "%" });

  // Trash and Spam Button Routing
  $(".CL:eq(0)").click(function() {
    window.location.href = $(this)
      .find("a")
      .attr("href");
  });
}

function preparefakeset(fake, fakeset) {
  for (var i = 0; i < fake.find(".TN").length; i++) {
    fakeset.add(fake.find(".TN:eq(" + i + ")").attr("class"));
  }
}

function preparetargetset(target, targetset) {
  for (var i = 0; i < target.find(".TN").length; i++) {
    targetset.add(target.find(".TN:eq(" + i + ")").attr("class"));
  }
}

$(window).on("load", function() {
  // Trigger More Button
  $(".n6")
    .find("span")
    .trigger("click");

  var top;

  if ($(".aim").height() == 24) top = -10;
  else top = -13.5;

  var archive = '<div class="asa"><div class="ar8 T-I-J3 J-J5-Ji"></div></div>';

  //console.log(gmail.get.unread_social_emails());

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
  $(".aHS-bnq")
    .parent()
    .parent()
    .after(archive);

  var currurl = $(location).attr("href");

  var spliturl = currurl.split("/");
  var baseurl = spliturl[0] + spliturl[1] + spliturl[2] + spliturl[3] + "/";

  var archivelink =
    baseurl + "#search/-in%3Ainbox+-in%3Asent+-in%3Adrafts+has%3Anouserlabels";

  $(".TK")
    .find(".asa")
    .click(function() {
      window.location.href = archivelink;
      setTimeout(function() {
        location.reload();
      }, 5000);
    });

  // Trash and Spam Button Routing
  $(".aHS-bnu").click(function() {
    window.location.href = $(this)
      .find(".aio")
      .find("span")
      .find("a")
      .attr("href");
  });
  $(".aHS-bnq").click(function() {
    window.location.href = $(this)
      .find(".aio")
      .find("span")
      .find("a")
      .attr("href");
  });

  modifyMore(top);

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

  $(".CJ").html("&nbsp;");

  $(".J-Ke.n4").click(function() {
    $(".CJ").html("&nbsp;");
    $(".CL:eq(1)").hide();

    giveBorder();

    $(".aHS-aHO:eq(1)").hide();
    $(".aHS-bnv:eq(1)").hide();
    $(".aHS-bnx:eq(1)").hide();
    $(".aHS-bnu:eq(1)").hide();
    $(".aHS-bnq:eq(1)").hide();

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
      resizeResponse(top);
    });

    // var target = $(".HwgYue").find(".TK:eq(0)")[0];

    // // configuration of the observer:
    // var config = { attributes: true, childList: true, characterData: true };

    // // create an observer instance
    // var observer = new MutationObserver(function(mutations) {
    //   mutations.forEach(function(mutation) {
    //     console.log("change");
    //     setTimeout(function() {
    //       location.reload();
    //     }, 1000);
    //   });
    // });

    // // pass in the target node, as well as the observer options
    // observer.observe(target, config);

    //$(".HwgYue").find(".TK:eq(0)").find(".aim").length;
  });

  resizeResponse(top);

  var cat = $(".aJZ");
  new ResizeSensor(cat, function() {
    $(".aHS-aHO:eq(1)").hide();
    resizeResponse(top);
  });

  var element = $(".aim:eq(0)");
  new ResizeSensor(element, function() {
    resizeResponse(top);
  });

  var fake = $(".TK").clone();

  // select the target node
  var target = $(".TK");

  // var fakeset = new Set();
  // var targetset = new Set();

  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true };

  // create an observer instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log("change");

      // fakelen = fake.find(".TN").length;
      // targetlen = target.find(".TN").length;

      // preparefakeset(fake, fakeset);
      // preparetargetset(target, targetset);

      // console.log(fakeset, targetset);

      // var classes;

      // let extrafake = new Set([...fakeset].filter(x => !targetset.has(x)));
      // let extratarget = new Set([...targetset].filter(x => !fakeset.has(x)));

      // extratarget.forEach(val => {
      //   classes = val.split(" ");
      //   console.log(classes);
      //   fake.append(
      //     target
      //       .find("." + classes[2])
      //       .parent()
      //       .parent()
      //   );
      // });
      // extrafake.forEach(val => {
      //   classes = val.split(" ");
      //   console.log(classes);
      //   fake
      //     .find("." + classes[2])
      //     .parent()
      //     .parent()
      //     .hide();
      // });

      // $("<div>" + fake + "</div>")
      //   .find(".bsU:eq(1)")
      //   .text(gmail.get.unread_draft_emails());

      $(".TK")[0].replaceWith(fake[0]);
      fake = $(".TK").clone();
      target = $(".TK");
      $(".CJ").html("&nbsp;");
      observer.observe(target[0], config);
    });
  });

  // pass in the target node, as well as the observer options
  observer.observe(target[0], config);

  $(".HwgYue")
    .find(".TK:eq(0)")
    .find(".aim").length;

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
