import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TicketDetails from "./TicketDetails";

function TicketListing() {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [modeldata, setModeldata] = useState({
    id: "",
    subject: "",
    description: "",
    status: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (page, per_Pgae) => {
    fetch("http://localhost:4000/auth", {
      method: "POST",
      body: JSON.stringify({
        page: page,
        per_Pgae: per_Pgae,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((post) => {
        setItems(post.tickets);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    handleSubmit(1, 10);
  }, []);

  const handlePageClick = async (data) => {
    handleSubmit(data.selected + 1, 10);
  };

  const showDetail = (item) => {
    setModeldata(item);
    handleShow();
  };

  return (
    <>
      <div className="container">
        <div className="row m-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.subject}</td>
                    <td>{item.status}</td>
                    <td>
                      <Button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e) => {
                          handleShow();
                          showDetail(item);
                        }}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Get Details
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={10}
          marginPagesDisplayed={3}
          pageRangeDisplayed={6}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
        <TicketDetails
          ticket={modeldata}
          handleClose={handleClose}
          handleShow={handleShow}
          show={show}
        />
      </div>
    </>
  );
}

export default TicketListing;
