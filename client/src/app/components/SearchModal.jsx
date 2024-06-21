import React, { useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "600px",
    width: "90%",
  },
};

const SearchModal = ({ isOpen, closeModal }) => {
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Search Tickets Modal"
    >
      <Formik
        initialValues={{ submitter: "", status: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="text-left text-2xl font-bold">
                  Search Tickets
                </div>
                <div className="text-right">
                  <img
                    src="/search.svg"
                    className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4"
                    alt="Search icon"
                  />
                </div>
              </div>
              <div className="text-left text-lg font-bold mt-7">Ticket ID</div>
              <div className="flex flex-wrap mt-4 -ml-[5.8px]">
                <div className="flex flex-col w-full md:w-1/2 px-2">
                  <div className="text-base">Submitter</div>
                  <div className="mt-3">
                    <Field
                      name="submitter"
                      placeholder="JohnDoe"
                      className="border border-gray-300 px-3 py-2 w-full"
                    />
                    <ErrorMessage
                      name="submitter"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-1/2 px-2">
                  <div className="text-base">Status</div>
                  <div className="mt-3">
                    <Field
                      name="status"
                      placeholder="Open"
                      className="border border-gray-300 px-3 py-2 w-full"
                    />
                    <ErrorMessage
                      name="status"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="text-left text-lg font-bold mt-6">Category</div>
              <div className="flex mt-4">
                {/* Column 1 */}
                <div className="w-1/3 mr-4 mb-4">
                  {/* Row 1 in Column 1 */}
                  <div className="p-5 bg-gray-100 flex items-center justify-center">
                    <img
                      src="/setting.svg"
                      className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4"
                      alt="Setting"
                    />
                  </div>
                  <div className="p-5 bg-gray-100 text-center -mt-6">
                    Technical
                  </div>
                </div>

                {/* Column 2 */}
                <div className="w-1/3 mr-4 mb-4">
                  <div className="p-5 bg-gray-100 flex items-center justify-center">
                    <img
                      src="/question.svg"
                      className="w-5 h-5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                      alt="Setting"
                    />
                  </div>
                  <div className="p-5 bg-gray-100 text-center -mt-6">
                    General Inquiry
                  </div>
                </div>

                {/* Column 3 */}
                <div className="w-1/3 mb-4">
                  <div className="p-4 bg-gray-100 text-center">
                    <div className="p-5 bg-gray-100 flex items-center justify-center -mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.486 0 0 4.486 0 10c0 5.515 4.486 10 10 10 5.515 0 10-4.485 10-10 0-5.514-4.485-10-10-10zm0 3c.965 0 1.801.422 2.397 1.08l-6.317 6.316A3.478 3.478 0 0 0 3 10c0 1.93 1.57 3.5 3.5 3.5.553 0 1.068-.13 1.533-.346L14.317 5.88A3.472 3.472 0 0 0 10 3z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M11 13h-2v2h2v-2zm0-6h-2v4h2V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-5 bg-gray-100 text-center -mt-8">
                    Bug Report
                  </div>
                </div>
              </div>
              <div className="text-left text-lg font-bold mt-2">
                Date submitted, last updated
              </div>
              <div className="flex flex-wrap mt-4">
                <div className="w-full md:w-1/4">
                  {/* Label */}
                  <div className="flex-1 text-sm">Submitted on</div>
                  <div className="flex w-full md:w-5/6">
                    <div className="mt-3 w-full">
                      <Field
                        name="status"
                        placeholder="138"
                        className="border px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="status"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4">
                  {/* Label */}
                  <div className="flex-1 text-sm">Last Updated</div>
                  <div className="flex w-full md:w-5/6">
                    <div className="mt-3 w-full">
                      <Field
                        name="lastUpdated"
                        type="number"
                        placeholder="138"
                        className="border px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="lastUpdated"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 px-4 text-sm">
                  Priority Level
                  <label className="inline-flex items-center mr-4 mt-6">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">Urgent</span>
                  </label>
                </div>
                <div className="w-full md:w-1/4 px-4">
                  {/* Column 4 content */}
                  <div className="w-full md:w-1/4 px-4 text-sm">
                    <label className="inline-flex items-center mr-4 mt-11">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2">Normal</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="text-left text-lg font-bold mt-5">Low</div>
              <div className="flex flex-wrap mt-4 -ml-[0.98rem]">
                <div className="w-full md:w-1/4 px-4 text-sm mr-5">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-nowrap">Add Attachment</span>
                  </label>
                </div>
                <div className="w-full md:w-1/4 px-4">
                  {/* Column 4 content */}
                  <div className="w-full md:w-1/4 px-4 text-sm">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-nowrap">Add Note</span>
                    </label>
                  </div>
                </div>
                <div className="w-full md:w-1/4 px-4">
                  {/* Column 4 content */}
                  <div className="w-full md:w-1/4 px-4 text-sm">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-nowrap">Assign to</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default SearchModal;
