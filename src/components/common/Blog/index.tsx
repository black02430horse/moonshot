import { BlogModel } from "../../../models";
import { BlogComponentStyle } from "./index.style";
import { Box, BoxProps, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EditLocationOutlinedIcon from "@mui/icons-material/EditLocationOutlined";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import { TipButtonComponent } from "../TipButton";

type BlogComponentProps = BoxProps & {
  blog: BlogModel;
  index?: number;
  onEditBlog?: (index: number) => void;
  onDeleteBlog?: (index: number) => void;
};

export const BlogComponent: React.FC<BlogComponentProps> = (props) => {
  const { blog, index, onEditBlog, onDeleteBlog } = props;
  return (
    <BlogComponentStyle>
      <img src={`./storage/image/${blog.img}`} className="blog-image" />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography className="blog-creator">{blog.creator}</Typography>
        <Box display={"flex"} gap={"5px"} className="blog-btn-broup">
          <EditLocationOutlinedIcon
            onClick={() => {
              onEditBlog && onEditBlog(index ?? -1);
            }}
          />
          <RestoreFromTrashOutlinedIcon
            onClick={() => {
              onDeleteBlog && onDeleteBlog(index ?? -1);
            }}
          />
        </Box>
      </Box>
      <Typography className="blog-title">{blog.title}</Typography>
      <Typography className="blog-content">{blog.content}</Typography>
      <Box className="tip-btn-group">
        {blog.buttons.map((btn, index) => (
          <TipButtonComponent
            key={index}
            content={btn.content}
            btnColor={btn.color}
          />
        ))}
      </Box>
    </BlogComponentStyle>
  );
};
