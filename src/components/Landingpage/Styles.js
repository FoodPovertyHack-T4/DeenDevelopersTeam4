import { makeStyles } from "@mui/styles";

const styles = (theme) => {
  return {
    toolBar: {
      height: "10vh",
      display: "flex",
      textAlign: "right",
      padding: "20px",
      backgroundColor: "white",
      alignItems: "center",
    },
    logo: {
      color: "43A047",
      cursor: "pointer",
    },
    link: {
      color: "#000",
    },
    gridContainer: {
      display: "flex",
      alignItems: "center",
      maxWidth: "1300px",
      padding: "50px",
    },
    title: {
      paddingBottom: "15px",
    },
    subtitle: {
      opacity: "0.4",
      paddingBottom: "30px",
    },
    largeImage: {
      width: "80%",
    },
    sectionGridContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      minHeight: "500px",
    },
    sectionGridItem: {
      backgroundColor: "#f2f0f1",
      textAlign: "center",
      padding: "30px",
      width: "200px",
      borderRadius: "10px",
      margin: "10px !important",
    },
    footerContainer: {
      display: "flex",
      alignItems: "center",
      miHeight: "10vh",
      padding: "20px",
      justifyContent: "center",
      backgroundColor: "#f2f0f1",
      flexDirection: "column",
    },
    footerText: {
      paddingBottom: "10px",
    },
    footerDate: {
      opacity: "0.4",
    },
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
