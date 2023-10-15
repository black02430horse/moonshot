import { BlogModel } from "../../../models";
import { BlogComponentStyle } from "./index.style";
import { Box, BoxProps, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { TipButtonComponent } from "../TipButton";

type BlogComponentProps = BoxProps & {
  blog: BlogModel;
};

export const BlogComponent: React.FC<BlogComponentProps> = (props) => {
  const { blog } = props;
  return (
    <BlogComponentStyle>
      <img src={blog.img} className="blog-image" />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography className="blog-creator">{blog.creator}</Typography>

        <ArrowOutwardIcon />
      </Box>
      <Typography className="blog-title">{blog.title}</Typography>
      <Typography className="blog-content">{blog.content}</Typography>
      <Box className="tip-btn-group">
        {blog.buttons.map((btn) => (
          <TipButtonComponent content={btn.content} btnColor={btn.color} />
        ))}
      </Box>
    </BlogComponentStyle>
  );
};
