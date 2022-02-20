import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';

export function RecipeDetailControls({ slug, onDeleteRecipe }) {
  const [modal, setModal] = useState(false);

  return (
    <div className="edit-buttons">
      <Button onClick={() => setModal(!modal)} className="btn btn_primary">
        Vymazať recept
      </Button>

      <Link to={`/recipe/${slug}/edit`} className="btn btn_secondary">
        Upraviť recept
      </Link>

      <Modal toggle={() => setModal(!modal)} isOpen={modal} centered>
        <ModalBody>Naozaj chceš tento recept zmazať?</ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={onDeleteRecipe}>
            Ano
          </Button>

          <Button onClick={() => setModal(!modal)} color="danger">
            Nie
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
