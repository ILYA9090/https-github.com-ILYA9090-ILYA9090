import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=3',
      {
        params: {
          _limit: limit,
          _page: page,
        }
      }
    );
    return response;
  }
}
