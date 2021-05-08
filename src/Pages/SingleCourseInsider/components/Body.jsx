import PDFViewer from "pdf-viewer-reactjs";
import React from "react";
import ReactPlayer from "react-player";
import { Button, CardFooter, Col } from "reactstrap";

const Body = () => {
  return (
    <div className="singleCourseBodyInsiderContainer">
      {/* This is one Type of Content Type (PDF) */}
      <PDFViewer
        document={{
          url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
        }}
      />
      {/* This is one Type of Content Type (VIDEO) */}

      <Col md={12} sm={12} xs={12}>
        <ReactPlayer
          width="100%"
          stopOnUnmount={false}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </Col>
      {/* This is one Type of Content Type (TEXT) */}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil
        tenetur, id asperiores quod laboriosam quibusdam illum ullam fugit,
        iusto voluptatem. Consequuntur blanditiis repellat quibusdam tempora
        magnam laboriosam necessitatibus porro! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ipsa nihil tenetur, id asperiores quod
        laboriosam quibusdam illum ullam fugit, iusto voluptatem. Consequuntur
        blanditiis repellat quibusdam tempora magnam laboriosam necessitatibus
        porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        nihil tenetur, id asperiores quod laboriosam quibusdam illum ullam
        fugit, iusto voluptatem. Consequuntur blanditiis repellat quibusdam
        tempora magnam laboriosam necessitatibus porro! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ipsa nihil tenetur, id asperiores
        quod laboriosam quibusdam illum ullam fugit, iusto voluptatem.
        Consequuntur blanditiis repellat quibusdam tempora magnam laboriosam
        necessitatibus porro! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ipsa nihil tenetur, id asperiores quod laboriosam quibusdam illum
        ullam fugit, iusto voluptatem. Consequuntur blanditiis repellat
        quibusdam tempora magnam laboriosam necessitatibus porro! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsa nihil tenetur, id
        asperiores quod laboriosam quibusdam illum ullam fugit, iusto
        voluptatem. Consequuntur blanditiis repellat quibusdam tempora magnam
        laboriosam necessitatibus porro! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsa nihil tenetur, id asperiores quod laboriosam
        quibusdam illum ullam fugit, iusto voluptatem. Consequuntur blanditiis
        repellat quibusdam tempora magnam laboriosam necessitatibus porro! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil tenetur,
        id asperiores quod laboriosam quibusdam illum ullam fugit, iusto
        voluptatem. Consequuntur blanditiis repellat quibusdam tempora magnam
        laboriosam necessitatibus porro! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsa nihil tenetur, id asperiores quod laboriosam
        quibusdam illum ullam fugit, iusto voluptatem. Consequuntur blanditiis
        repellat quibusdam tempora magnam laboriosam necessitatibus porro!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil
        tenetur, id asperiores quod laboriosam quibusdam illum ullam fugit,
        iusto voluptatem. Consequuntur blanditiis repellat quibusdam tempora
        magnam laboriosam necessitatibus porro! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ipsa nihil tenetur, id asperiores quod
        laboriosam quibusdam illum ullam fugit, iusto voluptatem. Consequuntur
        blanditiis repellat quibusdam tempora magnam laboriosam necessitatibus
        porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        nihil tenetur, id asperiores quod laboriosam quibusdam illum ullam
        fugit, iusto voluptatem. Consequuntur blanditiis repellat quibusdam
        tempora magnam laboriosam necessitatibus porro! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ipsa nihil tenetur, id asperiores
        quod laboriosam quibusdam illum ullam fugit, iusto voluptatem.
        Consequuntur blanditiis repellat quibusdam tempora magnam laboriosam
        necessitatibus porro! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ipsa nihil tenetur, id asperiores quod laboriosam quibusdam illum
        ullam fugit, iusto voluptatem. Consequuntur blanditiis repellat
        quibusdam tempora magnam laboriosam necessitatibus porro! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsa nihil tenetur, id
        asperiores quod laboriosam quibusdam illum ullam fugit, iusto
        voluptatem. Consequuntur blanditiis repellat quibusdam tempora magnam
        laboriosam necessitatibus porro! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsa nihil tenetur, id asperiores quod laboriosam
        quibusdam illum ullam fugit, iusto voluptatem. Consequuntur blanditiis
        repellat quibusdam tempora magnam laboriosam necessitatibus porro! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil tenetur,
        id asperiores quod laboriosam quibusdam illum ullam fugit, iusto
        voluptatem. Consequuntur blanditiis repellat quibusdam tempora magnam
        laboriosam necessitatibus porro! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsa nihil tenetur, id asperiores quod laboriosam
        quibusdam illum ullam fugit, iusto voluptatem. Consequuntur blanditiis
        repellat quibusdam tempora magnam laboriosam necessitatibus porro!
      </p>
      <CardFooter className="courseBodyFooters">
        <Button>Previous</Button>
        <Button>Next</Button>
      </CardFooter>
    </div>
  );
};
export default Body;
