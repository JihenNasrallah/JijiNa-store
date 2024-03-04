import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import articleService from "../services/articleService";
import { toast } from "react-toastify";

const initialState = {
  articles: [],
  loading: false,
  article: null,
  error: "",
  message: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchArticle = createAsyncThunk(
  "article/fetchArticle",
  async (thunkAPI) => {
    try {
      return await articleService.getArticles();
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (articleData, thunkAPI) => {
    try {
      return await articleService.addArticle(articleData);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const editArticle = createAsyncThunk(
  "article/editArticle",
  async ({ articleId, article }, thunkAPI) => {
    try {
      await articleService.editArticle(articleId, article);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteArticle = createAsyncThunk(
  "article/deleteArticle",
  async (articleId, thunkAPI) => {
    try {
      await articleService.deleteArticle(articleId);
      return articleId;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchArticle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArticle.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload;
      state.error = "";
    });
    builder.addCase(fetchArticle.rejected, (state, action) => {
      state.loading = false;
      state.articles = [];
      state.error = action.error.message;
    });


    builder.addCase(addArticle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addArticle.fulfilled, (state, action) => {
      state.loading = false;
      state.articles.push(action.payload);
      toast.success("A new article is added !", {
        position: "bottom-left",
      });
      state.error = "";
    });
    builder.addCase(addArticle.rejected, (state, action) => {
      state.loading = false;
      state.articles = [];
      state.message = action.payload;
      state.error = action.error.message;
    });


    builder.addCase(editArticle.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(editArticle.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.product = action.payload;
      window.location.reload();
      toast.info("Article updated from cart", {
        position: "bottom-left",
      });
    });
    builder.addCase(editArticle.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    builder.addCase(deleteArticle.pending, (state, action) => {
        state.loading = true;
      });
  
      builder.addCase(deleteArticle.fulfilled, (state, action) => {
        state.loading = false;
        // Filter out the deleted product from the state
        state.Article = state.articles.filter(
          (product) => product.id !== action.payload
        );
        toast.error("Article removed from cart", {
            position: "bottom-left",
          });
        window.location.reload();
        state.error = "";
      });
  
      builder.addCase(deleteArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default articleSlice.reducer;
