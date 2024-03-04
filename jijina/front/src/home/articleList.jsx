import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArticleCard from "./articleCard";
import { fetchArticle } from "../../features/articleSlice";
import { Container, Grid } from "@mui/material";

export default function ArticlesList() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);

  useEffect(() => {
    dispatch(fetchArticle());
  }, [dispatch]);

  return (
    <Container sx={{ mt: "100px", mb:'100px' }}>
      <Grid container spacing={2} sx={{}}>
        {articles.map((article) => (
          <Grid key={article._id} xs={12} md={3} item>
            <ArticleCard item={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
