import { Col, Input, Row } from "reactstrap";
import { UniversityInterface } from "../../@types";
import { Helmet } from "react-helmet-async";
import { useCallback, useEffect, useState } from "react";
import useUniversities from "./useUniversities";
import UniversityCard from "../../components/UniversityCard/UniversityCard";
import debounce from "lodash/debounce";
import insertImageData from "../../utlis/Array";
import { randomImagesResponse } from "./data";

export default function Universities() {
  const [universities, setUniversities] = useState<UniversityInterface[]>();
  const [searchValue , setSearch] =useState<string |undefined>(undefined)
  const [offset, setOffset] = useState<number>(1);

  const [, setSelectedUniversity] = useState<
  UniversityInterface | undefined
>(undefined);

const handleCardClick = (university: UniversityInterface) => {
  setSelectedUniversity(university);
};


  const debouncedSetSearch = debounce((searchQuery: string | undefined) => {
    setSearch(searchQuery);
  }, 2000);
  const universitiesList = useCallback(async (newOffset: number, searchQuery: string | undefined) => {
    const response = await useUniversities.get("", {
      params: {
        offset: newOffset,
        limit: 10,
        name: searchQuery, 
        country: searchQuery, 
      },
    });
    if (newOffset === 1) {
  const updatedUniversitiesList= insertImageData(response.data, randomImagesResponse, 'imageUrl');

      setUniversities(updatedUniversitiesList);
    } else {
      setUniversities((prevUniversities) =>
        prevUniversities ? [...prevUniversities, ...response.data] : response.data
      );
    }
  }, []);
  

  useEffect(() => {
    universitiesList(offset, searchValue);
  }, [universitiesList, offset, searchValue]);
  


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


  // const updatedUniversitiesList= insertImageData(universities, randomImagesResponse, 'imageUrl');



  return (
    <>
      <Helmet>
        <title>universities Page</title>
      </Helmet>

      <h2 className="main-title">
        Universities
      </h2>

      <Row className="mt-5">
        <Col lg="12" md="12" sm="12" className="mb-3">
          <Input
            className="p-3"
            type="search"
            placeholder="Search"
            onChange={(e) => debouncedSetSearch(e.target.value)}
            
          />
        </Col>

        {universities?.map((university: UniversityInterface, index: number) => (
          <UniversityCard
            key={index}
            university={university}
            setSelectedUniversity={handleCardClick}
            imageUrl={university.imageUrl} // Use the imageUrl property for each university
          />
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
