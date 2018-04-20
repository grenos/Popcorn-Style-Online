class Movie {
    constructor(page) {
        this.apikey = 'fdde855cd4b047fb1a0ea24a7ec58362';
        //this.page = 1;
    }
   
    //! TOP MOVIES AND SERIES
    async topMovies (page) {

        const topMoviesRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);

        const topMoviesInfo = await topMoviesRes.json();
        return topMoviesInfo;  
    }

    async topSeries (page) {
        const topSeriesRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc&page=${page}`);

        const topSeriesInfo = await topSeriesRes.json();
        return topSeriesInfo;
    }


    //! SEARCH MOVIES AND SERIES
    async searchCatalogue (userText) {
        const searchMovieCatalogueRes = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&query=${userText}`);

        const searchSeriesCatalogueRes = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&query=${userText}`);

        const searchMovieCatalogueInfo = await searchMovieCatalogueRes.json();
        const searchSeriesCatalogueInfo = await searchSeriesCatalogueRes.json();

        return {
            searchMovieCatalogueInfo,
            searchSeriesCatalogueInfo
        }

    }

    //! GET MOVIE AND SERIES AND CREDITS BY ID  <<<< MODAL >>>>>
    async searchMovieId (clickId) {
        const movieDetailsRes = await fetch(`https://api.themoviedb.org/3/movie/${clickId}?api_key=${this.apikey}&language=en-US&append_to_response=videos`);

        const movieCastRes = await fetch(`https://api.themoviedb.org/3/movie/${clickId}/credits?api_key=${this.apikey}&language=en-US`);

        const movieDetailsInfo = await movieDetailsRes.json();
        const movieCastInfo = await movieCastRes.json();

        return {
            movieDetailsInfo,
            movieCastInfo
        }
    }

    async searchSerieId (clickId) {
        const serieDetailsRes = await fetch(`https://api.themoviedb.org/3/tv/${clickId}?api_key=${this.apikey}&language=en-US&append_to_response=videos,similar,credits`);

        const serieDetailsInfo = await serieDetailsRes.json();
        return serieDetailsInfo;
    }


    //! MOVIES AND SERIES BY GENRE
    async movieGenre (page, genre) {

        const movieGenreRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`);

        const movieGenreInfo = await movieGenreRes.json();
        return movieGenreInfo;  
    }

    async serieGenre (page, genre) {
        const serieGenreRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genre}`);

        const serieGenreInfo = await serieGenreRes.json();
        return serieGenreInfo;
    }

    
}

