import React from 'react';
import { Badge, Card, CardBody, CardFooter, CardImg, CardTitle, Col } from 'reactstrap';
import { UniversityInterface } from '../../@types';
import { CONFIG } from '../../config';
import { BiLink } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export interface UniversityCardPros {
  university: UniversityInterface;
  setSelectedUniversity?: React.Dispatch<React.SetStateAction<UniversityInterface | undefined>>;
  onOpen?: (course?: UniversityInterface) => void;
}

const UniversityCard = ({
  university,
  setSelectedUniversity,
  onOpen,
}: UniversityCardPros) => (
  <>
    <Col md={6} sm={12} xm={12} className="mb-4 course-card">
      <Card>
        <CardImg
          src={ CONFIG.app.design.dummyImage}
          className="course-card-image"
          loading="lazy"
          alt="Card image cap"
          height={250}
        />

        <CardTitle className="p-3 d-flex justify-content-end gap-2 align-items-center">
          <Link to={university?.web_pages[0]} target="_blank"> 
          <Badge className="p-2" color="success">
              <BiLink />
          </Badge>
            </Link>
        </CardTitle>

        <CardBody className="pt-0 course-content-body">
          <h4 className="text-capitalize">{university.name}</h4>
          <p>{university.country}</p>
        </CardBody>

          <CardFooter className="d-flex gap-2 justify-content-end">
            //DO SOME SOMING HERE
          </CardFooter>
       
      </Card>
    </Col>
  </>
);

export default UniversityCard;
