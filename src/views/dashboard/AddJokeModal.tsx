import {Button, Label, Modal, Textarea} from "flowbite-react";
import React from "react";

function AddJokeModal({show, closeModal}: any) {

    return (
        <Modal
            show={show}
            size="md"
            onClose={closeModal}
        >
            <Modal.Body>
                <div className="w-full">
                    <form className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-center">Add Joke</h2>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Enter your joke"
                                />
                            </div>
                            <Textarea rows={8} placeholder="Type your joke here ..."/>
                        </div>
                        <div className="flex justify-end gap-4">
                            <Button color="gray" onClick={closeModal}>Cancel</Button>
                            <Button>Submit</Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default AddJokeModal;