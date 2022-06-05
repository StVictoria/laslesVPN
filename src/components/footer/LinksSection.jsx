import "./Footer.scss";

const linkSections = [
  { id: 1, title: "Product", links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"] },
  { id: 2, title: "Engage", links: ["LaslesVPN ? ", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"] },
  { id: 3, title: "Earn Money", links: ["Affiliate", "Become Partner"] },
];

const LinksSection = () => {
  const renderLinkSections = () => linkSections.map(section => (
    <div key={section.id} className="Footer-LinksColumn">
      <h4>{section.title}</h4>
      <ul key={section.id}>
        {section.links.map(link => <li key={link} className="Footer-Link"><a href="#">{link}</a></li>)}
      </ul>
    </div>
  ));

  return (
    <section className="Footer-LinksSection">
      {renderLinkSections()}
    </section>
  );
};

export default LinksSection;