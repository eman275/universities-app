import { Button, Col, Input, Row } from "reactstrap";
import { UniversityInterface } from "../../@types";
import { Helmet } from "react-helmet-async";
import { useCallback, useEffect, useState } from "react";
import useUniversities from "./useUniversities";
import UniversityCard from "../../components/UniversityCard/UniversityCard";

export default function Universities() {
  const [universities, setUniversities] = useState<UniversityInterface[]>();
  const [searchValue , setSearch] =useState<string |undefined>(undefined)
  const [offset, setOffset] = useState<number>(1);

  const universitiesList = useCallback(async (newOffset: number , searchValue :string | undefined) => {
    const response = await useUniversities.get("", {
      params: {
        offset: newOffset,
        limit: 10,
        search :searchValue
      },
    });
    if (newOffset === 1) {
      setUniversities(response.data);
    } else {
      setUniversities((prevUniversities) =>
        prevUniversities ? [...prevUniversities, ...response.data] : response.data
      );
    }
  }, []);

  useEffect(() => {
    universitiesList(offset , searchValue);
  }, [universitiesList, offset , searchValue]);


  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    const clientHeight = window.innerHeight;
    const scrolledToBottom = scrollTop + clientHeight >= scrollHeight;
  
    if (scrolledToBottom) {
      setOffset((prevOffset) => prevOffset + 1);
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Helmet>
        <title>universities Page</title>
      </Helmet>

      <h2 className="d-flex align-items-center justify-content-between">
        Universities
      </h2>

      <Row className="mt-5">
        <Col lg="12" md="12" sm="12" className="mb-3">
          <Input
            className="p-3"
            type="search"
            placeholder="Filter courses"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>

        {universities?.map((items: UniversityInterface, index) => (
          <UniversityCard key={index} university={items} />
        ))}

        {universities?.length === 0 && (
          <Col
            lg={12}
            md={12}
            sm={12}
            className="text-center p-5 h4 text-danger"
          >
            No universities Found
          </Col>
        )}
      </Row>
    </>
  );
}
