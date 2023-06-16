import TicketListing from "./TicketListing";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid " style={{ marginLeft: 230 }}>
          <a className="navbar-brand text-white">Zendesk Ticket Details</a>
        </div>
      </nav>
      <TicketListing />
    </div>
  );
};
