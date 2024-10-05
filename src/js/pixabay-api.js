import axios from "axios";

export const getPictures = async (name, currentPage) => {
    const KEY = '46001925-09c36435a6f5ed4e05a6b9a17';
  
     
    const searchParams = new URLSearchParams({
      key: KEY,
        q: name,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        per_page: 15,
        page: currentPage,
    });

    const response = await
        axios.get(`https://pixabay.com/api/?${searchParams}`)
      return response.data
};