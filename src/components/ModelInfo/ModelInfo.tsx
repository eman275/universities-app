import React from 'react';
import { Button, CloseButton, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { UniversityInterface } from '../../@types';
import UniversityCard from '../UniversityCard/UniversityCard';

export interface ModelInfoProps {
  onClose: () => void;
selectedUniversity?: UniversityInterface | undefined;
imageUrl? :string |undefined;
}

const ModelInfo = ({
  onClose,
  selectedUniversity,
  imageUrl
}: ModelInfoProps) => {

  return (
    <>
      <Modal isOpen={true} size="lg">

          <ModalHeader>
            <span>{selectedUniversity?.name}</span>

            <CloseButton onClick={onClose} />
          </ModalHeader>

          <ModalBody>
            <UniversityCard university={selectedUniversity} setSelectedUniversity={selectedUniversity} imageUrl={imageUrl}/>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-start">


            <Button onClick={onClose}>close</Button>
          </ModalFooter>

      </Modal>
    </>
  );
}

export default ModelInfo;
