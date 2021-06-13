import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const UniversityCard = ({ university, index }) => {
  const {
    name = "",
    country = "",
    web_pages: [link = ""]
  } = university;
  let url = link;
  if (!/^https?:\/\//i.test(url) || !/^http?:\/\//i.test(url)) {
    url = "http://" + url;
  }
  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {index + 1}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="a"
          href={url}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {country}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UniversityCard;
