function mapResponse(apiData: APIResponse): Film[]{
    return apiData.Search.map((item) => ({
      title: item.Title,
      year: item.Year,
      imdbID: item.imdbID,
      type: item.Type,
      posterURL: item.Poster
    }));
  }

  export default mapResponse;