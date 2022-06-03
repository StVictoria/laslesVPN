import NetflixImg from "../../assets/images/companies/netflix.png";
import RedditImg from "../../assets/images/companies/reddit.png";
import AmazonImg from "../../assets/images/companies/amazon.png";
import DiscordImg from "../../assets/images/companies/discord.png";
import SpotifyImg from "../../assets/images/companies/spotify.png";
import "./Companies.scss";

const companies = [
  { id: 1, name: "Netflix", src: NetflixImg },
  { id: 2, name: "Reddit", src: RedditImg },
  { id: 3, name: "Amazon", src: AmazonImg },
  { id: 4, name: "Discord", src: DiscordImg },
  { id: 5, name: "Spotify", src: SpotifyImg },
];

const Companies = () => {
  const renderCompanies = () => companies.map(company => (
    <img src={company.src} key={company.id} className="Companies-Img" alt={company.name} />
  ));
  
  return (
    <section className="Companies">
      {renderCompanies()}
    </section>
  )
};

export default Companies;