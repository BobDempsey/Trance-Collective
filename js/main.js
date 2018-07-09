// variables
// const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet";
// const key = "&key= ";
// const outputTarget = document.getElementById("outputTarget");
// let maxResults = "&maxResults=";
// let maxResultsCounter = 5;
// let playlistId = "&playlistId=PLB2zDl2KK3B73o-Qri31mH6RQF9uolu1i";
// variables

// header button function > particles then scrolls

// init wow animations
new WOW().init();

function emptyBtnContainer() {
  $("#btnContainer").empty();
}

// hide footer until first load complete

function hideFooter() {
  $(".page-footer").hide();
}

function showFooter() {
  $(".page-footer").show();
}
// initially hide the back to top btn

function hideBackToTopBtn() {
  $(".fixed-action-btn").hide();
}

// show back to top btn on scroll

$(document).scroll(function() {
  var position = $(this).scrollTop();
  if (position > 1000) {
    $(".fixed-action-btn").fadeIn();
  } else {
    $(".fixed-action-btn").fadeOut();
  }
});

// initial call to youtube data api
function initialLoad() {
  fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=PLB2zDl2KK3B73o-Qri31mH6RQF9uolu1i&key= "
  )
    // response to json
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let items = myJson.items;
      // looping through results
      for (var index = 0; index < items.length; index++) {
        let snippet = items[index].snippet;
        // create cards for each result
        let embedCard = `
      <div class="card">
      <div class="card-body">
      <iframe src="https://www.youtube.com/embed/${
        snippet.resourceId.videoId
      }?showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <p class="card-title mt-4">${snippet.title}</p>
     </div></div>`;
        $("#outputTarget").append(embedCard);
      }
      $("#btnContainer").append(
        `<button type="button" class="btn blue-gradient mt-4 moreBtn" onclick="moreTracks1()">More Tracks</button>
       <div class="grid__item theme-3">
    <button class="action"><svg class="icon icon--rewind"><use xlink:href="#icon-rewind"></use></svg></button>
    <button class="particles-button">
        <i class="fa fa-music mr-2"></i> Latest Tracks</button>
</div>`
      );
      showFooter();
    });
}

// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moreTracks1() {
  // calling youtube data api
  fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&pageToken=CAoQAA&playlistId=PLB2zDl2KK3B73o-Qri31mH6RQF9uolu1i&key= "
  )
    // response to json
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let items = myJson.items;
      // looping through results
      for (var index = 0; index < items.length; index++) {
        let snippet = items[index].snippet;
        // console.log(snippet);
        // create cards for each result
        let embedCard = `
        <div class="card">
        <div class="card-body">
        <iframe src="https://www.youtube.com/embed/${
          snippet.resourceId.videoId
        }?showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p class="card-title mt-4">${snippet.title}</p>
       </div></div>`;
        // console.log(embedCard);
        $("#outputTarget").append(embedCard);
      }
      emptyBtnContainer();
      $("#btnContainer").append(
        `<button type="button" class="btn blue-gradient mt-4 moreBtn" onclick="moreTracks2()"  >More Tracks</button>`
      );
    });
}
// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moreTracks2() {
  // calling youtube data api
  fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&pageToken=CBQQAA&playlistId=PLB2zDl2KK3B73o-Qri31mH6RQF9uolu1i&key= "
  )
    // response to json
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let items = myJson.items;
      // looping through results
      for (var index = 0; index < items.length; index++) {
        let snippet = items[index].snippet;
        // console.log(snippet);
        // create cards for each result
        let embedCard = `
        <div class="card">
        <div class="card-body">
        <iframe src="https://www.youtube.com/embed/${
          snippet.resourceId.videoId
        }?showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p class="card-title mt-4">${snippet.title}</p>
       </div></div>`;
        // console.log(embedCard);
        $("#outputTarget").append(embedCard);
      }
      emptyBtnContainer();
      $("#btnContainer").append(
        `<button type="button" class="btn blue-gradient mt-4 moreBtn" onclick="moreTracks3()"  >More Tracks</button>`
      );
    });
}
// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moreTracks3() {
  // calling youtube data api
  fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&pageToken=CB4QAA&playlistId=PLB2zDl2KK3B73o-Qri31mH6RQF9uolu1i&key= "
  )
    // response to json
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let items = myJson.items;
      // looping through results
      for (var index = 0; index < items.length; index++) {
        let snippet = items[index].snippet;
        // console.log(snippet);
        // create cards for each result
        let embedCard = `
        <div class="card">
        <div class="card-body">
        <iframe src="https://www.youtube.com/embed/${
          snippet.resourceId.videoId
        }?showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p class="card-title mt-4">${snippet.title}</p>
       </div></div>`;
        // console.log(embedCard);
        $("#outputTarget").append(embedCard);
      }
      emptyBtnContainer();
      $("#btnContainer").append(
        `<button type="button" class="btn blue-gradient mt-4 moreBtn" onclick="moreTracks4()"  >More Tracks</button>`
      );
    });
}
// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moreTracks4() {
  // calling youtube data api
  fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&pageToken=CCgQAA&playlistId=PLB2zDl2KK3B73o-Qri31mH6RQF9uolu1i&key= "
  )
    // response to json
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let items = myJson.items;
      // looping through results
      for (var index = 0; index < items.length; index++) {
        let snippet = items[index].snippet;
        // console.log(snippet);
        // create cards for each result
        let embedCard = `
        <div class="card">
        <div class="card-body">
        <iframe src="https://www.youtube.com/embed/${
          snippet.resourceId.videoId
        }?showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p class="card-title mt-4">${snippet.title}</p>
       </div></div>`;
        // console.log(embedCard);
        $("#outputTarget").append(embedCard);
      }
      emptyBtnContainer();
      $("#btnContainer").append(
        `<button type="button" class="btn blue-gradient mt-4 moreBtn" onclick="moreTracks5()"  >More Tracks</button>`
      );
    });
}
// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moreTracks5() {
  // calling youtube data api
  fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&pageToken=CDIQAA&playlistId=PLB2zDl2KK3B73o-Qri31mH6RQF9uolu1i&key= "
  )
    // response to json
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let items = myJson.items;
      // looping through results
      for (var index = 0; index < items.length; index++) {
        let snippet = items[index].snippet;
        // console.log(snippet);
        // create cards for each result
        let embedCard = `
        <div class="card">
        <div class="card-body">
        <iframe src="https://www.youtube.com/embed/${
          snippet.resourceId.videoId
        }?showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p class="card-title mt-4">${snippet.title}</p>
       </div></div>`;
        // console.log(embedCard);
        $("#outputTarget").append(embedCard);
      }
      emptyBtnContainer();
      $("#btnContainer").append(
        `<button type="button" class="btn blue-gradient mt-4 moreBtn" onclick="moreTracks6()"  >More Tracks</button>`
      );
    });
}
// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moreTracks6() {
  // calling youtube data api
  fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&pageToken=CDwQAA&playlistId=PLB2zDl2KK3B73o-Qri31mH6RQF9uolu1i&key= "
  )
    // response to json
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let items = myJson.items;
      // looping through results
      for (var index = 0; index < items.length; index++) {
        let snippet = items[index].snippet;
        // console.log(snippet);
        // create cards for each result
        let embedCard = `
        <div class="card">
        <div class="card-body">
        <iframe src="https://www.youtube.com/embed/${
          snippet.resourceId.videoId
        }?showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p class="card-title mt-4">${snippet.title}</p>
       </div></div>`;
        // console.log(embedCard);
        $("#outputTarget").append(embedCard);
      }
      emptyBtnContainer();
      $("#btnContainer").append(
        `<button type="button" class="btn blue-gradient mt-4 moreBtn" onclick="moreTracks7()"  >More Tracks</button>`
      );
    });
}
// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moreTracks7() {
  // calling youtube data api
  fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&pageToken=CEYQAA&playlistId=PLB2zDl2KK3B73o-Qri31mH6RQF9uolu1i&key= "
  )
    // response to json
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let items = myJson.items;
      // looping through results
      for (var index = 0; index < items.length; index++) {
        let snippet = items[index].snippet;
        // console.log(snippet);
        // create cards for each result
        let embedCard = `
        <div class="card">
        <div class="card-body">
        <iframe src="https://www.youtube.com/embed/${
          snippet.resourceId.videoId
        }?showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p class="card-title mt-4">${snippet.title}</p>
       </div></div>`;
        // console.log(embedCard);
        $("#outputTarget").append(embedCard);
      }
      emptyBtnContainer();
      // $("#btnContainer").append(
      //   `<button type="button" class="btn blue-gradient mt-4 moreBtn" onclick="moreTracks8()"  >More Tracks</button>`
      // );
    });
}
// more tracks //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
