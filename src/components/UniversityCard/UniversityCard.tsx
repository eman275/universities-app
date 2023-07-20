import React from "react";
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Col,
} from "reactstrap";
import { UniversityInterface } from "../../@types";
import { CONFIG } from "../../config";
import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";

export interface UniversityCardPros {
  university: UniversityInterface | undefined;
  setSelectedUniversity: any;
  imageUrl?: string;
}

const UniversityCard = ({
  university,
  setSelectedUniversity,
  imageUrl,
}: UniversityCardPros) => (
  <>
    <Col md={3} sm={12} xm={12} className="mb-4">
      <a
        className="university-card"
        href={university?.web_pages[0]}
        target="_blank"
      >
        <Card>
          <CardImg
            src={imageUrl ? imageUrl : CONFIG.app.design.dummyImage}
            className="course-card-image"
            loading="lazy"
            alt="Card image cap"
            height={250}
          />

          <CardBody className="university-content-body">
            <h4 className="text-capitalize">{university?.name}</h4>
            <p>{university?.country}</p>
            
          </CardBody>
        </Card>
      </a>
    </Col>
  </>
);

export default UniversityCard;
