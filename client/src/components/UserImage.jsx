import { Box } from "@mui/material";
import { serverUrl } from "constant";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${serverUrl}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
