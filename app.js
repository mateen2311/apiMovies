let page = 1;
      async function getlink() {
        let str = "";
        let mud = await fetch(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`
        );
        mud = await mud.json();
        // console.log(mud.results);

        mud.results.forEach(function (data, index) {
          str += `
                    <div class="colm col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                              <div class="card">
                                   <img src="https://image.tmdb.org/t/p/w500${
                                     data.poster_path
                                   }}" alt="">
                                   <h4>${data.title}.</h4>
                                   <p>${data.overview.slice(0, 50)}</p>
                              </div>
                         </div>
                    `;
        });
        document.querySelector(".row").innerHTML = str;
        document.querySelector(".page").innerHTML = page;
        if (page === 1) {
          document.querySelector("#prev").classList.add("disabled");
        } else {
          document.querySelector("#prev").classList.remove("disabled");
        }
      }
      getlink();
      function next() {
        page++;
        getlink();
      }
      function prev() {
        page--;
        getlink();
      }