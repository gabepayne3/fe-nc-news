import axios from "axios";

const gabesNewsApi = axios.create({
    baseURL: "https://my-personal-project-nh77.onrender.com/api"
})

export const getArticles = ({ sort_by = "date", order = "desc", topic } = {}) => {
    const sortFieldMap = { date: "created_at", votes: "votes", comment_count: "comment_count" };
      const params = { sort_by: sortFieldMap[sort_by] || "created_at", order };
    if (topic) {
      params.topic = topic;
    }
    return gabesNewsApi
      .get("/articles", { params })
      .then((res) => res.data.articles);
  };

export const getTopics = () => {
    return gabesNewsApi.get("/topics").then((res)=>{
        return res.data.topics;
    })
}

export const getArticleById = (article_id) => {
    return gabesNewsApi.get(`/articles/${article_id}`).then((res)=>{
        return res.data.article;
    })
}

export const getCommentsByArticleId = (article_id) => {
    return gabesNewsApi.get(`/articles/${article_id}/comments`)
      .then((res) => res.data.comments);
}

export const voteOnArticle = (article_id, incVotes) => {
    return gabesNewsApi.patch(`/articles/${article_id}`, {
      inc_votes: incVotes,
    });
  };
  
  export const voteOnComment = (comment_id, incVotes) => {
    return gabesNewsApi.patch(`/comments/${comment_id}`, {
      inc_votes: incVotes,
    });
  };

  export const postComment = ({ article_id, body, username }) => {
    return gabesNewsApi
      .post(`/articles/${article_id}/comments`, {
        username,
        body,
      })
      .then((res) => res.data); 
  };

  export const getUsers = () => {
    return gabesNewsApi.get("/users")
      .then((res) => res.data.users); 
  };

  export const deleteComment = (comment_id) => {
    return gabesNewsApi.delete(`/comments/${comment_id}`);
  };

  export const getArticlesByTopic = (topicSlug) => {
    return gabesNewsApi
      .get(`/articles`, { params: { topic: topicSlug } })
      .then((res) => res.data.articles);
  };