class UI {


    //! TOP RATED SECTION
    printMovies (topMoviesRes) {
        let output = ''; 

        const topMovies = topMoviesRes.results;
        const filteredMovies = topMovies.reduce((acc, movie) => {
            
            if (movie.poster_path == null) {
                movie.rejectionReason = 'no photo'
                acc.rejects.push(movie)
                return acc
            }
            if (movie.popularity < 4) {
                movie.rejectionReason = 'bad rating'
                acc.rejects.push(movie)
                return acc
            }
                acc.matches.push(movie)
                return acc
                }, { matches: [], rejects: [] })
               
            
            filteredMovies.matches.forEach( movie => {

                let img = movie.poster_path;
                const title = movie.original_title;
                const date = movie.release_date.substring(0, 4);
                const votes = movie.vote_average; 
                const id = movie.id;  

                output += `
                        <div class="grid-item col-md-2">
                            <div class="grid-item-content">
                                <img src="http://image.tmdb.org/t/p/w500/${img}">
                                <div id="${id}" class="overlay" data-id="movie"></div>
                                <div class="gall-text text-center">
                                    <h4 id="${id}" class="content-title" data-id="movie">${title}</h4>
                                    <span id="${id}" data-id="movie"><i class="fas fa-heart fa-sm"></i> ${votes} hearts<span>
                                    <br>
                                    <span id="${id}" data-id="movie">${date}</span>   
                                </div>
                            </div>
                            </div>
                        </div>
                    `;
                document.querySelector('.grid').innerHTML = output;  
        })
    }

    printSeries (topSeriesRes) {
        let output = '';

        const topSeries = topSeriesRes.results;
        const filteredSeries = topSeries.reduce((acc, serie) => {

            if (serie.poster_path == null) {
                serie.rejectionReason = 'no photo'
                acc.rejects.push(serie)
                return acc
            }
            if (serie.popularity < 4) {
                serie.rejectionReason = 'bad rating'
                acc.rejects.push(serie)
                return acc
            }
                acc.matches.push(serie)
                return acc
                }, { matches: [], rejects: [] })
            
            
            filteredSeries.matches.forEach( serie => {

                let img = serie.poster_path;
                const name = serie.name;       
                const date = serie.first_air_date.substring(0, 4);
                const votes = serie.vote_average;
                const id = serie.id;

                output += `
                    <div class="grid-item col-md-2">
                        <div class="grid-item-content">
                            <img src="http://image.tmdb.org/t/p/w500/${img}">
                            <div id="${id}" class="overlay" data-id="serie"></div>
                                <div class="gall-text">
                                    <h4 id="${id}" class="content-title" data-id="serie">${name}</h4>
                                    <span id="${id}" data-id="serie"><i class="fas fa-heart fa-sm"></i> ${votes} hearts<span>
                                    <br>
                                    <span id="${id}" data-id="serie">${date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                document.querySelector('.grid').innerHTML = output;   
        })
    }


    //! SEARCH SECTION
    printSearchCat (searchCatalogueRes) {

        let output = '';

        const searchQueryMovie = searchCatalogueRes.searchMovieCatalogueInfo.results;
        const filteredMovies = searchQueryMovie.reduce((acc, movie) => {

            if (movie.poster_path == null) {
                movie.rejectionReason = 'no photo'
                acc.rejects.push(movie)
                return acc
            }
            if (movie.popularity < 4) {
                movie.rejectionReason = 'bad rating'
                acc.rejects.push(movie)
                return acc
            }
                acc.matches.push(movie)
                return acc
                }, { matches: [], rejects: [] })
            
            
            filteredMovies.matches.forEach( movie => {

                const img = movie.poster_path;
                const title = movie.original_title;
                const date = movie.release_date.substring(0, 4);
                const votes = movie.vote_average;
                const id = movie.id;

                output += `
                    <div class="grid-item col-md-2">
                        <div class="grid-item-content">
                            <img src="http://image.tmdb.org/t/p/w500/${img}">
                            <div id="${id}" class="overlay" data-id="movie"></div>
                                <div class="gall-text">
                                    <h4 id="${id}" class="content-title" data-id="movie">${title}</h4>
                                    <span id="${id}" data-id="movie"><i class="fas fa-heart fa-sm"></i> ${votes} hearts<span>
                                    <br>
                                    <span id="${id}" data-id="movie">${date}</span>
                                </div>
                            </div>
                        </div>
                    </div>    
                `;
                document.querySelector('.grid').innerHTML = output;
            })


            const searchQuerySerie = searchCatalogueRes.searchSeriesCatalogueInfo.results;
            const filteredSeries = searchQuerySerie.reduce((acc, serie) => {

                if (serie.poster_path == null) {
                    serie.rejectionReason = 'no photo'
                    acc.rejects.push(serie)
                    return acc
                }
                if (serie.popularity < 4) {
                    serie.rejectionReason = 'bad rating'
                    acc.rejects.push(serie)
                    return acc
                }
                    acc.matches.push(serie)
                    return acc
                    }, { matches: [], rejects: [] })
            
                
                filteredSeries.matches.forEach( serie => {
 
                    const img = serie.poster_path;
                    const name = serie.name;
                    const date = serie.first_air_date.substring(0, 4);
                    const votes = serie.vote_average;
                    const id = serie.id;
                        
                    output += `
                    <div class="grid-item col-md-2">
                            <div class="grid-item-content">
                                <img src="http://image.tmdb.org/t/p/w500/${img}">
                                <div id="${id}" class="overlay" data-id="serie"></div>
                                    <div class="gall-text">
                                        <h4 id="${id}" class="content-title" data-id="serie">${name}</h4>
                                        <span id="${id}" data-id="serie"><i class="fas fa-heart fa-sm"></i> ${votes} hearts<span>
                                        <br>
                                        <span id="${id}" data-id="serie">${date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    `;
                    document.querySelector('.grid').innerHTML = output;

                })   
                
                // remove load more button on search results
                document.getElementById('load-more').style.visibility = 'hidden';
    }

    
    // //! MNODAL SECTION
    printModalMovie (searchMovieIdRes) {
        
        //prevent scrolling under the modal
        document.querySelector('body').style.overflow = 'hidden';
    
        //shortcut find cast
        const castInfo = searchMovieIdRes.movieCastInfo;
        // get only the first 10 actors
        const cast = castInfo.cast.slice(0,10);
        //loop through the cast and output it as one string
        let actors = '';
        cast.forEach( cast => {
             actors += cast.name + ', ';

          
        //shortcut find movie details
        const movieInfo = searchMovieIdRes.movieDetailsInfo;

        const bDrop = movieInfo.backdrop_path, 
              budget = movieInfo.budget,
              site = movieInfo.homepage, 
              imdb = movieInfo.imdb_id, 
              lang = movieInfo.original_language, 
              title = movieInfo.original_title, 
              overview = movieInfo.overview, 
              pop = movieInfo.popularity,
              img = movieInfo.poster_path,
              date = movieInfo.release_date.substring(0, 4), 
              run = movieInfo.runtime, 
              tag = movieInfo.tagline,
              votes = movieInfo.vote_average;
            
            
        const video = movieInfo.videos.results[0].key;
           
        
            let output = '';

            output = `
                <div class="myModal">
                    <i class="far fa-times-circle" id="close-modal" onclick="closeModal()"></i>
                    <a href="http://www.imdb.com/title/${imdb}" target="_blank"><i class="fab fa-imdb"></i></a>
                    <a href="http://www.amazon.com/s/ref=nb_ss_d?tag=chriscoyier-20&url=search-alias%3Ddvd&field-keywords=${title}" target="_blank"><i class="fab fa-amazon"></i></a>
                    <a href="http://www.netflix.com/Search?lnkctr=srchrd-ips&v1=${title}" target="_blank"><span class="icon-netflix"></span></a>
                    <a href="${site}" target="_blank"><i class="fas fa-globe"></i></a>
                    <div class="col-md-12 title">
                        <h2 class="modal-title">${title}</h2>
                        <h4 class="modal-title">${tag}</h4>
                    </div>
                    <div class="col-md-8 ml-auto text">
                        <p class="overview"><span>Overview:</span> ${overview}</p>
                    </div>
                    <div class="col-md-6 ml-auto text">
                        <p class="actors"><span>Cast:</span> ${actors}</p>
                    </div>
                    <div class="col-md-5 ml-auto list">
                    <ul class="list-group">
                        <li class="list-group-item title">Movie Info:</li>
                        <li class="list-group-item ml-5"><p>Language: <span>${lang}</span></p></li>
                        <li class="list-group-item ml-5"><p>Release Date: <span>${date}</span></p></li>
                        <li class="list-group-item ml-5"><p>Runtime: <span>${run}</span> minutes</p></li>
                        <li class="list-group-item ml-5"><p>Popularity: <span><i class="fas fa-heart fa-sm"></i> ${votes}</span> votes (${pop})</p></li>
                        <li class="list-group-item ml-5"><p>Budget: $<span>${budget}</span></p></li>
                    </ul>
                    </div>
                    <div class="col-md-5 ml-auto genres">
                        <span class="badge badge-pill badge-light ml-5">${movieInfo.genres[0].name}</span> 
                    </div>
                    <div class="col-md-5 ml-auto genres">
                        <button type="button" class="btn btn-outline-light" onclick="openVideo()">Trailer</button> 
                    </div>
                    <div class="col-md-12 mx-auto video-container">
                        <iframe src="https://www.youtube.com/embed/${video}?enablejsapi=1&fs=0&iv_load_policy=3&rel=0&showinfo=0" id="trailer-player" frameborder="0" allowfullscreen class="video"></iframe> 
                    </div> 
                </div>
            `;
            document.querySelector('.modal-container').innerHTML = output;
            
            // set background in CSS
            const modalBg = document.querySelector('.myModal');
            modalBg.style.backgroundImage = `linear-gradient(45deg, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 20%,rgba(255,255,255,.15) 20%,rgba(0,0,0,0) 40%,rgba(0,0,0,0.80) 40%,rgba(0,0,0,0.80) 100%), url(http://image.tmdb.org/t/p/w1280/${bDrop})`; 

            // Tell youtube API to load player
            loadYTplayer();
    
        });
          
    }

    printModalSerie (searchSerieIdRes) {

        //prevent scrolling under the modal
        document.querySelector('body').style.overflow = 'hidden';

        const cast = searchSerieIdRes.credits.cast.slice(0,10);

        let actors = '';
        cast.forEach( cast => {
             actors += cast.name + ', ';


        const bDrop = searchSerieIdRes.backdrop_path, 
              name = searchSerieIdRes.name, 
              site = searchSerieIdRes.homepage, 
              lang = searchSerieIdRes.original_language, 
              overview = searchSerieIdRes.overview, 
              pop = searchSerieIdRes.popularity, 
              video = searchSerieIdRes.videos.results[0].key, 
              votes = searchSerieIdRes.vote_average, 
              firstD = searchSerieIdRes.first_air_date.substring(0, 4),
              lastD = searchSerieIdRes.last_air_date;
              

        let output = '';

         output = `
            <div class="myModal">
            <i class="far fa-times-circle" id="close-modal" onclick="closeModal()"></i>
            <a href="http://www.imdb.com/find?s=tt&q=${name}" target="_blank"><i class="fab fa-imdb"></i></a>
            <a href="http://www.amazon.com/s/ref=nb_ss_d?tag=chriscoyier-20&url=search-alias%3Ddvd&field-keywords=${name}" target="_blank"><i class="fab fa-amazon"></i></a>
            <a href="http://www.netflix.com/Search?lnkctr=srchrd-ips&v1=${name}" target="_blank"><span class="icon-netflix"></span></a>
            <a href="${site}" target="_blank"><i class="fas fa-globe"></i></a>
                <div class="col-md-12 title">
                    <h2 class="modal-title">${name}</h2>
                </div>
                <div class="col-md-8 ml-auto text">
                    <p class="overview"><span>Overview:</span> ${overview}</p>
                </div>
                <div class="col-md-6 ml-auto text">
                    <p class="actors"><span>Cast:</span> ${actors}</p>
                </div>
                <div class="col-md-5 ml-auto list">
                <ul class="list-group">
                    <li class="list-group-item title">Series Info:</li>
                    <li class="list-group-item ml-5"><p>Creator: <span>${searchSerieIdRes.created_by[0].name}</span></p></li>
                    <li class="list-group-item ml-5"><p>Network: <span>${searchSerieIdRes.networks[0].name}</span></p></li>
                    <li class="list-group-item ml-5"><p>Language: <span>${lang}</span></p></li>
                    <li class="list-group-item ml-5"><p>Series Started: <span>${firstD}</span> Latest Air Date: <span>${lastD}</span></p></li>
                    <li class="list-group-item ml-5"><p>Runtime: ~ <span>${searchSerieIdRes.episode_run_time[0]}</span> minutes</p></li>
                    <li class="list-group-item ml-5"><p>Popularity: <span><i class="fas fa-heart fa-sm"></i> ${votes}</span> votes (${pop})</p></li>
                </ul>
                </div>
                <div class="col-md-5 ml-auto genres">
                    <span class="badge badge-pill badge-light ml-5">${searchSerieIdRes.genres[0].name}</span> 
                </div>
                <div class="col-md-5 ml-auto genres">
                    <button type="button" class="btn btn-outline-light" onclick="openVideo()">Trailer</button> 
                </div>
                <div class="col-md-12 mx-auto video-container">
                    <iframe src="https://www.youtube.com/embed/${video}?enablejsapi=1&fs=0&iv_load_policy=3&rel=0&showinfo=0" id="trailer-player" frameborder="0" allowfullscreen class="video"></iframe> 
                </div> 
            </div>
        `;
        document.querySelector('.modal-container').innerHTML = output;

        // set background in CSS
        const modalBgS = document.querySelector('.myModal');
        modalBgS.style.backgroundImage = `linear-gradient(45deg, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 20%,rgba(255,255,255,.15) 20%,rgba(0,0,0,0) 40%,rgba(0,0,0,0.80) 40%,rgba(0,0,0,0.80) 100%), url(http://image.tmdb.org/t/p/w1280/${bDrop})`;

        // Tell youtube API to load player
        loadYTplayer();

    });

    }

    clearModal () {
        const modal = document.querySelector('.myModal');
        const video = document.querySelector('.video-container');

        if (video.style.display === 'block') {
            video.style.display = 'none';
            player.stopVideo();
            
            
        }  else if (modal) {
            modal.remove();
            //set back to auto
            document.querySelector('body').style.overflow = 'auto';
        }
    }

    //! NAVBAR SECTION
    clearInput () {
        document.getElementById('inlineFormInputGroup').value = '';
    }

    activeLink (e) {
        const movies = document.getElementById('movies');
        const series = document.getElementById('series');
        const mIcon = document.querySelector('.fa-film');
        const sIcon = document.querySelector('.fa-tv');
        const clicked = e.target.id;
        
        
        // if movies is clicked add class on a and i and remove from series
        if (clicked === 'movies') {

            series.classList.remove('active-link');
            sIcon.classList.remove('active-link');
            movies.classList.add('active-link');
            mIcon.classList.add('active-link');
     
        //else add class to series and remove from movies
        } else if (clicked === 'series') {

            movies.classList.remove('active-link');
            mIcon.classList.remove('active-link');
            series.classList.add('active-link');
            sIcon.classList.add('active-link');
        }
    }

    // BrowseByGenre () {

        

    // }

  



}



//! IMPORTANT


//TODO ////// loop through the modal response and eliminate movies and series without a video 

//TODO ////// make textarea text color white on focus

// TODO //// search by genre on navbar

//TODO //// append new page to old one