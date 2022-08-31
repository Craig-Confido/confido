import Vuex from "vuex";
import Request from "~/common/request";
const state = {
  blogs: {},
  blog: {},
};

const getters = {
  getBlogPage(state) {
    return state.pages.blog;
  },
  getBlog(state) {
    return state.blogs;
  },
  getSelectedBlog(state) {
    return state.blog;
  },
};

const mutations = {
  SET_BLOG: (state, payload) => {
    state.pages.blog = payload;
  },
  SET_BLOGS: (state, payload) => {
    state.blogs = payload;
  },
  SET_SELECTED_BLOG: (state, payload) => {
    state.blog = payload;
  },
};

const actions = {
  async nuxtServerInit(context, payload) {
    const BlogsResponse = await Request.getBlogs();
    const Blogs = BlogsResponse.objects;
    if (Blogs) {
      context.commit("SET_BLOGS", Blogs);
    }
  },
  getBlog(context, payload) {
    // Nomral Blogs
    this.state.blogs.forEach((element) => {
      if (element.slug == payload) {
        context.commit("SET_SELECTED_BLOG", element);
      } else {
        context.commit("SET_SELECTED_BLOG", null);
      }
    });
  },
};

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  });
};

export default createStore;
