type Film = {
    title: string;
    year: string;
    imdbID: string;
    type: string;
    posterURL: string;
}

type APIResponse = {
    Search: Array<{
      Title: string;
      Year: string;
      imdbID: string;
      Type: string;
      Poster: string;
    }>;
    totalResults: string;
    Response: string;
  };